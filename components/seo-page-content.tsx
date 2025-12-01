

'use client';

import Link from 'next/link';
import { TrendingUp, Search, BarChart3, FileText, ArrowRight, Check, Target } from 'lucide-react';

const seoServices = [
  {
    icon: Search,
    title: 'Technické SEO',
    description: 'Optimalizace technických aspektů webu pro lepší indexaci a rychlost načítání.',
    features: ['Core Web Vitals', 'Strukturovaná data', 'XML sitemapy', 'Rychlost načítání']
  },
  {
    icon: FileText,
    title: 'Obsahová optimalizace',
    description: 'Optimalizace obsahu pro cílová klíčová slova a lepší uživatelskou zkušenost.',
    features: ['Keyword research', 'Meta tagy', 'Interní linkování', 'Obsah pro uživatele']
  },
  {
    icon: BarChart3,
    title: 'Měsíční reporting',
    description: 'Pravidelné reporty o výkonnosti SEO a doporučení pro další optimalizace.',
    features: ['Pozice klíčových slov', 'Organický traffic', 'Konverzní analýza', 'Konkurenční analýza']
  },
  {
    icon: Target,
    title: 'Analýza výkonnosti',
    description: 'Detailní analýza výkonnosti webu a identifikace příležitostí pro zlepšení.',
    features: ['Google Analytics', 'Search Console', 'Heatmapy', 'A/B testování']
  }
];

const seoProcess = [
  {
    step: '01',
    title: 'SEO Audit',
    description: 'Komplexní analýza současného stavu SEO vašeho webu.',
    deliverables: ['Technický audit', 'Obsahový audit', 'Konkurenční analýza', 'Keyword research']
  },
  {
    step: '02',
    title: 'Strategie & Plán',
    description: 'Vytvoření SEO strategie a implementačního plánu.',
    deliverables: ['SEO strategie', 'Prioritizace úkolů', 'Časový harmonogram', 'KPI definice']
  },
  {
    step: '03',
    title: 'Implementace',
    description: 'Postupná implementace SEO optimalizací.',
    deliverables: ['Technické úpravy', 'Obsahové optimalizace', 'Link building', 'Monitoring']
  },
  {
    step: '04',
    title: 'Monitoring & Reporting',
    description: 'Pravidelné sledování výsledků a reporting.',
    deliverables: ['Měsíční reporty', 'Analýza trendů', 'Doporučení', 'Optimalizace strategie']
  }
];

const benefits = [
  'Vyšší pozice ve vyhledávačích',
  'Více organického trafficu',
  'Lepší konverzní poměr',
  'Dlouhodobý růst návštěvnosti',
  'Konkurenční výhoda',
  'Měřitelné výsledky'
];

const results = [
  {
    metric: 'Průměrný nárůst trafficu',
    value: '+180%',
    period: 'za 6 měsíců'
  },
  {
    metric: 'Zlepšení pozic',
    value: '+15',
    period: 'průměrně'
  },
  {
    metric: 'Nárůst konverzí',
    value: '+65%',
    period: 'z organického trafficu'
  },
  {
    metric: 'ROI investice do SEO',
    value: '400%',
    period: 'průměrně za rok'
  }
];

