type FooterLinkGroup = {
  title: string
  headingId: string
  links: string[]
}

const footerLinks: Record<'product' | 'company' | 'legal', FooterLinkGroup> = {
  product: {
    title: 'Product',
    headingId: 'footer-product-heading',
    links: ['POS Engine', 'Inventory Intelligence', 'Digital Khata', 'AI Copilot', 'Pricing'],
  },
  company: {
    title: 'Company',
    headingId: 'footer-company-heading',
    links: ['About', 'Security', 'Careers', 'Contact'],
  },
  legal: {
    title: 'Legal',
    headingId: 'footer-legal-heading',
    links: ['Privacy Policy', 'Terms of Service', 'Compliance'],
  },
}

const FOOTER_COLUMNS: Array<keyof typeof footerLinks> = ['product', 'company', 'legal']

export function FooterSection() {
  return (
    <footer aria-label="Artha site footer" className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-medium text-white">Artha</h3>
            <p className="mt-4 text-sm text-slate-400">
              India&apos;s financial operating system for growing businesses.
            </p>
          </div>

          {FOOTER_COLUMNS.map((columnKey) => {
            const column = footerLinks[columnKey]

            return (
              <div key={columnKey}>
                <h3 id={column.headingId} className="text-base font-medium text-white">
                  {column.title}
                </h3>
                <nav aria-labelledby={column.headingId}>
                  <ul role="list" className="mt-4 space-y-3">
                    {column.links.map((link) => (
                      <li key={link}>
                        <a
                          href="/"
                          onClick={(event) => event.preventDefault()}
                          className="text-slate-400 transition-colors hover:text-white"
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

        <div className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-500">
          <p>&copy; 2026 Artha Technologies Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
