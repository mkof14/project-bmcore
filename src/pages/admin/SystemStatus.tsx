import { useEffect, useState } from "react"
import { checkHealth } from "../../lib/healthCheck"

export default function SystemStatus() {
  const [deps, setDeps] = useState<any[]>([])

  useEffect(() => {
    checkHealth().then(res => setDeps(res))
  }, [])

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">System Status</h1>
      <div className="space-y-4">
        {deps.map((d, i) => (
          <div key={i} className="flex items-center justify-between border border-slate-700 p-3 rounded-lg">
            <span className="font-medium">{d.name}</span>
            <span className={d.ok ? "text-green-400" : "text-red-400"}>
              {d.ok ? "Operational" : "Down"}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
