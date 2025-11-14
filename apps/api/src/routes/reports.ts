import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function plugin(app: FastifyInstance, opts: FastifyPluginOptions) {
  app.post('/reports', async (request, reply) => {
    const body = request.body as { userId?: string; filename?: string; key?: string }
    if (!body?.userId || !body?.filename || !body?.key) {
      reply.code(400)
      return { ok: false }
    }
    const report = await prisma.report.create({
      data: {
        userId: body.userId,
        filename: body.filename,
        key: body.key
      }
    })
    return { ok: true, report }
  })
}

export default plugin
