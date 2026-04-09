import type { Metadata } from "next";
import {
  JsonLd,
  webPageSchema,
  faqSchema,
  breadcrumbSchema,
  aggregateRatingSchema,
} from "@/lib/schema";
import { faqs } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "NYC Marketing Company | SEO, Web Design & Branding",
  description:
    "The best organic marketing company in NYC. Full-service marketing serving 100+ industries across NYC, Long Island, and Westchester. Pricing starting at $100/hr. 25+ years experience. No contracts. Call/text 212.202.9220.",
  alternates: { canonical: "https://www.thenycmarketingcompany.com" },
};

// Home page sections
import Hero from "@/components/home/Hero";
import RealTalk from "@/components/home/RealTalk";
import Welcome from "@/components/home/Welcome";
import TrustBar from "@/components/home/TrustBar";
import ResultsTicker from "@/components/home/ResultsTicker";
import PricingSlider from "@/components/home/PricingSlider";
import Marquee from "@/components/home/Marquee";
import NotLikeOthers from "@/components/home/NotLikeOthers";
import TopServices from "@/components/home/TopServices";
import ServicesGrid from "@/components/home/ServicesGrid";
import ServiceDeepDives from "@/components/home/ServiceDeepDives";
import Process from "@/components/home/Process";
import Timeline from "@/components/home/Timeline";
import BeforeAfter from "@/components/home/BeforeAfter";
import CaseStudies from "@/components/home/CaseStudies";
import StatsBar from "@/components/home/StatsBar";
import Industries from "@/components/home/Industries";
import AreasServed from "@/components/home/AreasServed";
import NeighborhoodSlider from "@/components/home/NeighborhoodSlider";
import WhyNYC from "@/components/home/WhyNYC";
import Competitors from "@/components/home/Competitors";
import Testimonials from "@/components/home/Testimonials";
import SocialProof from "@/components/home/SocialProof";
import Comparison from "@/components/home/Comparison";
import ROICalculator from "@/components/home/ROICalculator";
import TechStack from "@/components/home/TechStack";
import Certifications from "@/components/home/Certifications";
import Guarantees from "@/components/home/Guarantees";
import WhatIsDigitalMarketing from "@/components/home/WhatIsDigitalMarketing";
import FreeResources from "@/components/home/FreeResources";
import VideoSection from "@/components/home/VideoSection";
import QuickTips from "@/components/home/QuickTips";
import ExpandedFAQ from "@/components/home/ExpandedFAQ";
import BlogPreview from "@/components/home/BlogPreview";
import FinalCTA from "@/components/home/FinalCTA";
import ExitIntent from "@/components/home/ExitIntent";

const breadcrumbs = [{ name: "Home", url: "https://www.thenycmarketingcompany.com" }];

export default function Home() {
  return (
    <>
      {/* Schema Markup */}
      <JsonLd
        data={webPageSchema(
          "NYC Marketing Company | The NYC Marketing Company",
          "Full-service NYC marketing company specializing in SEO, branding, web design, business development, and automation for businesses in NYC, Long Island, and Westchester.",
          "https://www.thenycmarketingcompany.com",
          breadcrumbs
        )}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd data={aggregateRatingSchema()} />
      <JsonLd data={faqSchema(faqs.homepageAll)} />


      {/* 1. Hero */}
      <Hero />

      {/* 1a. Real Talk — first thing after hero */}
      <RealTalk />

      {/* 1b. Quick marketing tips */}
      <QuickTips />

      {/* 2. Welcome / About */}
      <Welcome />

      {/* 3. Client trust logos — disabled for now */}
      {/* <TrustBar /> */}

      {/* 3. Results numbers */}
      <ResultsTicker />

      {/* 4. Pricing slider */}
      <PricingSlider />

      {/* 5. Testimonials / Reviews */}
      <Testimonials />

      {/* Scrolling marquee — disabled */}
      {/* <Marquee /> */}

      {/* Top 12 Services */}
      <TopServices />

      {/* Differentiator — disabled */}
      {/* <NotLikeOthers /> */}

      {/* Services overview — disabled */}
      {/* <ServicesGrid /> */}

      {/* 7. Service deep dives */}
      <ServiceDeepDives />

      {/* 8. Our process */}
      <Process />

      {/* 9. What happens timeline — removed, covered by Process */}
      {/* <Timeline /> */}

      {/* 10. Before & after */}
      <BeforeAfter />

      {/* 11. Case studies */}
      <CaseStudies />

      {/* 12. Stats strip — removed, covered by ResultsTicker */}
      {/* <StatsBar /> */}

      {/* 13. Industries */}
      <Industries />

      {/* 14. Areas we serve */}
      <AreasServed />

      {/* 14b. Neighborhood photo slider */}
      <NeighborhoodSlider />

      {/* 15. Why NYC needs digital marketing */}
      <WhyNYC />

      {/* 16. Competitor urgency */}
      <Competitors />

      {/* Social proof platforms */}
      <SocialProof />

      {/* 19. Agency vs in-house vs freelancer */}
      <Comparison />

      {/* 20. ROI calculator */}
      <ROICalculator />

      {/* 21. Tools & tech stack */}
      <TechStack />

      {/* 22. Certifications — removed */}
      {/* <Certifications /> */}

      {/* 23. Guarantees */}
      <Guarantees />

      {/* 24. What is digital marketing (SEO content) */}
      <WhatIsDigitalMarketing />

      {/* 25. Free resources */}
      <FreeResources />

      {/* 26. Video section — removed */}
      {/* <VideoSection /> */}

      {/* 28. Expanded FAQ (18 questions) */}
      <ExpandedFAQ />

      {/* 28. Blog preview */}
      <BlogPreview />

      {/* 29. Final CTA */}
      <FinalCTA />

      {/* 30. Exit intent popup */}
      <ExitIntent />
    </>
  );
}
