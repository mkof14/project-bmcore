import { prisma } from "../../src/lib/prisma.ts"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.statusCode = 405
    res.end("Method Not Allowed")
    return
  }

  try {
    const body = await new Promise<any>(resolve => {
      let data = ""
      req.on("data", chunk => (data += chunk))
      req.on("end", () => {
        try {
          resolve(JSON.parse(data || "{}"))
        } catch {
          resolve({})
        }
      })
    })

    const { userId, clerkId, title, content } = body

    let dbUserId = userId as string | undefined

    if (!dbUserId && clerkId) {
      const user = await prisma.user.findUnique({
        where: { clerkId: clerkId as string }
      })
      dbUserId = user ? user.id : undefined
    }

    if (!dbUserId || !title || !content) {
      res.statusCode = 400
      res.setHeader("Content-Type", "application/json")
      res.end(JSON.stringify({ ok: false, error: "missing_fields" }))
      return
    }

    const report = await prisma.report.create({
      data: {
        userId: dbUserId,
        title,
        content
      }
    })

    res.setHeader("Content-Type", "application/json")
    res.statusCode = 200
    res.end(JSON.stringify({ ok: true, report }))
  } catch {
    res.statusCode = 500
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({ ok: false }))
  }
}
