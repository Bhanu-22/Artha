export function HeroSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        {/* Eyebrow Badge */}
        <div className="mb-8 flex justify-center">
          <span className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
            AI-Powered Financial OS
          </span>
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 lg:text-6xl">
          India&apos;s <span className="text-primary">Financial Operating System</span>
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          Streamline your enterprise operations with a unified platform for real-time treasury management, 
          automated compliance, and deep financial insights. Built for the scale and complexity of 
          the modern Indian economy.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            type="button"
            className="rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-light"
          >
            Get Started
          </button>
          <button
            type="button"
            className="rounded-lg border border-slate-200 bg-white px-8 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            Book a Demo
          </button>
        </div>

        {/* Dashboard Mock Container */}
        <div className="mt-20">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 text-left">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Financial Control Center
                </p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">
                  Live Operations Overview
                </h3>
              </div>

              <span className="rounded-md bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                All systems operational
              </span>
            </div>

            {/* KPI Grid */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-xs text-slate-500">Revenue Today</p>
                <p className="mt-1 text-2xl font-semibold text-slate-900">
                  ₹3.24L
                </p>
                <p className="mt-1 text-xs text-emerald-600">
                  +8.2% vs yesterday
                </p>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-xs text-slate-500">Outstanding Khata</p>
                <p className="mt-1 text-2xl font-semibold text-slate-900">
                  ₹82K
                </p>
                <p className="mt-1 text-xs text-amber-600">
                  2 collections pending
                </p>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-xs text-slate-500">Inventory Health</p>
                <p className="mt-1 text-2xl font-semibold text-slate-900">
                  94%
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Stable across outlets
                </p>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="mt-8">
              <p className="text-sm font-medium text-slate-700">
                Recent Operational Events
              </p>

              <div className="mt-3 space-y-3">
                <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-white px-4 py-3">
                  <p className="text-sm text-slate-800">
                    UPI reconciliation completed
                  </p>
                  <span className="text-xs text-slate-500">2m ago</span>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-white px-4 py-3">
                  <p className="text-sm text-slate-800">
                    Khata reminder sent to 3 customers
                  </p>
                  <span className="text-xs text-slate-500">10m ago</span>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-white px-4 py-3">
                  <p className="text-sm text-slate-800">
                    Inventory alert: SKU 147 low stock
                  </p>
                  <span className="text-xs text-slate-500">Live</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
