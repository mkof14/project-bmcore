import { ReactNode } from "react"
import { SignedIn, SignedOut } from "@clerk/clerk-react"

type AuthGateProps = {
  children: ReactNode
}

export default function AuthGate({ children }: AuthGateProps) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <div className="min-h-[60vh] flex items-center justify-center bg-slate-950 text-white">
          <div className="max-w-md w-full px-6 py-8 bg-slate-900 rounded-2xl border border-slate-800 shadow-lg text-center">
            <h1 className="text-2xl font-semibold mb-2">Sign in required</h1>
            <p className="text-slate-400 mb-4">
              Please use the Sign In button in the header to access this section.
            </p>
          </div>
        </div>
      </SignedOut>
    </>
  )
}
