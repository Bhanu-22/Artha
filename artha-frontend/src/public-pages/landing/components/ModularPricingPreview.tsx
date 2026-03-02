const PLANS = [
  {
    name: 'Starter',
    price: '₹0',
    description: 'Essential financial tools for emerging businesses and single-store operations.',
    features: ['Single-outlet POS', 'Basic Inventory', 'Digital Khata (50 entries)'],
    cta: 'Get Started',
    pro: false,
  },
  {
    name: 'Professional',
    price: '₹2,499',
    description: 'Advanced capabilities for growing enterprises managing multiple branches.',
    features: ['Multi-branch Sync', 'AI Inventory Forecasts', 'Unlimited Digital Khata', 'Priority Reconciliation'],
    cta: 'Start Free Trial',
    pro: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored infrastructure for high-volume retailers and distribution networks.',
    features: ['Custom API access', 'Dedicated Account Manager', 'On-premise deployment', 'SLA Guarantees'],
    cta: 'Contact Sales',
    pro: false,
  },
]

export function ModularPricingPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 lg:text-4xl">
            Transparent, scalable pricing.
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the plan that fits your operational scale. No hidden fees, 
            cancel or upgrade at any time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANS.map((plan) => (
            <div 
              key={plan.name}
              className={`relative rounded-2xl border p-8 shadow-sm bg-white flex flex-col ${
                plan.pro ? 'border-primary' : 'border-slate-200'
              }`}
            >
              {plan.pro && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Best Value
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-slate-900">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-sm text-slate-500">/month</span>}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {plan.description}
                </p>
              </div>

              <ul className="mb-8 space-y-4 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-600">
                    <svg className="h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`w-full rounded-lg px-6 py-3 text-sm font-semibold transition-colors ${
                  plan.pro 
                    ? 'bg-primary text-white hover:bg-primary-light shadow-md' 
                    : 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
