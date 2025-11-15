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
      req.on("end", () => resolve(JSON.parse(data || "{}")))
    })

    const { userId, payload } = body

    if (!userId || typeof payload !== "string") {
      res.statusCode = 400
      res.setHeader("Content-Type", "application/json")
      res.end(JSON.stringify({ ok: false, error: "invalid_input" }))
      return
    }

    const box = await prisma.blackBox.upsert({
      where: { userId },
      update: { encryptedPayload: payload },
      create: { userId, encryptedPayload: payload }
    })

    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({ ok: true, id: box.id }))
  } catch (err) {
    res.statusCode = 500
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({ ok: false }))
  }
}
