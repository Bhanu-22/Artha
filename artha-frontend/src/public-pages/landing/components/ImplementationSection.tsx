type ImplementationStep = {
  title: string
  description: string
}

const IMPLEMENTATION_STEPS: ImplementationStep[] = [
  {
    title: 'Setup Core Workflows',
    description:
      'Configure POS, inventory, and credit structure aligned to your store operations.',
  },
  {
    title: 'Train Your Teams',
    description:
      'Assign role-based permissions and align workflows across billing, stock, and collections.',
  },
  {
    title: 'Activate Growth Modules',
    description:
      'Switch on advanced modules like AI insights and multi-branch governance as operations scale.',
  },
]

export function ImplementationSection() {
  return (
    <section aria-labelledby="implementation-heading" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div>
          <h2
            id="implementation-heading"
            className="text-3xl font-medium tracking-tight text-slate-900 lg:text-4xl"
          >
            Deploy in days. Scale without replatforming.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 lg:text-lg">
            Artha integrates into your daily workflows with structured onboarding and role-aligned
            setup.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {IMPLEMENTATION_STEPS.map((step, index) => (
            <article key={step.title} className="rounded-2xl border border-slate-200 p-8 shadow-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-medium text-white">
                {index + 1}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
