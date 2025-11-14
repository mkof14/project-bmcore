import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useUser, SignInButton, UserButton } from "@clerk/clerk-react"
import { useTheme } from "../contexts/ThemeContext"

type HeaderProps = {
  onNavigate: (page: string, data?: string) => void
  currentPage: string
}

const navItems = [
  { key: "home", label: "Home" },
  { key: "services", label: "Services" },
  { key: "services-catalog", label: "All Services" },
  { key: "pricing", label: "Pricing" },
  { key: "investors", label: "Investors" },
  { key: "about", label: "About" },
  { key: "member-zone", label: "Member" }
]

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { isSignedIn } = useUser()

  const handleNav = (page: string) => {
    onNavigate(page)
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-900/60 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => handleNav("home")}
          className="flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-orange-500 via-red-500 to-blue-500 shadow-lg" />
          <span className="text-xl font-semibold tracking-tight">
            <span className="text-blue-500">BioMath</span>{" "}
            <span className="text-white">Core</span>
          </span>
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map(item => (
            <button
              key={item.key}
              onClick={() => handleNav(item.key)}
              className={`text-sm font-medium transition-colors ${
                currentPage === item.key
                  ? "text-white"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={toggleTheme}
            className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-200 hover:border-slate-500"
          >
            {theme === "dark" ? "Dark" : "Light"}
          </button>

          {isSignedIn ? (
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleNav("member-zone")}
                className="rounded-full bg-blue-600/20 px-4 py-1.5 text-sm font-medium text-blue-400 ring-1 ring-blue-500/40 hover:bg-blue-600/30"
              >
                Go to Member
              </button>
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <SignInButton>
              <button className="rounded-full bg-white/5 px-4 py-1.5 text-sm font-semibold text-slate-50 ring-1 ring-white/20 backdrop-blur hover:bg-white/10">
                Sign In / Up
              </button>
            </SignInButton>
          )}
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <SignInButton>
              <button className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-50 ring-1 ring-white/20">
                Sign In
              </button>
            </SignInButton>
          )}
          <button
            onClick={() => setOpen(v => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 text-slate-100"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-4 pb-4 pt-2 md:hidden">
          <div className="space-y-1">
            {navItems.map(item => (
              <button
                key={item.key}
                onClick={() => handleNav(item.key)}
                className={`block w-full rounded-lg px-3 py-2 text-left text-sm font-medium ${
                  currentPage === item.key
                    ? "bg-slate-900 text-white"
                    : "text-slate-300 hover:bg-slate-900 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between">
            <button
              onClick={toggleTheme}
              className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-200 hover:border-slate-500"
            >
              {theme === "dark" ? "Dark" : "Light"}
            </button>
            {isSignedIn && (
              <button
                onClick={() => handleNav("member-zone")}
                className="rounded-full bg-blue-600/20 px-3 py-1 text-xs font-medium text-blue-400 ring-1 ring-blue-500/40 hover:bg-blue-600/30"
              >
                Member
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
