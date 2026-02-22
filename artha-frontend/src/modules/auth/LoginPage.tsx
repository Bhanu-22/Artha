import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'

import { AuthLayout } from './AuthLayout'

const inputClassName =
  'mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 transition-colors focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900'

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <AuthLayout variant="login">
      <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-md">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">Secure Access</p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-900">Welcome back.</h1>

        <p id="login-subtext" className="mt-2 text-sm text-slate-600">
          Continue building structured financial operations.
        </p>

        <form
          className="mt-8 space-y-6"
          noValidate
          aria-describedby="login-subtext"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="login-email" className="block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              id="login-email"
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
            <label htmlFor="login-password" className="block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              id="login-password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="********"
              className={inputClassName}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-slate-900 px-4 py-3 font-medium text-white transition-colors transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 focus:ring-offset-white"
          >
            Sign In
          </button>

          <p className="mt-4 text-center text-xs text-slate-500">
            Your data is encrypted and securely processed.
          </p>

          <div aria-live="polite" className="sr-only" />
        </form>

        <p className="mt-8 text-center text-sm text-slate-600">
          Don&apos;t have an account?{' '}
          <Link to="/signup" className="font-medium text-slate-900">
            Create one
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}
