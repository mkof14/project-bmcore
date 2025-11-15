import { prisma } from '../src/lib/prisma.ts'

async function main() {
  const users = await prisma.user.findMany()
  console.log('Users count:', users.length)
  if (users.length) {
    console.log('First user:', users[0])
  }
}

main()
  .catch(err => {
    console.error('DB error:', err)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
