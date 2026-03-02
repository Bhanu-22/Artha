type SecurityBlock = {
  title: string
  points: string[]
}

const SECURITY_BLOCKS: SecurityBlock[] = [
  {
    title: 'Data Security',
    points: [
      'End-to-end encrypted API communication',
      'Role-based access control',
      'Tamper-proof audit trails',
    ],
  },
  {
    title: 'Regulatory Readiness',
    points: [
      'GST-compliant invoice architecture',
      'Structured ledger framework',
      'Export-ready financial reports',
    ],
  },
  {
    title: 'Infrastructure Reliability',
    points: [
      'Secure cloud-hosted infrastructure',
      'Automated daily backups',
      'High-availability architecture',
    ],
  },
  {
    title: 'Operational Governance',
    points: [
      'Multi-level permission system',
      'Activity logs across outlets',
      'Collection performance tracking',
    ],
  },
]

export function SecurityComplianceSection() {
  return (
    <section aria-labelledby="security-heading" className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center md:text-left">
          <h2
            id="security-heading"
            className="text-3xl font-medium tracking-tight text-slate-900 lg:text-4xl"
          >
            Enterprise-grade security and compliance
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 lg:text-lg">
            Artha is designed for structured financial operations with auditability, compliance
            readiness, and operational governance built into every workflow.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {SECURITY_BLOCKS.map((block) => (
            <article key={block.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-medium text-slate-900">{block.title}</h3>
              <ul role="list" className="mt-4 space-y-2 text-sm text-slate-600">
                {block.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-300" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
