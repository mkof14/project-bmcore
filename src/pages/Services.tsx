import ServicesCatalog from "./ServicesCatalog"

type ServicesProps = {
  onNavigate: (page: string, data?: string) => void
}

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-6xl px-4 pt-20 pb-16">
        <div className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-300 md:text-base">
            Full catalog of BioMath Core service categories and modules.
          </p>
        </div>

        <ServicesCatalog onNavigate={onNavigate} initialCategory="" />
      </div>
    </div>
  )
}
