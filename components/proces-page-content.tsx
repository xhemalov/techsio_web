'use client';

import Link from 'next/link';
import { MessageSquare, FileText, Code, Rocket, Settings, ArrowRight, Check, Clock, Users } from 'lucide-react';

const processSteps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Konzultace & Analýza',
    duration: '1-2 týdny',
    description: 'Důkladně zmapujeme vaše potřeby, cíle a současnou situaci. Provedeme analýzu trhu a konkurence.',
    activities: [
      'Úvodní konzultace (zdarma)',
      'Analýza business požadavků',
      'Technická analýza současného stavu',
      'Konkurenční analýza',
      'Definice cílů a KPI'
    ],
    deliverables: [
      'Detailní specifikace projektu',
      'Technická architektura',
      'Časový harmonogram',
      'Cenová kalkulace'
    ]
  },
  {
    number: '02',
    icon: FileText,
    title: 'Návrh & Design',
    duration: '2-3 týdny',
    description: 'Vytvoříme wireframy, UX/UI design a prototyp. Vše konzultujeme s vámi pro dosažení perfektního výsledku.',
    activities: [
      'Wireframing a user journey',
      'UX/UI design',
      'Interaktivní prototyp',
      'Revize a úpravy designu',
      'Finalizace designu'
    ],
    deliverables: [
      'Kompletní design systém',
      'Interaktivní prototyp',
      'Style guide',
      'Responsive design pro všechna zařízení'
    ]
  },
  {
    number: '03',
    icon: Code,
    title: 'Vývoj & Implementace',
    duration: '4-8 týdnů',
    description: 'Postupně implementujeme všechny funkce podle schváleného návrhu. Pravidelně vás informujeme o pokroku.',
    activities: [
      'Frontend vývoj',
      'Backend vývoj a API',
      'Databázové struktury',
      'Integrace třetích stran',
      'Testování funkcionalit'
    ],
    deliverables: [
      'Funkční aplikace',
      'Administrační rozhraní',
      'API dokumentace',
      'Testovací prostředí'
    ]
  },
  {
    number: '04',
    icon: Settings,
    title: 'Testování & Optimalizace',
    duration: '1-2 týdny',
    description: 'Důkladně otestujeme všechny funkce, optimalizujeme výkon a připravíme aplikaci na produkční nasazení.',
    activities: [
      'Funkční testování',
      'Performance optimalizace',
      'Bezpečnostní audit',
      'Cross-browser testování',
      'Mobile responsivita'
    ],
    deliverables: [
      'Testovací protokoly',
      'Performance report',
      'Bezpečnostní audit',
      'Optimalizovaná aplikace'
    ]
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Spuštění & Podpora',
    duration: 'Průběžně',
    description: 'Nasadíme aplikaci do produkce, provedeme školení a poskytujeme dlouhodobou technickou podporu.',
    activities: [
      'Produkční nasazení',
      'Školení administrátorů',
      'Monitoring a údržba',
      'Technická podpora',
      'Další rozvoj funkcí'
    ],
    deliverables: [
      'Spuštěná aplikace',
      'Dokumentace pro uživatele',
      'SLA smlouva',
      'Plán dalšího rozvoje'
    ]
  }
];

const benefits = [
  'Transparentní komunikace v každé fázi',
  'Pravidelné reporty o pokroku',
  'Flexibilní přístup k změnám',
  'Kvalitní dokumentace',
  'Dlouhodobá podpora',
  'Garance kvality'
];

const timeline = [
  { phase: 'Malý projekt', duration: '6-8 týdnů', description: 'Jednoduchý e-shop nebo prezentační web' },
  { phase: 'Střední projekt', duration: '10-14 týdnů', description: 'E-shop s integrací nebo B2B platforma' },
  { phase: 'Velký projekt', duration: '16-24 týdnů', description: 'Komplexní systém s více integrací' }
];

