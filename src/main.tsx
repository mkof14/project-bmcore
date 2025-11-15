import React from "react"
import ReactDOM from "react-dom/client"
import { ClerkProvider } from "@clerk/clerk-react"
import App from "./App"
import "./index.css"

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const Root = () => (
  <div className="min-h-screen bg-slate-950 text-white">
    <div className="p-2 text-xs text-emerald-400 border-b border-slate-800">
      React root OK · Clerk key: {publishableKey ? "SET" : "MISSING"}
    </div>
    {publishableKey ? (
      <ClerkProvider publishableKey={publishableKey}>
        <App />
      </ClerkProvider>
    ) : (
      <div className="p-4 text-red-400">Missing VITE_CLERK_PUBLISHABLE_KEY</div>
    )}
  </div>
)

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