export default function SeoPageContent() {
  return (
    <div className="min-h-screen bg-primary-black text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary-red/20 text-primary-red px-4 py-2 rounded-full text-sm font-medium">
              <TrendingUp size={16} />
              <span>SEO & REPORTING</span>
            </div>
            <h1 className="font-unbounded font-bold text-4xl md:text-6xl lg:text-7xl" style={{lineHeight: '1.2'}}>
              BUĎTE VIDĚT{' '}
              <span className="text-primary-red">NAHOŘE</span>
            </h1>
            <p className="font-inter text-lg sm:text-xl md:text-2xl text-light-gray max-w-4xl mx-auto leading-relaxed">
              Optimalizace pro vyhledávače a měsíční reporting výkonnosti pro lepší pozice 
              a konverze. Dlouhodobý růst organického trafficu s měřitelnými výsledky.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/kontakt" className="brand-button-primary inline-flex items-center">
                <span>Bezplatný SEO audit</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <div className="text-light-gray font-inter">
                <span className="text-primary-red font-bold">Bezplatný SEO audit</span> • 30 minut
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-unbounded font-bold text-3xl md:text-5xl mb-6" style={{lineHeight: '1.2'}}>
              NAŠE SEO <span className="text-primary-red">SLUŽBY</span>
            </h2>
            <p className="text-xl text-light-gray max-w-3xl mx-auto">
              Komplexní přístup k optimalizaci pro vyhledávače
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seoServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="brand-card-secondary p-6 rounded-lg border border-dark-gray hover:border-primary-red transition-colors duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="brand-icon-container-primary">
                      <IconComponent size={20} className="text-primary-red" />
                    </div>
                    <div>
                      <h3 className="font-unbounded font-bold text-white text-xl mb-3" style={{lineHeight: '1.2'}}>
                        {service.title}
                      </h3>
                      <p className="text-light-gray font-inter leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary-red rounded-full"></div>
                            <span className="text-sm text-light-gray font-inter">{feature}</span>
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

      {/* Results Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-unbounded font-bold text-3xl md:text-5xl mb-6" style={{lineHeight: '1.2'}}>
              REÁLNÉ <span className="text-primary-red">VÝSLEDKY</span>
            </h2>
            <p className="text-xl text-light-gray max-w-3xl mx-auto">
              Měřitelné výsledky našich SEO kampaní
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center brand-card-tertiary p-8 rounded-lg">
                <div className="text-4xl font-unbounded font-bold text-primary-red mb-2">
                  {result.value}
                </div>
                <div className="text-white font-inter font-semibold mb-2">
                  {result.metric}
                </div>
                <div className="text-light-gray font-inter text-sm">
                  {result.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-unbounded font-bold text-3xl md:text-5xl mb-6" style={{lineHeight: '1.2'}}>
              PROCES <span className="text-primary-red">OPTIMALIZACE</span>
            </h2>
            <p className="text-xl text-light-gray max-w-3xl mx-auto">
              Systematický přístup k dlouhodobému SEO úspěchu
            </p>
          </div>
          
          <div className="space-y-8">
            {seoProcess.map((phase, index) => (
              <div key={index} className="bg-primary-black rounded-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-unbounded font-bold text-white">{phase.step}</span>
                    </div>
                    <div>
                      <h3 className="font-unbounded font-bold text-white text-xl mb-2" style={{lineHeight: '1.2'}}>
                        {phase.title}
                      </h3>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-unbounded font-bold text-3xl md:text-4xl mb-8" style={{lineHeight: '1.2'}}>
                VÝHODY NAŠEHO <span className="text-primary-red">SEO</span>
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
                CO ZAHRNUJE MĚSÍČNÍ REPORTING?
              </h3>
              <ul className="space-y-3 text-light-gray font-inter">
                <li className="flex items-start space-x-2">
                  <Check size={16} className="text-primary-red mt-1 flex-shrink-0" />
                  <span>Pozice klíčových slov</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check size={16} className="text-primary-red mt-1 flex-shrink-0" />
                  <span>Organický traffic a jeho vývoj</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check size={16} className="text-primary-red mt-1 flex-shrink-0" />
                  <span>Analýza konverzí z SEO</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check size={16} className="text-primary-red mt-1 flex-shrink-0" />
                  <span>Technické problémy a jejich řešení</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check size={16} className="text-primary-red mt-1 flex-shrink-0" />
                  <span>Doporučení pro další optimalizace</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check size={16} className="text-primary-red mt-1 flex-shrink-0" />
                  <span>Konkurenční analýza</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-unbounded font-bold text-3xl md:text-4xl mb-6" style={{lineHeight: '1.2'}}>
            ZAČNĚME <span className="text-primary-red">OPTIMALIZOVAT</span>
          </h2>
          <p className="text-xl text-light-gray mb-8 leading-relaxed">
            Získejte bezplatný SEO audit a zjistěte, jak můžeme zlepšit vaše pozice ve vyhledávačích.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/kontakt" className="brand-button-primary inline-flex items-center">
              <span>SEO konzultace</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <div className="text-light-gray font-inter text-center">
              <div className="font-semibold text-white">Audit zdarma</div>
              <div className="text-sm">Bez závazků • Detailní analýza</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}










