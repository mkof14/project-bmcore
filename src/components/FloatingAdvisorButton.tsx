import { useState } from "react"
import { MessageCircle, Sparkles, X } from "lucide-react"

type FloatingAdvisorButtonProps = {
  onNavigate?: (page: string) => void
}

export default function FloatingAdvisorButton({ onNavigate }: FloatingAdvisorButtonProps) {
  const [open, setOpen] = useState(false)

  const goMember = () => {
    onNavigate?.("member-zone")
    setOpen(false)
  }

  return (
    <>
      {/* PANEL */}
      {open && (
        <div className="fixed inset-0 z-40 flex items-end justify-end pointer-events-none">
          <div className="pointer-events-auto mb-28 mr-4 md:mb-32 md:mr-8">
            <div className="w-80 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl p-4 space-y-4 animate-fade-in">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 rounded-2xl bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-emerald-500/40">
                    <Sparkles className="h-5 w-5 text-slate-950" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wide text-emerald-400">
                      AI Health Advisor
                    </div>
                    <div className="text-sm text-slate-300">
                      Contextual guidance based on your profile & reports.
                    </div>
                  </div>
                </div>
                <button
                  className="h-7 w-7 flex items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="text-xs text-slate-400 leading-relaxed">
                Your personalized advisor uses your questionnaires,
                progress and recent metrics to guide your next step.
                <div className="text-emerald-400 mt-2">
                  Voice + full conversation model coming soon.
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 text-slate-900 px-4 py-2 font-semibold shadow-xl shadow-emerald-500/25 hover:brightness-110"
                  onClick={goMember}
                >
                  <MessageCircle className="h-4 w-4" />
                  Go to Member Zone
                </button>

                <button
                  className="rounded-full bg-slate-900 border border-slate-700 px-4 py-2 text-xs text-slate-200 hover:bg-slate-800"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-40 flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 px-4 py-2 shadow-xl shadow-emerald-500/40 hover:brightness-110 animate-float"
      >
        <div className="relative h-10 w-10 rounded-full bg-slate-950/10 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-emerald-300/40 blur-lg"></div>
          <MessageCircle className="relative h-5 w-5 text-slate-950" />
        </div>

        <div className="flex flex-col items-start leading-tight">
          <span className="text-[10px] uppercase tracking-wide opacity-90">
            AI Health Advisor
          </span>
          <span className="text-xs font-semibold text-slate-950">
            Ask your next step
          </span>
        </div>
      </button>
    </>
  )
}
