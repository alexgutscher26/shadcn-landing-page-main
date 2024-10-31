import { GigPlatformIntegrations } from "@/components/GigPlatformIntegrations";
import { HighlightIncomeTracking } from "@/components/HighlightIncomeTracking";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { PresentExpenseTracking } from "@/components/PresentExpenseTracking";
import { ROIEstimator } from "@/components/ROIEstimator";
import { ShowcaseTaxManagement } from "@/components/ShowcaseTaxManagement";
import { TaxSavingsCalculator } from "@/components/TaxSavingsCalculator";

export const metadata = {
  title: "Shadcn - Landing template",
  description: "Free Shadcn landing page for developers",
  openGraph: {
    type: "website",
    url: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Shadcn - Landing template",
    description: "Free Shadcn landing page for developers",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Shadcn - Landing template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Shadcn - Landing template",
    description: "Free Shadcn landing page for developers",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <TestimonialSection />
      <HighlightIncomeTracking />
      <ShowcaseTaxManagement />
      <PresentExpenseTracking />
      <GigPlatformIntegrations />
      <section className="container py-24 sm:py-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Calculate Your Tax Savings
        </h2>
        <TaxSavingsCalculator />
      </section>
      <section className="container py-24 sm:py-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Estimate Your ROI
        </h2>
        <ROIEstimator />
      </section>
      <CommunitySection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
