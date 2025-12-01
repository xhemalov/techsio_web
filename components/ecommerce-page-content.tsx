



'use client';

import Link from 'next/link';
import { ShoppingCart, Users, Package, Zap, ArrowRight, Check } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'B2B Specifika',
    description: 'Firemní účty, individuální ceníky, schvalovací procesy a více košíků pro různé projekty.'
  },
  {
    icon: Package,
    title: 'Multisklad & Multishop',
    description: 'Správa více skladů a obchodů z jednoho administračního rozhraní.'
  },
  {
    icon: Zap,
    title: 'Rychlý nákup',
    description: 'Optimalizované procesy pro rychlé a efektivní objednávání velkých objemů.'
  },
  {
    icon: ShoppingCart,
    title: 'Pokročilé varianty',
    description: 'Komplexní systém variant produktů s neomezenými možnostmi konfigurace.'
  }
];

const benefits = [
  'Neomezená funkcionalita podle vašich potřeb',
  'Plná kontrola nad designem a UX',
  'Integrace s jakýmkoliv systémem',
  'Škálovatelnost pro růst vašeho byznysu',
  'Vlastnictví zdrojového kódu',
  'Dlouhodobá podpora a rozvoj'
];

export default function EcommercePageContent() {
  return (
    <div className="min-h-screen bg-primary-black text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <h1 className="font-unbounded font-bold text-4xl md:text-6xl lg:text-7xl" style={{lineHeight: '1.2'}}>
              E-SHOP PODLE VAŠICH{' '}
              <span className="text-primary-red">PRAVIDEL</span>
            </h1>
            <p className="font-inter text-lg sm:text-xl md:text-2xl text-light-gray max-w-4xl mx-auto leading-relaxed">
              Pokročilé B2B a B2C e-shopy s funkcemi, které standardní platformy nenabízí. 
              Bez omezení, s plnou kontrolou a nekonečnými možnostmi integrace.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/kontakt" className="brand-button-primary inline-flex items-center">
                <span>Konzultace zdarma</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/portfolio" className="brand-button-secondary">
                Naše projekty
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-unbounded font-bold text-3xl md:text-5xl mb-6" style={{lineHeight: '1.2'}}>
              KLÍČOVÉ <span className="text-primary-red">FUNKCE</span>
            </h2>
            <p className="text-xl text-light-gray max-w-3xl mx-auto">
              Každá funkce je navržena pro maximální efektivitu vašeho byznysu
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="brand-card-secondary no-hover-effect p-6 rounded-xl hover:border-gray-700/50 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="brand-icon-container-primary">
                      <IconComponent size={20} className="text-primary-red" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-unbounded font-bold text-white text-lg mb-2" style={{lineHeight: '1.3'}}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 font-inter text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-unbounded font-bold text-3xl md:text-4xl mb-8" style={{lineHeight: '1.2'}}>
                PROČ ŘEŠENÍ <span className="text-primary-red">NA MÍRU</span>?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check size={20} className="text-primary-red mt-1 flex-shrink-0" />
                    <span className="text-light-gray font-inter">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-dark-gray p-8 rounded-lg">
              <h3 className="font-unbounded font-bold text-white text-2xl mb-6" style={{lineHeight: '1.2'}}>
                TYPICKÉ POŽADAVKY NAŠICH KLIENTŮ
              </h3>
              <ul className="space-y-3 text-light-gray font-inter">
                <li>• Propojení s ERP systémem</li>
                <li>• Individuální ceníky pro B2B klienty</li>
                <li>• Komplexní systém variant produktů</li>
                <li>• Více skladů a distribučních center</li>
                <li>• Schvalovací procesy objednávek</li>
                <li>• Pokročilé reportování a analytics</li>
                <li>• Integrace s účetními systémy</li>
                <li>• Vlastní platební a dopravní moduly</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-unbounded font-bold text-3xl md:text-4xl mb-6" style={{lineHeight: '1.2'}}>
            PŘIPRAVENI ZAČÍT <span className="text-primary-red">VÁŠ PROJEKT</span>?
          </h2>
          <p className="text-xl text-light-gray mb-8 leading-relaxed">
            Každý projekt začíná konzultací. Promluvme si o vašich potřebách a najděme nejlepší řešení.
          </p>
          <Link href="/kontakt" className="brand-button-primary inline-flex items-center">
            <span>Rezervovat konzultaci</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
















