import { ReactNode } from 'react'
import { useUser, SignInButton } from '@clerk/clerk-react'

type AuthGateProps = {
  children: ReactNode
}

export default function AuthGate({ children }: AuthGateProps) {
  const { isSignedIn } = useUser()

  if (!isSignedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <div className="space-y-4 text-center">
          <h1 className="text-2xl font-semibold">Sign in to continue</h1>
          <p className="text-sm text-gray-300">
            You need an account to access this section of BioMath Core.
          </p>
          <SignInButton>
            <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium">
              Sign in with Clerk
            </button>
          </SignInButton>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
