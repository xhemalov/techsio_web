








'use client';

import Link from 'next/link';
import { Users, Target, Award, TrendingUp, ArrowRight, Check } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Zaměření na výsledky',
    description: 'Každý projekt měříme podle konkrétních výsledků a ROI našich klientů.'
  },
  {
    icon: Users,
    title: 'Partnerský přístup',
    description: 'Nejsme jen dodavatel, jsme váš dlouhodobý partner pro digitální růst.'
  },
  {
    icon: Award,
    title: 'Kvalita bez kompromisů',
    description: 'Používáme pouze nejmodernější technologie a osvědčené postupy.'
  },
  {
    icon: TrendingUp,
    title: 'Kontinuální růst',
    description: 'Neustále se vzděláváme a sledujeme nejnovější trendy v e-commerce.'
  }
];

const stats = [
  {
    number: '50+',
    label: 'Úspěšných projektů',
    description: 'Od malých e-shopů po komplexní B2B platformy'
  },
  {
    number: '5+',
    label: 'Let zkušeností',
    description: 'V oblasti e-commerce a webového vývoje'
  },
  {
    number: '99%',
    label: 'Spokojenost klientů',
    description: 'Dlouhodobé partnerství s většinou našich klientů'
  },
  {
    number: '24/7',
    label: 'Technická podpora',
    description: 'Pro kritické systémy našich klientů'
  }
];

const expertise = [
  'E-commerce řešení na míru',
  'B2B a B2C platformy',
  'Systémové integrace (ERP, CRM)',
  'Platební brány a dopravci',
  'SEO a výkonnostní optimalizace',
  'Mobilní aplikace',
  'Cloud infrastruktura',
  'Bezpečnost a GDPR compliance'
];

const team = [
  {
    name: 'Tomáš Novák',
    role: 'CEO & Lead Developer',
    description: 'Více než 8 let zkušeností s e-commerce projekty. Specializace na architekturu a systémové integrace.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
  },
  {
    name: 'Jana Svobodová',
    role: 'UX/UI Designer',
    description: 'Designérka s citem pro uživatelskou zkušenost. Vytváří rozhraní, která nejen vypadají skvěle, ale i fungují.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face'
  },
  {
    name: 'Petr Dvořák',
    role: 'Backend Developer',
    description: 'Expert na systémové integrace a API. Zajišťuje, aby všechny systémy spolupracovaly bez problémů.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
  }
];

export default function ONasPageContent() {
  return (
    <div className="min-h-screen bg-primary-black text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <h1 className="font-unbounded font-bold text-4xl md:text-6xl lg:text-7xl" style={{lineHeight: '1.2'}}>
              VYTVÁŘÍME{' '}
              <span className="text-primary-red">DIGITÁLNÍ ÚSPĚCH</span>
            </h1>
            <p className="font-inter text-lg sm:text-xl md:text-2xl text-light-gray max-w-4xl mx-auto leading-relaxed">
              Jsme tým odborníků specializujících se na tvorbu e-shopů a webových stránek na míru. 
              Naše mise je pomáhat firmám růst prostřednictvím kvalitních digitálních řešení.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-gray">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="text-4xl md:text-5xl font-unbounded font-bold text-primary-red">
                  {stat.number}
                </div>
                <div className="font-unbounded font-bold text-white text-lg" style={{lineHeight: '1.2'}}>
                  {stat.label}
                </div>
                <p className="text-light-gray font-inter text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-unbounded font-bold text-3xl md:text-4xl mb-8" style={{lineHeight: '1.2'}}>
                NÁŠE <span className="text-primary-red">HISTORIE</span>
              </h2>
              <div className="space-y-6 text-light-gray font-inter leading-relaxed">
                <p>
                  TechSio vzniklo z potřeby vytvářet e-commerce řešení, která skutečně fungují. 
                  Viděli jsme příliš mnoho projektů, které selhaly kvůli špatně zvolenému přístupu 
                  nebo technologii.
                </p>
                <p>
                  Rozhodli jsme se změnit způsob, jakým se e-commerce projekty realizují. 
                  Místo rychlých řešení se zaměřujeme na dlouhodobou hodnotu a skutečné 
                  potřeby našich klientů.
                </p>
                <p>
                  Dnes máme za sebou desítky úspěšných projektů a stále rosteme. 
                  Naše řešení pomáhají firmám dosahovat jejich obchodních cílů a 
                  konkurovat na digitálním trhu.
                </p>
              </div>
            </div>
            <div className="bg-dark-gray p-8 rounded-lg">
              <h3 className="font-unbounded font-bold text-white text-2xl mb-6" style={{lineHeight: '1.2'}}>
                NAŠE EXPERTIZA
              </h3>
              <div className="space-y-3">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check size={16} className="text-primary-red mt-1 flex-shrink-0" />
                    <span className="text-light-gray font-inter">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-unbounded font-bold text-3xl md:text-5xl mb-6" style={{lineHeight: '1.2'}}>
              NAŠE <span className="text-primary-red">HODNOTY</span>
            </h2>
            <p className="text-xl text-light-gray max-w-3xl mx-auto">
              Principy, kterými se řídíme při každém projektu
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="brand-card-secondary p-6 rounded-lg border border-dark-gray">
                  <div className="flex items-start space-x-4">
                    <div className="brand-icon-container-primary">
                      <IconComponent size={20} className="text-primary-red" />
                    </div>
                    <div>
                      <h3 className="font-unbounded font-bold text-white text-xl mb-3" style={{lineHeight: '1.2'}}>
                        {value.title}
                      </h3>
                      <p className="text-light-gray font-inter leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-unbounded font-bold text-3xl md:text-5xl mb-6" style={{lineHeight: '1.2'}}>
              NÁŠ <span className="text-primary-red">TÝM</span>
            </h2>
            <p className="text-xl text-light-gray max-w-3xl mx-auto">
              Odborníci s vášní pro kvalitní řešení
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center space-y-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-unbounded font-bold text-white text-xl mb-2" style={{lineHeight: '1.2'}}>
                    {member.name}
                  </h3>
                  <p className="text-primary-red font-inter font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-light-gray font-inter leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-unbounded font-bold text-3xl md:text-4xl mb-6" style={{lineHeight: '1.2'}}>
            PŘIPOJTE SE K NAŠIM{' '}
            <span className="text-primary-red">ÚSPĚŠNÝM KLIENTŮM</span>
          </h2>
          <p className="text-xl text-light-gray mb-8 leading-relaxed">
            Každý projekt začíná rozhovorem. Promluvme si o vašich cílech a najděme nejlepší řešení.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/kontakt" className="brand-button-primary inline-flex items-center">
              <span>Začít náš projekt</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/portfolio" className="border border-light-gray text-light-gray hover:text-white hover:border-white px-8 py-4 rounded-lg font-unbounded font-semibold uppercase transition-colors duration-200">
              NAŠE PORTFOLIO
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}








