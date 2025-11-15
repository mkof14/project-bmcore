import { prisma } from "./prisma.ts"

type ClerkUserInput = {
  id: string
  email?: string | null
}

export async function upsertUserFromClerk(input: ClerkUserInput) {
  const { id, email } = input
  return prisma.user.upsert({
    where: { clerkId: id },
    update: {
      email: email ?? undefined
    },
    create: {
      clerkId: id,
      email: email ?? null
    }
  })
}

export async function getUserByClerkId(id: string) {
  return prisma.user.findUnique({ where: { clerkId: id } })
}
