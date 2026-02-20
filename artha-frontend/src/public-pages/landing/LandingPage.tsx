import {
  CorePillarsSection,
  DataDrivenSection,
  FinalCTASection,
  FooterSection,
  HeroSection,
  ImplementationSection,
  ModularPricingPreview,
  SecurityComplianceSection,
  TrustStrip,
} from '@/public-pages/landing/components'

export function LandingPage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <CorePillarsSection />
      <DataDrivenSection />
      <ModularPricingPreview />
      <FinalCTASection />
      <SecurityComplianceSection />
      <ImplementationSection />
      <FooterSection />
    </>
  )
}
