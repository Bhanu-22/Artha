import type { ReactNode } from 'react'

export type AuthVariant = 'login' | 'signup'

type AuthLayoutProps = {
  children: ReactNode
  variant?: AuthVariant
  leftPanel?: ReactNode
}

export function AuthLayout({ children, variant = 'login', leftPanel }: AuthLayoutProps) {
  if (variant === 'login') {
    return <main className="grid min-h-screen grid-cols-1 lg:grid-cols-2">{children}</main>
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white" data-auth-variant={variant}>
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] xl:grid-cols-[1.2fr_0.8fr]">
        <aside className="hidden flex-col justify-start border-r border-white/[0.08] bg-gradient-to-br from-slate-900 to-slate-950 p-8 lg:flex lg:p-10 xl:p-12">
          {leftPanel}
        </aside>

        <section className="flex items-center justify-center bg-white px-6 py-12 lg:items-start lg:pt-20">
          <div className="w-full max-w-md">{children}</div>
        </section>
      </div>
    </main>
  )
}
