



'use client';

import Link from 'next/link';
import { Settings, Database, CreditCard, Truck, ArrowRight, Check, Zap } from 'lucide-react';

const integrations = [
  {
    icon: Database,
    title: 'ERP Systémy',
    description: 'Propojení s SAP, Microsoft Dynamics, Pohoda a dalšími ERP systémy pro automatickou synchronizaci dat.',
    features: ['Synchronizace skladů', 'Automatické objednávky', 'Cenové politiky', 'Zákaznická data']
  },
  {
    icon: CreditCard,
    title: 'Platební brány',
    description: 'Integrace s všemi hlavními platebními poskytovateli pro bezpečné a rychlé platby.',
    features: ['PayPal, Stripe, GoPay', 'Bankovní převody', 'Kryptoměny', 'Splátkové programy']
  },
  {
    icon: Truck,
    title: 'Dopravci',
    description: 'Automatické generování štítků, sledování zásilek a kalkulace dopravného.',
    features: ['Česká pošta, DPD, UPS', 'Automatické štítky', 'Sledování zásilek', 'Kalkulace cen']
  },
  {
    icon: Settings,
    title: 'CRM & Marketing',
    description: 'Propojení s CRM systémy a marketingovými nástroji pro lepší zákaznickou péči.',
    features: ['Salesforce, HubSpot', 'Email marketing', 'Zákaznické segmenty', 'Automatizace']
  }
];

const benefits = [
  'Eliminace manuálního přepisování dat',
  'Automatizace opakujících se procesů',
  'Snížení chybovosti na minimum',
  'Úspora času a nákladů',
  'Lepší přehled o byznysu',
  'Rychlejší reakce na změny'
];

const processSteps = [
  {
    number: '01',
    title: 'Analýza současného stavu',
    description: 'Zmapujeme vaše současné systémy a identifikujeme možnosti integrace.'
  },
  {
    number: '02',
    title: 'Návrh architektury',
    description: 'Navrhneme optimální způsob propojení všech systémů.'
  },
  {
    number: '03',
    title: 'Implementace',
    description: 'Postupně implementujeme jednotlivé integrace s minimálním dopadem na provoz.'
  },
  {
    number: '04',
    title: 'Testování a optimalizace',
    description: 'Důkladně otestujeme všechny procesy a optimalizujeme výkon.'
  }
];

export default function IntegracePageContent() {
  return (
    <div className="min-h-screen bg-primary-black text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary-red/20 text-primary-red px-4 py-2 rounded-full text-sm font-medium">
              <Settings size={16} />
              <span>SYSTÉMOVÉ INTEGRACE</span>
            </div>
            <h1 className="font-unbounded font-bold text-4xl md:text-6xl lg:text-7xl" style={{lineHeight: '1.2'}}>
              PROPOJTE VŠECHNY{' '}
              <span className="text-primary-red">SYSTÉMY</span>
            </h1>
            <p className="font-inter text-lg sm:text-xl md:text-2xl text-light-gray max-w-4xl mx-auto leading-relaxed">
              Automatizujte procesy propojením e-shopu s ERP, CRM, účetními systémy, 
              platebními branami a dopravci. Eliminujte manuální práci a chyby.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/kontakt" className="brand-button-primary inline-flex items-center">
                <span>Konzultace integrace</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/portfolio/smartbusiness" className="border border-light-gray text-light-gray hover:text-white hover:border-white px-8 py-4 rounded-lg font-inter font-medium transition-colors duration-200">
                Příklad integrace
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-unbounded font-bold text-3xl md:text-5xl mb-6" style={{lineHeight: '1.2'}}>
              TYPY <span className="text-primary-red">INTEGRACÍ</span>
            </h2>
            <p className="text-xl text-light-gray max-w-3xl mx-auto">
              Propojíme váš e-shop s jakýmkoliv systémem pomocí moderních API
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {integrations.map((integration, index) => {
              const IconComponent = integration.icon;
              return (
                <div key={index} className="brand-card-secondary p-6 rounded-lg border border-dark-gray hover:border-primary-red transition-colors duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="brand-icon-container-primary">
                      <IconComponent size={20} className="text-primary-red" />
                    </div>
                    <div>
                      <h3 className="font-unbounded font-bold text-white text-xl mb-3" style={{lineHeight: '1.2'}}>
                        {integration.title}
                      </h3>
                      <p className="text-light-gray font-inter leading-relaxed mb-4">
                        {integration.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {integration.features.map((feature, featureIndex) => (
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

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-unbounded font-bold text-3xl md:text-5xl mb-6" style={{lineHeight: '1.2'}}>
              PROCES <span className="text-primary-red">INTEGRACE</span>
            </h2>
            <p className="text-xl text-light-gray max-w-3xl mx-auto">
              Postupujeme systematicky s minimálním dopadem na váš provoz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto">
                  <span className="font-unbounded font-bold text-white text-lg">{step.number}</span>
                </div>
                <h3 className="font-unbounded font-bold text-white text-lg" style={{lineHeight: '1.2'}}>
                  {step.title}
                </h3>
                <p className="text-light-gray font-inter text-sm leading-relaxed">
                  {step.description}
                </p>
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
                VÝHODY <span className="text-primary-red">AUTOMATIZACE</span>
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
              <div className="flex items-center space-x-3 mb-6">
                <Zap size={24} className="text-primary-red" />
                <h3 className="font-unbounded font-bold text-white text-2xl" style={{lineHeight: '1.2'}}>
                  REÁLNÉ VÝSLEDKY
                </h3>
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-light-gray font-inter">Snížení chybovosti</span>
                  <span className="font-unbounded font-bold text-primary-red text-xl">-95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-light-gray font-inter">Úspora času</span>
                  <span className="font-unbounded font-bold text-primary-red text-xl">60%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-light-gray font-inter">Rychlost zpracování</span>
                  <span className="font-unbounded font-bold text-primary-red text-xl">+300%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-light-gray font-inter">Automatizace procesů</span>
                  <span className="font-unbounded font-bold text-primary-red text-xl">85%</span>
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
            PŘIPRAVENI <span className="text-primary-red">AUTOMATIZOVAT</span>?
          </h2>
          <p className="text-xl text-light-gray mb-8 leading-relaxed">
            Promluvme si o vašich systémech a najděme nejefektivnější způsob jejich propojení.
          </p>
          <Link href="/kontakt" className="bg-primary-red hover:bg-secondary-red text-white px-8 py-4 rounded-lg font-inter font-medium transition-colors duration-200 inline-flex items-center">
            <span>Konzultace integrace</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}






