import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';

const SIGNUP_WORKFLOW_STACK = [
  { title: 'POS Engine', description: 'Run daily billing and settlement controls.' },
  { title: 'Inventory Intelligence', description: 'Track stock velocity and reorder timing.' },
  { title: 'Digital Khata', description: 'Control credit exposure and collections.' },
  { title: 'AI Insights', description: 'Turn transaction data into weekly guidance.' },
] as const;

const inputClassName =
  'mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10';

export function SignupPage() {
  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle signup logic here
  };

  return (
    /* Edge-to-edge grid container guaranteeing no blank spaces */
    <main className="grid min-h-screen w-full grid-cols-1 overflow-hidden lg:grid-cols-2">
      
      {/* Left Section: Branding & Features */}
      <section className="hidden flex-col justify-between bg-slate-950 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-16 py-14 lg:flex">
        <div className="max-w-xl space-y-8">
          <p className="text-xl font-bold tracking-tight text-white">Artha</p>
          
          <div className="pt-8">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-400">Start Structured Growth</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-white">
              Build your financial <br />
              operating foundation.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              From billing and inventory to AI-driven decisions — Artha unifies every workflow into one disciplined system.
            </p>
          </div>
        </div>

        <div className="mt-12 w-full max-w-md space-y-4">
          {SIGNUP_WORKFLOW_STACK.map((item) => (
            <article 
              key={item.title} 
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="pt-12">
          <p className="text-sm font-medium text-slate-400">Deploy in days. Scale without replatforming.</p>
        </div>
      </section>

      {/* Right Section: Form */}
      {/* Added py-12 and flex to handle scrolling smoothly on smaller/shorter screens */}
      <section className="flex items-center justify-center bg-slate-50 px-6 py-12 md:px-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <p className="mb-8 text-center text-2xl font-bold lg:hidden">Artha</p>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200/50 md:p-12">
            <header>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Create Account</p>
              <h1 className="mt-2 text-3xl font-bold text-slate-900">
                Control center.
              </h1>
              <p id="signup-subtext" className="mt-2 text-sm text-slate-600">
                Start with core workflows. Scale with intelligence.
              </p>
            </header>

            <form
              className="mt-8 space-y-5"
              noValidate
              aria-describedby="signup-subtext"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="signup-name" className="block text-sm font-semibold text-slate-700">
                  Full Name
                </label>
                <input
                  id="signup-name"
                  type="text"
                  autoComplete="name"
                  required
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  placeholder="Jane Doe"
                  className={inputClassName}
                />
              </div>

              <div>
                <label htmlFor="signup-business" className="block text-sm font-semibold text-slate-700">
                  Business Name
                </label>
                <input
                  id="signup-business"
                  type="text"
                  autoComplete="organization"
                  required
                  value={businessName}
                  onChange={(event) => setBusinessName(event.target.value)}
                  placeholder="Acme Corp"
                  className={inputClassName}
                />
              </div>

              <div>
                <label htmlFor="signup-email" className="block text-sm font-semibold text-slate-700">
                  Email Address
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
                <label htmlFor="signup-password" className="block text-sm font-semibold text-slate-700">
                  Password
                </label>
                <input
                  id="signup-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="••••••••"
                  className={inputClassName}
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-slate-900 py-4 text-sm font-bold text-white transition-all hover:bg-slate-800 hover:shadow-lg active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
              >
                Create Account
              </button>

              <p className="pt-2 text-center text-xs font-medium text-slate-500">
                No credit card required to get started.
              </p>
            </form>

            {/* Custom Divider */}
            <div className="relative my-8" aria-hidden="true">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">
                  Or
                </span>
              </div>
            </div>

            <p className="text-center text-sm text-slate-600">
              Already have an account?{' '}
              <Link to="/login" className="font-bold text-slate-900 hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}