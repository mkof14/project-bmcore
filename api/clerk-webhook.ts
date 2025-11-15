import { upsertUserFromClerk } from "../src/lib/users.ts"

export default async function handler(req: any, res: any) {
  try {
    const evt = (req as any).body || {}
    const data = (evt as any).data || evt

    const id =
      (data as any).id ||
      (data as any).user_id ||
      (data as any).clerk_id

    const email =
      (data as any).email ||
      (data as any).email_address ||
      (Array.isArray((data as any).email_addresses)
        ? (data as any).email_addresses[0]?.email_address
        : undefined)

    if (!id) {
      res.statusCode = 400
      res.setHeader("Content-Type", "application/json")
      res.end(JSON.stringify({ error: "missing id" }))
      return
    }

    const user = await upsertUserFromClerk({ id, email })

    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({ ok: true, userId: user.id }))
  } catch (err) {
    console.error("Clerk webhook error", err)
    res.statusCode = 500
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({ ok: false }))
  }
}
