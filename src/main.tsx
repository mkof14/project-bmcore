import React from "react"
import ReactDOM from "react-dom/client"
import { ClerkProvider } from "@clerk/clerk-react"
import App from "./App"
import "./index.css"

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

function Root() {
  if (!publishableKey) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-sm text-red-400">
          Missing VITE_CLERK_PUBLISHABLE_KEY
        </div>
      </div>
    )
  }

  return (
    <ClerkProvider publishableKey={publishableKey}>
      <App />
    </ClerkProvider>
  )
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
