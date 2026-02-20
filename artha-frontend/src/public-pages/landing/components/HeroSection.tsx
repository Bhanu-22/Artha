import { useRevealOnScroll } from '@/shared/hooks'

export function HeroSection() {
  const { ref: heroTextRef, isVisible: heroTextVisible, prefersReducedMotion } =
    useRevealOnScroll<HTMLDivElement>()

  const heroRevealClass =
    prefersReducedMotion || heroTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'

  return (
    <section aria-labelledby="hero-heading" className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div
            ref={heroTextRef}
            className={`max-w-2xl space-y-6 transition-opacity transition-transform duration-400 ease-out ${heroRevealClass}`}
          >
            <div className="space-y-6">
              <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
                Financial Infrastructure For Indian SMBs
              </p>
              <h1
                id="hero-heading"
                className="text-5xl font-semibold leading-tight tracking-tight text-slate-900 lg:text-7xl"
              >
                India&apos;s Financial Operating System for Growing Businesses.
              </h1>
              <p className="text-base leading-relaxed text-slate-500 lg:text-lg">
                Unify your POS, Inventory, Khata, and AI Insights in one connected system built
                for daily merchant operations and long-term financial control.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md"
              >
                Start Free
              </button>
              <button
                type="button"
                className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 shadow-sm transition-colors duration-200 hover:bg-slate-100"
              >
                Book a Demo
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
            <div className="space-y-5">
              <div className="grid grid-cols-3 gap-3 border-b border-slate-200 pb-4">
                <article className="rounded-xl border border-slate-200 bg-slate-50 p-3 shadow-sm">
                  <p className="text-xs text-slate-500">Today&apos;s Sales</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">INR 1.42L</p>
                </article>
                <article className="rounded-xl border border-slate-200 bg-slate-50 p-3 shadow-sm">
                  <p className="text-xs text-slate-500">Inventory</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">2,438 SKUs</p>
                </article>
                <article className="rounded-xl border border-slate-200 bg-slate-50 p-3 shadow-sm">
                  <p className="text-xs text-slate-500">Pending Khata</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">INR 47K</p>
                </article>
              </div>

              <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <header className="mb-3 flex items-center justify-between">
                  <h2 className="text-sm font-semibold text-slate-900">Daily Collections</h2>
                  <span className="text-xs font-medium text-slate-500">Last 7 days</span>
                </header>
                <div className="space-y-2">
                  <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                    <span className="text-xs text-slate-500">UPI</span>
                    <span className="text-xs font-semibold text-slate-800">INR 58,320</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                    <span className="text-xs text-slate-500">Card</span>
                    <span className="text-xs font-semibold text-slate-800">INR 41,080</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                    <span className="text-xs text-slate-500">Cash</span>
                    <span className="text-xs font-semibold text-slate-800">INR 23,940</span>
                  </div>
                </div>
              </article>

              <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <h2 className="text-sm font-semibold text-slate-900">Revenue Pattern</h2>
                <div className="mt-3 space-y-2">
                  <div className="grid grid-cols-5 gap-2 border-t border-slate-200 pt-2">
                    <span className="h-12 rounded bg-slate-200" />
                    <span className="h-16 rounded bg-slate-300" />
                    <span className="h-10 rounded bg-slate-200" />
                    <span className="h-14 rounded bg-slate-300" />
                    <span className="h-20 rounded bg-slate-900" />
                  </div>
                  <p className="text-xs text-slate-500">
                    Peak throughput this week was driven by repeat customers and strong UPI
                    conversion.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
