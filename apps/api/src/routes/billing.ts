import { FastifyPluginAsync } from 'fastify'
import Stripe from 'stripe'
import { z } from 'zod'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient() as any
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const createSchema = z.object({
  priceId: z.string(),
  quantity: z.number().int().positive().default(1),
  successUrl: z.string().url(),
  cancelUrl: z.string().url(),
  email: z.string().email()
})

const plugin: FastifyPluginAsync = async (app) => {
  app.post('/create-checkout-session', async (req, reply) => {
    const body = createSchema.parse(req.body)
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: body.priceId, quantity: body.quantity }],
      success_url: body.successUrl,
      cancel_url: body.cancelUrl,
      customer_email: body.email,
      automatic_tax: { enabled: true }
    })
    return reply.send({ id: session.id, url: session.url })
  })

  app.post('/webhook', async (req, reply) => {
    const sig = req.headers['stripe-signature'] as string
    const raw = (req as any).rawBody as Buffer
    let event: Stripe.Event
    try {
      event = stripe.webhooks.constructEvent(raw, sig, process.env.STRIPE_WEBHOOK_SECRET!)
    } catch {
      return reply.code(400).send({ ok: false })
    }

    await prisma.webhookEvent.create({ data: { type: event.type, sig, payload: event as any } })

    if (event.type === 'checkout.session.completed') {
      const s = event.data.object as Stripe.Checkout.Session
      const subId = s.subscription as string | undefined
      const email = s.customer_email ?? undefined
      if (email && subId) {
        const sub = (await stripe.subscriptions.retrieve(subId)) as unknown as Stripe.Subscription
        let user = await prisma.user.findUnique({ where: { email } })
        if (!user) user = await prisma.user.create({ data: { email } })
        await prisma.subscription.upsert({
          where: { stripeSubId: sub.id },
          update: {
            status: sub.status,
            currentPeriodEnd: new Date((sub as any).current_period_end * 1000)
          },
          create: {
            userId: user.id,
            stripeCustomerId: String(sub.customer),
            stripeSubId: sub.id,
            priceId: sub.items.data[0]?.price.id ?? 'unknown',
            status: sub.status,
            currentPeriodEnd: new Date((sub as any).current_period_end * 1000)
          }
        })
      }
    }

    return reply.send({ ok: true })
  })
}

export default plugin
