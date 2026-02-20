import { useRevealOnScroll } from '@/shared/hooks'

const CHART_BARS = [
  { label: 'Mon', height: 'h-20', tone: 'bg-slate-300' },
  { label: 'Tue', height: 'h-24', tone: 'bg-slate-300' },
  { label: 'Wed', height: 'h-16', tone: 'bg-slate-300' },
  { label: 'Thu', height: 'h-28', tone: 'bg-slate-300' },
  { label: 'Fri', height: 'h-32', tone: 'bg-slate-900' },
  { label: 'Sat', height: 'h-36', tone: 'bg-slate-300' },
  { label: 'Sun', height: 'h-24', tone: 'bg-slate-300' },
]

const BAR_DELAYS = [
  'delay-0',
  'delay-[50ms]',
  'delay-[100ms]',
  'delay-[150ms]',
  'delay-[200ms]',
  'delay-[250ms]',
  'delay-[300ms]',
] as const

export function DataDrivenSection() {
  const { ref: dataSectionRef, isVisible: dataSectionVisible, prefersReducedMotion } =
    useRevealOnScroll<HTMLDivElement>()

  const dataSectionRevealClass =
    prefersReducedMotion || dataSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'

  const barsVisible = prefersReducedMotion || dataSectionVisible

  return (
    <section aria-labelledby="data-driven-heading" className="border-b border-slate-200 bg-slate-50">
      <div
        ref={dataSectionRef}
        className={`mx-auto grid max-w-7xl gap-10 px-6 py-20 transition-opacity transition-transform duration-500 ease-out lg:grid-cols-2 lg:items-center lg:py-28 ${dataSectionRevealClass}`}
      >
        <div className="max-w-2xl space-y-5">
          <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
            Data Driven Operations
          </p>
          <h2
            id="data-driven-heading"
            className="text-3xl font-semibold tracking-tight text-slate-900 lg:text-4xl"
          >
            Your daily transactions become structured financial intelligence.
          </h2>
          <p className="text-base leading-relaxed text-slate-600 lg:text-lg">
            Every bill, return, and collection maps into a clean ledger model so your team can act
            on factual trends instead of fragmented reports.
          </p>
        </div>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <header className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-900">Weekly Collections</h3>
            <span className="text-xs text-slate-500">Store Cluster A</span>
          </header>

          <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
            <div className="border-t border-slate-200" />
            <div className="border-t border-slate-200" />
            <div className="border-t border-slate-200" />
            <div className="grid h-44 grid-cols-7 items-end gap-2">
              {CHART_BARS.map((bar, index) => (
                <div key={bar.label} className="flex flex-col items-center gap-2">
                  <div
                    className={`w-full rounded ${bar.height} ${bar.tone} ${barsVisible ? 'opacity-100 translate-y-0 transition-opacity transition-transform duration-400 ease-out' : 'opacity-70 translate-y-2'} ${barsVisible && !prefersReducedMotion ? BAR_DELAYS[index] ?? 'delay-0' : ''}`}
                  />
                  <span className="text-xs font-medium text-slate-500">{bar.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
            <div>
              <p className="text-xs text-slate-500">Peak Day</p>
              <p className="text-sm font-semibold text-slate-900">Saturday</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-500">Average Ticket</p>
              <p className="text-sm font-semibold text-slate-900">INR 1,384</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
