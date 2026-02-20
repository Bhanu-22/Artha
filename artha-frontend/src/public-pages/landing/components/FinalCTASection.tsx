import { useRevealOnScroll } from '@/shared/hooks'

export function FinalCTASection() {
  const { ref: ctaRef, isVisible: ctaVisible, prefersReducedMotion } = useRevealOnScroll<HTMLDivElement>()

  const ctaRevealClass =
    prefersReducedMotion || ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'

  return (
    <section aria-labelledby="final-cta-heading" className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div
          ref={ctaRef}
          className={`rounded-xl border border-white/10 bg-slate-900 p-8 shadow-sm transition-opacity transition-transform duration-500 ease-out lg:p-10 ${ctaRevealClass}`}
        >
          <div className="max-w-4xl space-y-5">
            <h2
              id="final-cta-heading"
              className="text-4xl font-semibold tracking-tight text-white lg:text-5xl"
            >
              Build your financial operations on a system designed for disciplined growth.
            </h2>
            <p className="text-base leading-relaxed text-slate-300 lg:text-lg">
              Give your teams one trusted platform for billing, stock, credit, and decision
              intelligence across every merchant workflow.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-slate-900 shadow-sm transition-colors transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-md"
            >
              Start Free
            </button>
            <button
              type="button"
              className="rounded-lg border border-white/40 bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-white/10"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
