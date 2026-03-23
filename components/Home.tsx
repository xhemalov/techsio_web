import HeroSection from './HeroSection';
import ServicesOverview from './ServicesOverview';
import ComparisonSection from './ComparisonSection';
import PortfolioSection from './PortfolioSection';
import ONasPageContent from './o-nas-page-content';
import KontaktPageContent from './kontakt-page-content';

export default function Home() {
  return (
    <div className="min-h-screen bg-primary-black text-white">
      <HeroSection />
      <ServicesOverview />
      <ComparisonSection />
      <PortfolioSection />
      <ONasPageContent embedded />
      <KontaktPageContent embedded />
    </div>
  );
}


