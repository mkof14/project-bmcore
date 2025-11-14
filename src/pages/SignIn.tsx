import { SignIn } from "@clerk/clerk-react"

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="max-w-md w-full">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 h-12 w-12 rounded-2xl bg-gradient-to-tr from-orange-500 via-red-500 to-blue-500 shadow-lg" />
          <div className="text-2xl font-semibold tracking-tight">
            <span className="text-blue-500">BioMath</span>{" "}
            <span className="text-white">Core</span>
          </div>
          <p className="mt-2 text-sm text-slate-400">
            Sign in to access your personal health intelligence workspace.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-2xl">
          <SignIn
            appearance={{
              elements: {
                card: "bg-transparent border-0 shadow-none",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                footer: "hidden",
                formButtonPrimary:
                  "bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-xl shadow-md",
                socialButtonsBlockButton:
                  "border-slate-700 bg-slate-900/80 text-slate-100 hover:bg-slate-800",
                formFieldInput:
                  "bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-500",
                dividerLine: "bg-slate-800",
                dividerText: "text-slate-500"
              },
              variables: {
                colorPrimary: "#2563eb",
                colorBackground: "#020617",
                colorInputBackground: "#020617",
                colorInputText: "#e5e7eb",
                borderRadius: "0.75rem"
              }
            }}
            signUpUrl="/signup"
            afterSignInUrl="/"
          />
        </div>
      </div>
    </div>
  )
}
