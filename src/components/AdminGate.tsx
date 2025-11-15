import { ReactNode } from "react"
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react"

type AdminGateProps = {
  children: ReactNode
}

export default function AdminGate({ children }: AdminGateProps) {
  const { user } = useUser()

  if (!user) {
    return (
      <SignedOut>
        <div className="min-h-[60vh] flex items-center justify-center bg-slate-950 text-white">
          <div className="max-w-md w-full px-6 py-8 bg-slate-900 rounded-2xl border border-slate-800 shadow-lg text-center">
            <h1 className="text-2xl font-semibold mb-2">Admin sign in required</h1>
            <p className="text-slate-400 mb-4">
              Please sign in with your administrator account to continue.
            </p>
          </div>
        </div>
      </SignedOut>
    )
  }

  const isAdmin = user.emailAddresses.some(e => e.emailAddress === "admin@example.com")

  if (!isAdmin) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-slate-950 text-white">
        <div className="max-w-md w-full px-6 py-8 bg-slate-900 rounded-2xl border border-slate-800 shadow-lg text-center">
          <h1 className="text-2xl font-semibold mb-2">Access restricted</h1>
          <p className="text-slate-400">
            This section is available only to administrators.
          </p>
        </div>
      </div>
    )
  }

  return <SignedIn>{children}</SignedIn>
}
