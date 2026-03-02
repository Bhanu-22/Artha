export function FinalCTASection() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white lg:text-4xl">
          Ready to institutionalize your financial operations?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          Join forward-thinking Indian enterprises using Artha to unify their 
          POS, inventory, and treasury workflows.
        </p>
        
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your work email"
            className="w-full max-w-sm rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <button
            type="button"
            className="w-full rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-light sm:w-auto"
          >
            Get Started
          </button>
        </div>
        
        <p className="mt-4 text-xs text-slate-500">
          No credit card required. Setup takes less than 10 minutes.
        </p>
      </div>
    </section>
  )
}
