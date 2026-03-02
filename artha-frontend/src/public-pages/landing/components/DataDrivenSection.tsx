export function DataDrivenSection() {
  return (
    <section className="bg-background-light py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column: Chat-style AI explanation */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 lg:text-4xl">
                Advanced AI Analysis
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Move beyond static reporting. Our AI engine continuously monitors your financial data to identify 
                anomalies, predict cash flow trends, and provide actionable operational insights.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="space-y-4">
                {/* User Question */}
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 shrink-0 rounded-full bg-slate-100" />
                  <div className="rounded-2xl bg-slate-50 px-4 py-2 text-sm text-slate-700">
                    "Why did my operational costs increase in Bangalore last week?"
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                    A
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-2xl border border-slate-100 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
                      <p className="font-semibold text-primary mb-1">Analysis Complete</p>
                      <p>The 12% increase was driven by a surge in logistics surcharges and a 4-day delay 
                      in vendor reconciliation for your Whitefield warehouse.</p>
                    </div>
                    <p className="text-[10px] text-slate-400 px-2">Powered by Artha Intelligence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Chart mockup container */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-900">Regional Performance Trend</h3>
              <div className="flex gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <div className="h-2 w-2 rounded-full bg-slate-200" />
              </div>
            </div>

            <div className="relative flex h-64 items-end justify-between gap-2 border-b border-slate-100 pb-2">
              {/* Fake Bars */}
              <div className="w-full rounded-t bg-slate-100 h-[60%]" />
              <div className="w-full rounded-t bg-slate-100 h-[75%]" />
              <div className="w-full rounded-t bg-slate-100 h-[90%]" />
              
              {/* The Red Dip Bar */}
              <div className="relative w-full rounded-t bg-red-400 h-[35%]">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[10px] font-medium text-white">
                  Logistics Delay
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
                </div>
              </div>

              <div className="w-full rounded-t bg-slate-100 h-[80%]" />
              <div className="w-full rounded-t bg-primary h-[95%]" />
              <div className="w-full rounded-t bg-slate-100 h-[70%]" />
            </div>

            <div className="mt-4 flex justify-between text-[10px] font-medium text-slate-400 uppercase tracking-wider">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
