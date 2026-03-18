import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import TechniquesSection from '../components/TechniquesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';

function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <TechniquesSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

export default HomePage;
