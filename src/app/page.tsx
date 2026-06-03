import HeroSlider from '@/components/home/HeroSlider';
import AboutSection from '@/components/home/AboutSection';
import ProductsSection from '@/components/home/ProductsSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import InnovationSection from '@/components/home/InnovationSection';
import ProcurementSection from '@/components/home/ProcurementSection';
import StatsSection from '@/components/home/StatsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import BlogSection from '@/components/home/BlogSection';

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <WhyChooseUs />
      <InnovationSection />
      <ProcurementSection />
      <StatsSection />
      <TestimonialsSection />
      <BlogSection />
    </>
  );
}
