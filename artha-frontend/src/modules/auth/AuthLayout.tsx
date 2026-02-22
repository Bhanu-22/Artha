import type { ReactNode } from 'react'

export type AuthVariant = 'login' | 'signup'

type AuthLayoutProps = {
  children: ReactNode
  variant: AuthVariant
}

const LOGIN_KPI_SNAPSHOT = [
  { label: 'Revenue Today', value: 'INR 3.24L' },
  { label: 'Outstanding Khata', value: 'INR 82K' },
  { label: 'Inventory Health', value: '94%' },
] as const

const LOGIN_TABLE_ROWS = [
  { metric: 'UPI Reconciliation', status: 'Synced', activity: '2m ago' },
  { metric: 'Card Settlements', status: 'Review', activity: '10m ago' },
  { metric: 'Branch Ledger Sync', status: 'Stable', activity: 'Live' },
] as const

const SIGNUP_WORKFLOW_STACK = [
  { title: 'POS Engine', description: 'Run daily billing and settlement controls.' },
  { title: 'Inventory Intelligence', description: 'Track stock velocity and reorder timing.' },
  { title: 'Digital Khata', description: 'Control credit exposure and collections.' },
  { title: 'AI Insights', description: 'Turn transaction data into weekly guidance.' },
] as const

export function AuthLayout({ children, variant }: AuthLayoutProps) {
  const isLogin = variant === 'login'

  const eyebrowText = isLogin ? 'Financial Control Center' : 'Start Structured Growth'
  const headlineText = isLogin
    ? 'Welcome back to your operations command layer.'
    : 'Build your financial operating foundation.'
  const subtext = isLogin
    ? 'Monitor transactions, reconcile accounts, and drive disciplined growth - all from one structured system.'
    : 'From billing and inventory to AI-driven decisions - Artha unifies every workflow into one disciplined system.'
  const bottomNote = isLogin
    ? '10,000+ merchants operate daily on Artha'
    : 'Deploy in days. Scale without replatforming.'

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <aside className="relative hidden overflow-hidden border-r border-white/10 bg-slate-950 before:absolute before:inset-0 before:bg-white/5 before:opacity-5 before:content-[''] lg:flex">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_60%)]" />
          <div className="relative z-10 flex h-full flex-col justify-between p-16">
            <div className="space-y-6">
              <p className="text-2xl font-semibold tracking-tight text-white">Artha</p>
              <p className="text-sm font-medium uppercase tracking-wide text-slate-400">
                {eyebrowText}
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-white">{headlineText}</h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-slate-400">{subtext}</p>
            </div>

            {isLogin ? (
              <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="grid grid-cols-3 gap-3">
                  {LOGIN_KPI_SNAPSHOT.map((kpi) => (
                    <div
                      key={kpi.label}
                      className="rounded-xl border border-white/10 bg-slate-950/50 px-3 py-3"
                    >
                      <p className="text-xs text-slate-400">{kpi.label}</p>
                      <p className="mt-2 text-xl font-semibold text-white">{kpi.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 space-y-2">
                  {LOGIN_TABLE_ROWS.map((row) => (
                    <div
                      key={row.metric}
                      className="grid grid-cols-[1.4fr_auto_auto] items-center gap-2 rounded-xl border border-white/10 bg-slate-950/40 px-3 py-2 text-xs text-slate-400"
                    >
                      <span>{row.metric}</span>
                      <span>{row.status}</span>
                      <span>{row.activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mt-12 space-y-4">
                {SIGNUP_WORKFLOW_STACK.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-xs text-slate-400">{item.description}</p>
                  </article>
                ))}
              </div>
            )}

            <p className="text-sm text-slate-400">{bottomNote}</p>
          </div>
        </aside>

        <section className="flex items-center justify-center bg-white px-6 py-12 lg:items-start lg:pt-16">
          <div className="w-full max-w-md">{children}</div>
        </section>
      </div>
    </main>
  )
}
