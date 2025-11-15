import { prisma } from "./prisma.ts"

type ClerkUserInput = {
  id: string
  email?: string | null
  fullName?: string | null
  imageUrl?: string | null
}

export async function upsertUserFromClerk(input: ClerkUserInput) {
  const { id, email, imageUrl } = input
  return prisma.user.upsert({
    where: { clerkId: id },
    update: {
      email: email ?? undefined,
      imageUrl: imageUrl ?? undefined
    },
    create: {
      clerkId: id,
      email: email ?? null,
      imageUrl: imageUrl ?? null
    }
  })
}

export async function getUserByClerkId(id: string) {
  return prisma.user.findUnique({ where: { clerkId: id } })
}
