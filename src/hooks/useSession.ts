import { useEffect, useState } from 'react'
import { useUser } from '@clerk/clerk-react'

type SessionUser = {
  id: string
  email: string | null
}

export function useSession(): SessionUser | null {
  const { user } = useUser()

  if (!user) return null

  return {
    id: user.id,
    email: user.primaryEmailAddress?.emailAddress ?? null
  }
}

export function useAdmin() {
  const session = useSession()
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!session) {
      setIsAdmin(false)
      setLoading(false)
      return
    }
    setIsAdmin(false)
    setLoading(false)
  }, [session])

  return { isAdmin, loading }
}
