import { prisma } from "../../src/lib/prisma.ts"

export default async function handler(req, res) {
  const userId = req.query.userId as string | undefined

  if (!userId) {
    res.statusCode = 400
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({ ok: false, error: "missing_userId" }))
    return
  }

  const box = await prisma.blackBox.findUnique({
    where: { userId }
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
