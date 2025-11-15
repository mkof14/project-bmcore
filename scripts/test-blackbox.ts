import { prisma } from "../src/lib/prisma.ts"

async function main() {
  const user = await prisma.user.findFirst()
  if (!user) {
    console.log("no user")
    return
  }

  const saved = await prisma.blackBox.upsert({
    where: { userId: user.id },
    update: { encryptedPayload: "encrypted:demo-payload" },
    create: {
      userId: user.id,
      encryptedPayload: "encrypted:demo-payload"
    }
  })

  const box = await prisma.blackBox.findUnique({
    where: { userId: user.id }
  })

  console.log("BlackBox saved id:", saved.id)
  console.log("BlackBox payload:", box?.encryptedPayload)
}

main()
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
