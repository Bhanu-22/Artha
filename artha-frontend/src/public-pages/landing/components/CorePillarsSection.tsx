const PILLARS = [
  {
    title: 'POS Engine',
    description: 'High-throughput billing with real-time UPI and card reconciliation for modern retail counters.',
  },
  {
    title: 'Inventory Intelligence',
    description: 'Automated stock tracking with SKU-level velocity alerts and predictive purchase cycle forecasting.',
  },
  {
    title: 'Digital Khata',
    description: 'Enterprise-grade credit ledger with automated payment reminders and customer-level risk controls.',
  },
  {
    title: 'AI Financial Insights',
    description: 'Advanced data models that convert raw transactions into operational margin protection strategies.',
  },
]

export function CorePillarsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 lg:text-4xl">
            Unified financial infrastructure.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Artha consolidates fragmented operations into a single, cohesive operating system 
            designed for the scale of Indian enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar) => (
            <div 
              key={pillar.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-primary/30"
            >
              <div className="mb-4 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <div className="h-5 w-5 rounded-full border-2 border-primary/40" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
