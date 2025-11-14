type PricingProps = {
  onNavigate: (page: string, data?: string) => void
}

type PlanKey = "core" | "daily" | "max"

const plans: {
  id: PlanKey
  name: string
  tagline: string
  price: number
  categories: number
  badge?: string
}[] = [
  {
    id: "core",
    name: "Core",
    tagline: "Essential health analytics for individuals",
    price: 19,
    categories: 3
  },
  {
    id: "daily",
    name: "Daily",
    tagline: "Daily insights and comprehensive tracking",
    price: 39,
    categories: 10,
    badge: "Most Popular"
  },
  {
    id: "max",
    name: "Max",
    tagline: "Complete health intelligence platform",
    price: 79,
    categories: 20
  }
]

const planColors: Record<PlanKey, string> = {
  core: "from-sky-500 via-blue-500 to-indigo-500",
  daily: "from-orange-500 via-rose-500 to-violet-500",
  max: "from-emerald-500 via-teal-500 to-blue-500"
}

export default function Pricing({ onNavigate }: PricingProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto max-w-5xl px-4 pt-20 pb-16">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 mb-3">
            Pricing
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-50 mb-3">
            Choose how deep you want to go
          </h1>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-400">
            All plans unlock the same BioMath Core engine. The difference is how
            many health categories and daily tools you connect.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map(plan => {
            const color = planColors[plan.id]
            return (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.65)] ${
                  plan.id === "daily"
                    ? "ring-2 ring-blue-500/80 ring-offset-2 ring-offset-slate-950"
                    : ""
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1 text-xs font-semibold text-slate-900 shadow-lg">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-6 flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr ${color} shadow-lg`}
                  >
                    <span className="text-base font-semibold text-white">
                      {plan.name[0]}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-slate-50">
                      {plan.name}
                    </h2>
                    <p className="text-xs text-slate-400">{plan.tagline}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-semibold tracking-tight text-slate-50">
                      ${plan.price}
                    </span>
                    <span className="text-sm text-slate-400">/month</span>
                  </div>
                </div>

                <div className="mb-6 rounded-3xl bg-gradient-to-br from-blue-600/15 via-blue-500/10 to-sky-500/15 p-4">
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-sky-500 text-2xl font-semibold text-white shadow-xl">
                    {plan.categories}
                  </div>
                  <div className="text-center text-sm font-medium text-slate-50">
                    {plan.categories} Categories
                  </div>
                </div>

                <ul className="mb-6 space-y-2 text-xs text-slate-300">
                  <li>Access to BioMath Core dashboard</li>
                  <li>AI insights across connected health data</li>
                  <li>Secure storage and encrypted synchronization</li>
                  {plan.id !== "core" && (
                    <li>Extended daily guidance and check-ins</li>
                  )}
                  {plan.id === "max" && (
                    <li>Full set of 20 health categories and advanced tools</li>
                  )}
                </ul>

                <button
                  onClick={() => onNavigate("member-zone")}
                  className="mt-auto w-full rounded-2xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/40 transition hover:bg-blue-500"
                >
                  Start with {plan.name}
                </button>
              </div>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-xs text-slate-400 sm:flex-row sm:justify-between">
          <p>
            Need a different setup for a clinic or employer program?{" "}
            <button
              onClick={() => onNavigate("contact")}
              className="text-blue-400 underline-offset-2 hover:underline"
            >
              Talk to us
            </button>
          </p>
          <p>Cancel anytime. No long-term contracts.</p>
        </div>
      </section>
    </div>
  )
}
