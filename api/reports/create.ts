import { prisma } from "../../src/lib/prisma.ts"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.statusCode = 405
    return res.end("Method Not Allowed")
  }

  try {
    const body = await new Promise(resolve => {
      let data = ""
      req.on("data", chunk => (data += chunk))
      req.on("end", () => resolve(JSON.parse(data || "{}")))
    })

    const { userId, title, content } = body

    const report = await prisma.report.create({
      data: {
        userId,
        title,
        content
      }
    })

    res.setHeader("Content-Type", "application/json")
    res.statusCode = 200
    res.end(JSON.stringify({ ok: true, report }))
  } catch (err) {
    res.statusCode = 500
    res.end(JSON.stringify({ ok: false }))
  }
}
