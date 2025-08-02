import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import HeroSection from '@/components/sections/HeroSection';
import WhatWeDoSection from '@/components/sections/WhatWeDoSection';
import OurImpactSection from '@/components/sections/OurImpactSection';
import FeaturedCasesSection from '@/components/sections/FeaturedCasesSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <OurImpactSection />
        <FeaturedCasesSection />
        <WhyChooseUsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
