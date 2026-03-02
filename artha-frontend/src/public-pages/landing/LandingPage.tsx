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
      <DataDrivenSection />
      <CorePillarsSection />
      <SecurityComplianceSection />
      <ImplementationSection />
      <ModularPricingPreview />
      <FinalCTASection />
      <FooterSection />
    </>
  )
}
