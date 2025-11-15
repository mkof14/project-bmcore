import { Stethoscope } from "lucide-react"

type Props = {
  onClick?: () => void
}

export function FloatingAIHealthAdvisor({ onClick }: Props) {
  const handleClick = () => {
    if (onClick) {
      onClick()
      return
    }
    if (window.location.pathname.startsWith("/member")) {
      window.location.href = "/member"
    } else {
      const element = document.getElementById("ai-health-advisor")
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-xl hover:scale-105 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 transition-transform"
    >
      <Stethoscope className="h-5 w-5" />
      <span>AI Health Advisor</span>
    </button>
  )
}
