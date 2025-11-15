import { prisma } from "../../src/lib/prisma.ts"

export default async function handler(req, res) {
  const userId = req.query.userId as string | undefined
  const clerkId = req.query.clerkId as string | undefined

  let dbUserId = userId

  if (!dbUserId && clerkId) {
    const user = await prisma.user.findUnique({
      where: { clerkId }
    })
    dbUserId = user ? user.id : undefined
  }

  if (!dbUserId) {
    res.statusCode = 400
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({ ok: false, error: "missing_user" }))
    return
  }

  const box = await prisma.blackBox.findUnique({
    where: { userId: dbUserId }
  })

  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.end(
    JSON.stringify({
      ok: true,
      payload: box ? box.encryptedPayload : null
    })
  )
}
