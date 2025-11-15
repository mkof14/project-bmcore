import { prisma } from "../src/lib/prisma"
import { upsertUserFromClerk } from "../src/lib/users"

async function main() {
  const user = await upsertUserFromClerk({
    id: "demo_clerk_id",
    email: "demo@example.com",
    fullName: "Demo User",
    imageUrl: null
  })
  console.log("User:", user)
  const all = await prisma.user.findMany()
  console.log("Total:", all.length)
}

main()
  .catch(err => { console.error(err); process.exit(1) })
  .finally(async () => { await prisma.$disconnect() })
