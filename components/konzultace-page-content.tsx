


'use client';

import Link from 'next/link';
import { ShoppingCart, Settings, Zap, BarChart3, ArrowRight, Check, Clock } from 'lucide-react';

const consultingAreas = [
  {
    icon: ShoppingCart,
    title: 'E-commerce strategie',
    description: 'Pomůžeme vám definovat správnou strategii pro váš online byznys a dosažení cílů.',
    topics: ['Analýza trhu', 'Konkurenční výhoda', 'Cenová strategie', 'Kanály prodeje']
  },
  {
    icon: Settings,
    title: 'Výběr technologií',
    description: 'Poradíme s výběrem správných technologií a platforem pro váš konkrétní případ.',
    topics: ['Platformy vs. custom', 'Škálovatelnost', 'Integrace', 'Budoucí rozvoj']
  },
  {
    icon: Zap,
    title: 'Optimalizace procesů',
    description: 'Identifikujeme úzká místa a navrhneme optimalizace pro lepší efektivitu.',
    topics: ['Workflow analýza', 'Automatizace', 'UX optimalizace', 'Konverzní optimalizace']
  },
  {
    icon: BarChart3,
    title: 'Analýza konkurence',
    description: 'Důkladná analýza konkurenčního prostředí a identifikace příležitostí.',
    topics: ['Benchmarking', 'Best practices', 'Cenová analýza', 'Funkční srovnání']
  }
];

const consultingProcess = [
  {
    step: '01',
    title: 'Úvodní konzultace',
    duration: '60 min',
    description: 'Zmapujeme vaše potřeby, cíle a současnou situaci.',
    deliverables: ['Analýza současného stavu', 'Definice cílů', 'Identifikace výzev']
  },
  {
    step: '02',
    title: 'Detailní analýza',
    duration: '1-2 týdny',
    description: 'Provedeme hloubkovou analýzu vašeho byznysu a trhu.',
    deliverables: ['Konkurenční analýza', 'Technická analýza', 'Procesní mapa']
  },
  {
    step: '03',
    title: 'Strategické doporučení',
    duration: '1 týden',
    description: 'Připravíme konkrétní doporučení a akční plán.',
    deliverables: ['Strategický dokument', 'Akční plán', 'Roadmapa implementace']
  },
  {
    step: '04',
    title: 'Implementační podpora',
    duration: 'Dle potřeby',
    description: 'Pomůžeme s implementací doporučených řešení.',
    deliverables: ['Technická podpora', 'Projektové řízení', 'Průběžné konzultace']
  }
];

const benefits = [
  'Objektivní pohled na váš byznys',
  'Zkušenosti z desítek projektů',
  'Úspora času a nákladů',
  'Minimalizace rizik',
  'Konkrétní akční plán',
  'Dlouhodobá podpora'
];

export default function KonzultacePageContent() {
  return (
    <div className="min-h-screen bg-primary-black text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <h1 className="font-unbounded font-bold text-4xl md:text-6xl lg:text-7xl" style={{lineHeight: '1.2'}}>
              SPRÁVNÁ STRATEGIE{' '}
              <span className="text-primary-red">= ÚSPĚCH</span>
            </h1>
            <p className="font-inter text-lg sm:text-xl md:text-2xl text-light-gray max-w-4xl mx-auto leading-relaxed">
              Odborné poradenství v oblasti e-commerce strategie, výběr správného řešení 
              a optimalizace procesů. Využijte naše zkušenosti z desítek úspěšných projektů.
            </p>
            <div className="flex justify-center">
              <Link href="/kontakt" className="brand-button-primary inline-flex items-center">
                <span>Rezervovat konzultaci</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="text-center text-light-gray font-inter -mt-4">
              <span className="text-primary-red font-bold">První konzultace zdarma</span> • 60 minut
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Areas Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-unbounded font-bold text-3xl md:text-5xl mb-6" style={{lineHeight: '1.2'}}>
              OBLASTI <span className="text-primary-red">PORADENSTVÍ</span>
            </h2>
            <p className="text-xl text-light-gray max-w-3xl mx-auto">
              Pokrýváme všechny aspekty úspěšného e-commerce byznysu
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultingAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div key={index} className="brand-card-secondary no-hover-effect p-6 rounded-lg border border-dark-gray">
                  <div className="flex items-start space-x-4">
                    <div className="brand-icon-container-primary">
                      <IconComponent size={20} className="text-primary-red" />
                    </div>
                    <div>
                      <h3 className="font-unbounded font-bold text-white text-xl mb-3" style={{lineHeight: '1.2'}}>
                        {area.title}
                      </h3>
                      <p className="text-light-gray font-inter leading-relaxed mb-4">
                        {area.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {area.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary-red rounded-full"></div>
                            <span className="text-sm text-light-gray font-inter">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-unbounded font-bold text-3xl md:text-5xl mb-6" style={{lineHeight: '1.2'}}>
              PROCES <span className="text-primary-red">KONZULTACE</span>
            </h2>
            <p className="text-xl text-light-gray max-w-3xl mx-auto">
              Strukturovaný přístup pro maximální hodnotu vašeho času
            </p>
          </div>
          
          <div className="space-y-8">
            {consultingProcess.map((phase, index) => (
              <div key={index} className="bg-dark-gray rounded-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-unbounded font-bold text-white">{phase.step}</span>
                    </div>
                    <div>
                      <h3 className="font-unbounded font-bold text-white text-xl mb-2" style={{lineHeight: '1.2'}}>
                        {phase.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-primary-red font-inter text-sm">
                        <Clock size={16} />
                        <span>{phase.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-light-gray font-inter leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-inter font-semibold text-white mb-3">Výstupy:</h4>
                    <ul className="space-y-2">
                      {phase.deliverables.map((deliverable, deliverableIndex) => (
                        <li key={deliverableIndex} className="flex items-start space-x-2">
                          <Check size={16} className="text-primary-red mt-1 flex-shrink-0" />
                          <span className="text-light-gray font-inter text-sm">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-gray">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-unbounded font-bold text-3xl md:text-4xl mb-8" style={{lineHeight: '1.2'}}>
                PROČ KONZULTACE <span className="text-primary-red">S NÁMI</span>?
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
            <div className="bg-primary-black p-8 rounded-lg border border-dark-gray">
              <h3 className="font-unbounded font-bold text-white text-2xl mb-6" style={{lineHeight: '1.2'}}>
                NAŠE ZKUŠENOSTI
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-light-gray font-inter">Úspěšných projektů</span>
                  <span className="font-unbounded font-bold text-primary-red text-xl">50+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-light-gray font-inter">Let zkušeností</span>
                  <span className="font-unbounded font-bold text-primary-red text-xl">5+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-light-gray font-inter">Spokojenost klientů</span>
                  <span className="font-unbounded font-bold text-primary-red text-xl">99%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-light-gray font-inter">Průměrný nárůst tržeb</span>
                  <span className="font-unbounded font-bold text-primary-red text-xl">+150%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-unbounded font-bold text-3xl md:text-4xl mb-6" style={{lineHeight: '1.2'}}>
            ZAČNĚME <span className="text-primary-red">KONZULTACÍ</span>
          </h2>
          <p className="text-xl text-light-gray mb-8 leading-relaxed">
            První konzultace je zdarma. Promluvme si o vašich výzvách a najděme nejlepší řešení.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/kontakt" className="brand-button-primary inline-flex items-center">
              <span>Rezervovat konzultaci</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <div className="text-light-gray font-inter text-center">
              <div className="font-semibold text-white">Konzultace zdarma</div>
              <div className="text-sm">Bez závazků • 60 minut</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
















