import { prisma } from "../src/lib/prisma.ts"

async function main() {
  const admin = await prisma.user.upsert({
    where: { clerkId: "admin_local" },
    update: {
      role: "ADMIN"
    },
    create: {
      clerkId: "admin_local",
      email: "admin@example.com",
      role: "ADMIN"
    }
  })

  console.log("Admin user:", admin)
}

main()
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