export default function ProcesPageContent() {
  return (
    <div className="min-h-screen bg-primary-black text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <h1 className="font-unbounded font-bold text-4xl md:text-6xl lg:text-7xl" style={{lineHeight: '1.2'}}>
              JAK PROBÍHÁ{' '}
              <span className="text-primary-red">SPOLUPRÁCE</span>
            </h1>
            <p className="font-inter text-lg sm:text-xl md:text-2xl text-light-gray max-w-4xl mx-auto leading-relaxed">
              Transparentní proces od první konzultace až po dlouhodobou podporu. 
              Každý krok je pečlivě naplánován pro dosažení nejlepších výsledků.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/kontakt" className="bg-primary-red hover:bg-secondary-red text-white px-8 py-4 rounded-lg font-unbounded font-semibold uppercase transition-colors duration-200 inline-flex items-center">
                <span>Začít projekt</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <div className="text-light-gray font-inter">
                <span className="text-primary-red font-bold">První konzultace zdarma</span> • 60 minut
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-unbounded font-bold text-3xl md:text-5xl mb-6" style={{lineHeight: '1.2'}}>
              ČASOVÉ <span className="text-primary-red">HARMONOGRAMY</span>
            </h2>
            <p className="text-xl text-light-gray max-w-3xl mx-auto">
              Orientační doba realizace podle složitosti projektu
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {timeline.map((item, index) => (
              <div key={index} className="brand-card-primary p-8 rounded-lg">
                <div className="mb-2">
                  <h3 className="font-unbounded font-bold text-white text-xl" style={{lineHeight: '1.2'}}>
                    {item.phase}
                  </h3>
                </div>
                <div className="text-3xl font-unbounded font-bold text-primary-red mb-4">
                  {item.duration}
                </div>
                <p className="text-light-gray font-inter text-sm leading-relaxed max-w-[80%]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Connection Line - REMOVED */}
                  
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 brand-card-tertiary rounded-lg p-8">
                    {/* Step Header */}
                    <div className="lg:col-span-3 flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-unbounded font-bold text-white text-sm">{step.number}</span>
                      </div>
                      <div className="flex-1">
                        <div className="mb-2">
                          <h3 className="font-unbounded font-bold text-white text-xl" style={{lineHeight: '1.2'}}>
                            {step.title}
                          </h3>
                        </div>
                        <div className="flex items-center space-x-2 text-primary-red font-inter text-sm mb-4">
                          <Clock size={16} />
                          <span>{step.duration}</span>
                        </div>
                        <p className="text-light-gray font-inter leading-relaxed max-w-[80%]">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Activities */}
                    <div className="lg:col-span-1">
                      <h4 className="font-inter font-semibold text-white mb-4 flex items-center">
                        <Users size={16} className="mr-2 text-primary-red" />
                        Aktivity
                      </h4>
                      <ul className="space-y-2">
                        {step.activities.map((activity, activityIndex) => (
                          <li key={activityIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary-red rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-light-gray font-inter text-sm">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div className="lg:col-span-1">
                      <h4 className="font-inter font-semibold text-white mb-4 flex items-center">
                        <Check size={16} className="mr-2 text-primary-red" />
                        Výstupy
                      </h4>
                      <ul className="space-y-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-start space-x-2">
                            <Check size={16} className="text-primary-red mt-1 flex-shrink-0" />
                            <span className="text-light-gray font-inter text-sm">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
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
                PROČ SPOLUPRACOVAT{' '}
                <span className="text-primary-red">S NÁMI</span>?
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
                CO VÁS ČEKÁ PO SPUŠTĚNÍ?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check size={16} className="text-primary-red mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-inter font-semibold">Technická podpora 24/7</div>
                    <div className="text-light-gray font-inter text-sm">Pro kritické systémy</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check size={16} className="text-primary-red mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-inter font-semibold">Pravidelné aktualizace</div>
                    <div className="text-light-gray font-inter text-sm">Bezpečnostní a funkční</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check size={16} className="text-primary-red mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-inter font-semibold">Monitoring výkonu</div>
                    <div className="text-light-gray font-inter text-sm">Proaktivní sledování</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check size={16} className="text-primary-red mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-inter font-semibold">Další rozvoj funkcí</div>
                    <div className="text-light-gray font-inter text-sm">Podle vašich potřeb</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-unbounded font-bold text-3xl md:text-4xl mb-6" style={{lineHeight: '1.2'}}>
            PŘIPRAVENI ZAČÍT{' '}
            <span className="text-primary-red">SPOLUPRÁCI</span>?
          </h2>
          <p className="text-xl text-light-gray mb-8 leading-relaxed">
            První konzultace je zdarma. Promluvme si o vašem projektu a najděme nejlepší řešení.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/kontakt" className="bg-primary-red hover:bg-secondary-red text-white px-8 py-4 rounded-lg font-unbounded font-semibold uppercase transition-colors duration-200 inline-flex items-center">
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











