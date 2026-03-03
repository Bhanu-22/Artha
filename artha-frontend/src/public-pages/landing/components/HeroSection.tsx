export function HeroSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        {/* Eyebrow Badge */}
        <div className="mb-8 flex justify-center">
          <span className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
            AI-Powered Financial OS
          </span>
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 lg:text-6xl">
          India&apos;s <span className="text-primary">Financial Operating System</span>
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          Streamline your enterprise operations with a unified platform for real-time treasury management, 
          automated compliance, and deep financial insights. Built for the scale and complexity of 
          the modern Indian economy.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            type="button"
            className="rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-light"
          >
            Get Started
          </button>
          <button
            type="button"
            className="rounded-lg border border-slate-200 bg-white px-8 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            Book a Demo
          </button>
        </div>

        {/* Dashboard Mock Container */}
        <div className="mt-20 sm:mt-24 relative mx-auto max-w-5xl group">
          {/* Decorative background glow */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-2xl transition-all duration-1000 group-hover:opacity-40"></div>
          
          <div className="relative flex flex-col sm:flex-row rounded-2xl border border-slate-200/50 bg-white shadow-2xl overflow-hidden text-left ring-1 ring-black/5">
            
            {/* Sidebar Mock (Desktop only) */}
            <div className="hidden sm:flex w-64 flex-col gap-6 border-r border-slate-100 bg-slate-50 p-6 shrink-0 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-indigo-500/10 blur-2xl"></div>
              
              <div className="flex items-center gap-3">                
                <div className="font-bold text-slate-800 tracking-tight text-lg">Artha</div>
              </div>
              
              <div className="space-y-4 mt-6">
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Main Navigation</p>
                  <div className="flex items-center gap-3 rounded-lg bg-white p-2.5 shadow-sm border border-slate-200 text-indigo-600 transition-colors">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                    <span className="text-sm font-semibold">Dashboard</span>
                  </div>
                  
                  <div className="flex items-center gap-3 rounded-lg hover:bg-slate-100 p-2.5 text-slate-500 transition-colors cursor-pointer">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="text-sm font-medium">Transactions</span>
                  </div>

                  <div className="flex items-center gap-3 rounded-lg hover:bg-slate-100 p-2.5 text-slate-500 transition-colors cursor-pointer">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    <span className="text-sm font-medium">Khata / Ledger</span>
                  </div>
                  
                  <div className="flex items-center gap-3 rounded-lg hover:bg-slate-100 p-2.5 text-slate-500 transition-colors cursor-pointer">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                    <span className="text-sm font-medium">Inventory</span>
                  </div>
                </div>
              </div>

              {/* Sidebar bottom card */}
              <div className="mt-auto rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-4 text-white shadow-lg overflow-hidden relative">
                <div className="absolute top-0 right-0 -mr-4 -mt-4 w-20 h-20 rounded-full bg-indigo-500/30 blur-xl"></div>
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mb-3">
                  <svg className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <p className="text-sm font-semibold">Pro Plan Active</p>
                <p className="text-xs text-slate-400 mt-1">All features unlocked</p>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 sm:p-8 bg-white relative">
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                      Live Environment
                    </p>
                  </div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 tracking-tight">
                    Operations Overview
                  </h3>
                </div>
                <div className="hidden sm:flex items-center gap-3">
                   <div className="h-9 w-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-colors shadow-sm cursor-pointer">
                     <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                   </div>
                   <div className="h-9 w-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-colors shadow-sm cursor-pointer relative">
                     <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-rose-500 ring-2 ring-white"></span>
                     <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                   </div>
                   <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-100 to-indigo-200 text-indigo-700 flex items-center justify-center font-bold text-sm shadow-sm cursor-pointer border border-indigo-200 ring-2 ring-white ml-2">
                     BP
                   </div>
                </div>
              </div>

              {/* KPI Grid */}
              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-indigo-200 overflow-hidden">
                  <div className="absolute top-0 right-0 -mt-2 -mr-2 h-20 w-20 rounded-bl-full bg-indigo-50/80 transition-colors group-hover:bg-indigo-100"></div>
                  <div className="relative text-slate-500 mb-3">
                    <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div className="text-sm font-medium text-slate-500">Revenue Today</div>
                  <div className="mt-1 text-3xl font-extrabold text-slate-900 tracking-tight">₹3.24L</div>
                  <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md inline-flex border border-emerald-100">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    +8.2% vs yesterday
                  </div>
                </div>

                <div className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-amber-200 overflow-hidden">
                  <div className="absolute top-0 right-0 -mt-2 -mr-2 h-20 w-20 rounded-bl-full bg-amber-50/80 transition-colors group-hover:bg-amber-100"></div>
                  <div className="relative text-slate-500 mb-3">
                    <svg className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  </div>
                  <div className="text-sm font-medium text-slate-500">Outstanding Khata</div>
                  <div className="mt-1 text-3xl font-extrabold text-slate-900 tracking-tight">₹82K</div>
                  <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md inline-flex border border-amber-100">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    2 collections pending
                  </div>
                </div>

                <div className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-200 overflow-hidden sm:col-span-1 col-span-1">
                  <div className="absolute top-0 right-0 -mt-2 -mr-2 h-20 w-20 rounded-bl-full bg-blue-50/80 transition-colors group-hover:bg-blue-100"></div>
                  <div className="relative text-slate-500 mb-3">
                    <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                  </div>
                  <div className="text-sm font-medium text-slate-500">Inventory Health</div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <div className="text-3xl font-extrabold text-slate-900 tracking-tight">94%</div>
                    <div className="text-sm font-medium text-slate-500">Optimum</div>
                  </div>
                  <div className="mt-4 w-full bg-slate-100 rounded-full h-2 mb-1 overflow-hidden">
                     <div className="bg-gradient-to-r from-blue-400 via-indigo-400 to-indigo-500 h-2 rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]" style={{width: '94%'}}></div>
                  </div>
                </div>
              </div>

              {/* Activity Feed & Chart Mock */}
              <div className="mt-8 flex flex-col lg:flex-row gap-6">
                
                {/* Chart Mock */}
                <div className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col shadow-inner">
                   <div className="flex items-center justify-between mb-6">
                     <h4 className="text-sm font-bold text-slate-800">Cash Flow Trend</h4>
                     <div className="text-xs font-semibold text-slate-500 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-slate-200 flex items-center gap-1 cursor-pointer">
                        Last 7 days
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                     </div>
                   </div>
                   
                   <div className="mt-auto h-40 w-full flex items-end justify-between gap-2 sm:gap-4 px-1">
                      {[40, 60, 45, 80, 50, 95, 75].map((height, i) => (
                         <div key={i} className="w-full bg-indigo-100 rounded-t-lg relative group transition-all duration-300 hover:opacity-90 cursor-pointer">
                            <div className="absolute bottom-0 w-full bg-gradient-to-t from-indigo-600 to-purple-500 rounded-t-lg shadow-sm" style={{height: `${height}%`}}></div>
                            {i === 5 && (
                              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                ₹1.24L
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-4 border-transparent border-t-slate-800"></div>
                              </div>
                            )}
                         </div>
                      ))}
                   </div>
                   <div className="flex justify-between mt-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1 border-t border-slate-200/60 pt-3">
                     <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span className="text-indigo-600">Sat</span><span>Sun</span>
                   </div>
                </div>

                {/* Activity Feed */}
                <div className="w-full lg:w-80 flex flex-col gap-3">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-bold text-slate-800">Recent Events</h4>
                    <span className="text-xs font-semibold text-indigo-600 cursor-pointer hover:text-indigo-700">View All</span>
                  </div>
                  
                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:border-emerald-100 cursor-pointer">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">UPI reconciliation</p>
                      <p className="text-xs font-medium text-slate-500 mt-0.5">₹45,000 matched successfully</p>
                    </div>
                    <span className="ml-auto text-[10px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded">2m</span>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-100 cursor-pointer">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">Khata reminders</p>
                      <p className="text-xs font-medium text-slate-500 mt-0.5">3 customers via WhatsApp</p>
                    </div>
                    <span className="ml-auto text-[10px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded">10m</span>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:border-rose-100 cursor-pointer relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-400 to-rose-500"></div>
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600 border border-rose-100">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">Low stock alert</p>
                      <p className="text-xs font-medium text-slate-500 mt-0.5">SKU 147 critically low</p>
                    </div>
                    <span className="ml-auto flex items-center gap-1 text-[10px] font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded">
                       <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-rose-500"></span>
                       </span>
                       Live
                    </span>
                  </div>

                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
