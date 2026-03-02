type FooterLinkGroup = {
  title: string
  headingId: string
  links: string[]
}

const FOOTER_DATA: Record<'product' | 'company' | 'legal', FooterLinkGroup> = {
  product: {
    title: 'Product',
    headingId: 'footer-product-heading',
    links: ['POS Engine', 'Inventory Intelligence', 'Digital Khata', 'AI Insights', 'Pricing'],
  },
  company: {
    title: 'Company',
    headingId: 'footer-company-heading',
    links: ['About Artha', 'Security & Trust', 'Implementation', 'Contact'],
  },
  legal: {
    title: 'Legal',
    headingId: 'footer-legal-heading',
    links: ['Privacy Policy', 'Terms of Service', 'Compliance'],
  },
}

export function FooterSection() {
  return (
    <footer className="border-t border-slate-200 bg-background-light">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-xl font-bold tracking-tight text-slate-900">Artha</span>
            <p className="mt-4 text-sm leading-relaxed text-slate-500 max-w-xs">
              The unified financial operating system for the modern Indian enterprise. 
              Built for scale, security, and operational excellence.
            </p>
          </div>

          {/* Link Columns */}
          {(Object.keys(FOOTER_DATA) as Array<keyof typeof FOOTER_DATA>).map((key) => {
            const group = FOOTER_DATA[key]
            return (
              <div key={key}>
                <h3 id={group.headingId} className="text-sm font-semibold uppercase tracking-wider text-slate-900">
                  {group.title}
                </h3>
                <nav aria-labelledby={group.headingId} className="mt-6">
                  <ul className="space-y-4">
                    {group.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm text-slate-600 transition-colors hover:text-primary"
                          onClick={(e) => e.preventDefault()}
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )
          })}
        </div>

        {/* Bottom Strip */}
        <div className="mt-20 border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; 2026 Artha Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-slate-400">ISO 27001 Certified</span>
            <span className="text-xs text-slate-400">GST-Ready</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
