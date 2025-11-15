import { prisma } from "../../src/lib/prisma.ts"

export default async function handler(req, res) {
  const userId = req.query.userId
  if (!userId) {
    res.statusCode = 400
    return res.end(JSON.stringify({ error: "missing userId" }))
  }

  const reports = await prisma.report.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" }
  })

  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify({ ok: true, reports }))
}
