import Navigation from './Navigation';
import HeroSection from './HeroSection';
import ServicesOverview from './ServicesOverview';
import ServicesSection from './ServicesSection';
import ComparisonSection from './ComparisonSection';
import PortfolioSection from './PortfolioSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-primary-black text-white">
      <Navigation />
      <HeroSection />
      <ServicesOverview />
      <ServicesSection />
      <ComparisonSection />
      <PortfolioSection />
    </div>
  );
}


