import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'

import { AuthLayout } from './AuthLayout'

const inputClassName =
  'mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 transition-colors focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900'

export function SignupPage() {
  const [fullName, setFullName] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <AuthLayout variant="signup">
      <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-md">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">Create Account</p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-900">
          Build your financial control center.
        </h1>

        <p id="signup-subtext" className="mt-2 text-sm text-slate-600">
          Start with core workflows. Scale with intelligence.
        </p>

        <form
          className="mt-8 space-y-6"
          noValidate
          aria-describedby="signup-subtext"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="signup-name" className="block text-sm font-medium text-slate-700">
              Full Name
            </label>
            <input
              id="signup-name"
              type="text"
              autoComplete="name"
              required
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              placeholder="Your full name"
              className={inputClassName}
            />
          </div>

          <div>
            <label htmlFor="signup-business" className="block text-sm font-medium text-slate-700">
              Business Name
            </label>
            <input
              id="signup-business"
              type="text"
              autoComplete="organization"
              required
              value={businessName}
              onChange={(event) => setBusinessName(event.target.value)}
              placeholder="Your business name"
              className={inputClassName}
            />
          </div>

          <div>
            <label htmlFor="signup-email" className="block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              id="signup-email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@company.com"
              className={inputClassName}
            />
          </div>

          <div>
            <label htmlFor="signup-password" className="block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              id="signup-password"
              type="password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Create a strong password"
              className={inputClassName}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-slate-900 px-4 py-3 font-medium text-white transition-colors transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 focus:ring-offset-white"
          >
            Create Account
          </button>

          <p className="mt-4 text-center text-xs text-slate-500">
            No credit card required to get started.
          </p>

          <div aria-live="polite" className="sr-only" />
        </form>

        <div className="relative my-8 h-px" aria-hidden="true">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>
        </div>

        <p className="text-center text-sm text-slate-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-slate-900">
            Sign in
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}
