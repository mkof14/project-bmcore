import { prisma } from "./prisma"

type ClerkUserInput = {
  id: string
  email?: string | null
  fullName?: string | null
  imageUrl?: string | null
}

export async function upsertUserFromClerk(input: ClerkUserInput) {
  const { id, email, fullName, imageUrl } = input
  return prisma.user.upsert({
    where: { clerkId: id },
    update: {
      email: email ?? undefined,
      fullName: fullName ?? undefined,
      imageUrl: imageUrl ?? undefined
    },
    create: {
      clerkId: id,
      email: email ?? null,
      fullName: fullName ?? null,
      imageUrl: imageUrl ?? null
    }
  })
}

export async function getUserByClerkId(id: string) {
  return prisma.user.findUnique({ where: { clerkId: id } })
}
