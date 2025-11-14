import { SignUp } from "@clerk/clerk-react"

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <SignUp
          appearance={{
            layout: {
              socialButtonsPlacement: "top",
              socialButtonsVariant: "iconButton",
              logoPlacement: "none"
            },
            variables: {
              colorPrimary: "#2563eb",
              colorBackground: "#020617",
              colorInputBackground: "#020617",
              colorText: "#e5e7eb",
              borderRadius: "1.25rem"
            },
            elements: {
              card: "bg-slate-900/90 border border-slate-700 rounded-3xl shadow-2xl shadow-blue-500/20",
              headerTitle: "text-2xl font-semibold text-white",
              headerSubtitle: "text-sm text-slate-300",
              formFieldLabel: "text-xs font-medium text-slate-300",
              formFieldInput: "bg-slate-950 border border-slate-700 text-slate-50 text-sm rounded-xl",
              formFieldInput__phoneNumber: "bg-slate-950 border border-slate-700 text-slate-50 text-sm rounded-xl",
              formButtonPrimary: "bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl h-10 mt-2",
              footer: "hidden",
              footerActionText: "text-xs text-slate-300",
              footerActionLink: "text-xs text-blue-400 hover:text-blue-300",
              alternativeMethodsBlock: "text-xs text-slate-400",
              dividerText: "text-xs text-slate-400",
              formFieldAction__password: "text-xs text-blue-400 hover:text-blue-300"
            }
          }}
        />
      </div>
    </div>
  )
}
