import { Helmet } from "react-helmet-async";
import { HeroSlider } from "@/components/sections/HeroSlider";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";
import { CTASection } from "@/components/sections/CTASection";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>InCtrl Technology Solutions | Security, Cabling, Digital Signage & AV in Orlando</title>
        <meta name="description" content="Central Florida's all-in-one tech installation partner. Security systems, structured cabling, digital signage, audio visual & IT field services. 200+ miles coverage around Orlando." />
        <meta name="keywords" content="security cameras Orlando, structured cabling Florida, digital signage installation, AV installation, IT field services" />
        <link rel="canonical" href="https://inctrl.tech" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSlider />
          <SolutionsSection />
          <WhyChooseUsSection />
          <PortfolioSection />
          <TestimonialsSection />
          <ServiceAreaSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;