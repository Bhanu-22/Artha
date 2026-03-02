import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';

// --- Sub-components for better organization ---

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 text-slate-300">
      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-400" />
      <p className="text-sm">{text}</p>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-slate-400">{label}</p>
      <p className="text-lg font-semibold text-white">{value}</p>
    </div>
  );
}

const inputClassName =
  'mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 transition-all focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    /* The main container uses 'grid-cols-1 lg:grid-cols-2' to ensure 
       the two halves occupy exactly 100% of the viewport width. 
    */
    <main className="grid min-h-screen w-full grid-cols-1 overflow-hidden lg:grid-cols-2">
      
      {/* Left Section: Marketing & Branding */}
      <section className="hidden flex-col justify-between bg-slate-950 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-16 py-14 lg:flex">
        <div className="max-w-md">
          <p className="text-xl font-bold tracking-tight text-white">Artha</p>

          <div className="mt-20">
            <h2 className="text-4xl font-semibold leading-tight text-white">
              Build disciplined <br />
              <span className="text-emerald-400">financial growth.</span>
            </h2>
            <p className="mt-6 text-lg text-slate-400">
              A unified system for sales execution, inventory intelligence, credit discipline, and AI-driven insights.
            </p>

            <div className="mt-12 space-y-5">
              <Feature text="Real-time reconciliation across UPI, card & cash" />
              <Feature text="Inventory forecasting across outlets" />
              <Feature text="Structured Khata & automated collections" />
              <Feature text="AI-driven margin protection insights" />
            </div>
          </div>
        </div>

        {/* Floating Stats Card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <p className="text-xs font-medium uppercase tracking-widest text-slate-400">Today's Snapshot</p>
          <div className="mt-4 grid grid-cols-3 gap-8">
            <Metric label="Revenue" value="INR 3.24L" />
            <Metric label="Outstanding" value="INR 82K" />
            <Metric label="Inventory" value="94%" />
          </div>
        </div>
      </section>

      {/* Right Section: Login Form */}
      <section className="flex items-center justify-center bg-slate-50 px-6 py-12 md:px-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo (only shows on small screens) */}
          <p className="mb-8 text-center text-2xl font-bold lg:hidden">Artha</p>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200/50 md:p-12">
            <header>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Secure Access</p>
              <h1 className="mt-2 text-3xl font-bold text-slate-900">Welcome back.</h1>
              <p className="mt-2 text-slate-600">
                Continue building structured financial operations.
              </p>
            </header>

            <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className={inputClassName}
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-semibold text-slate-700">
                    Password
                  </label>
                  <Link to="/forgot" className="text-xs font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={inputClassName}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-slate-900 py-4 text-sm font-bold text-white transition-all hover:bg-slate-800 hover:shadow-lg active:scale-[0.98]"
              >
                Sign In
              </button>

              <div className="flex items-center justify-center gap-2 pt-2">
                <span className="h-px w-4 bg-slate-200" />
                <p className="text-[10px] font-medium uppercase tracking-tighter text-slate-400">
                  Encrypted & Secure
                </p>
                <span className="h-px w-4 bg-slate-200" />
              </div>
            </form>
          </div>

          <p className="mt-8 text-center text-sm text-slate-600">
            Don't have an account?{' '}
            <Link to="/signup" className="font-bold text-slate-900 hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}