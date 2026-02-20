const LOGO_PLACEHOLDERS = ['NEXA MART', 'RIVET FOODS', 'UNITY STORES', 'METRO TRADE', 'SOUTH POINT']

export function TrustStrip() {
  return (
    <section aria-label="Trust indicators" className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
            Trusted by 10,000+ merchants
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:flex">
            {LOGO_PLACEHOLDERS.map((brand) => (
              <span
                key={brand}
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-center text-sm font-semibold uppercase tracking-wide text-slate-400"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
