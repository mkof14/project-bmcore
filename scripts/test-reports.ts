import { prisma } from "../src/lib/prisma.ts"

async function main() {
  const user = await prisma.user.findFirst()
  if (!user) {
    console.log("no user")
    return
  }

  const report = await prisma.report.create({
    data: {
      userId: user.id,
      title: "Test report",
      content: "This is a test report for " + user.email
    }
  })

  const reports = await prisma.report.findMany({ where: { userId: user.id } })

  console.log("Created report:", report.id)
  console.log("Total reports for user:", reports.length)
}

main()
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
