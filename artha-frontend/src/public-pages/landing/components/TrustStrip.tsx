const INTEGRATIONS = ['Stripe', 'Plaid', 'Visa', 'QuickBooks']

export function TrustStrip() {
  return (
    <section className="border-t border-slate-200 py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-10 text-center text-sm font-medium uppercase tracking-widest text-slate-500">
          Integrated with Enterprise Standards
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-60">
          {INTEGRATIONS.map((name) => (
            <span 
              key={name} 
              className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
