'use client';

import { Award, Check, Target, TrendingUp, Users } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Zaměření na výsledky',
    description: 'Každé řešení navrhujeme podle obchodních cílů, ne podle katalogu funkcí.',
  },
  {
    icon: Users,
    title: 'Partnerský přístup',
    description: 'Jsme technický partner, který rozumí e-commerce provozu i růstu firmy.',
  },
  {
    icon: Award,
    title: 'Kvalita bez kompromisů',
    description: 'Stavíme stabilní řešení, která se dají dlouhodobě rozvíjet a udržovat.',
  },
  {
    icon: TrendingUp,
    title: 'Růst bez limitů',
    description: 'Architekturu i integrace navrhujeme tak, aby vás nebrzdily za rok ani za tři.',
  },
];

const stats = [
  {
    number: '50+',
    label: 'úspěšných projektů',
  },
  {
    number: '5+',
    label: 'let zkušeností',
  },
  {
    number: '99%',
    label: 'spokojenost klientů',
  },
  {
    number: '24/7',
    label: 'technická podpora',
  },
];

const expertise = [
  'E-commerce řešení na míru',
  'B2B a B2C platformy',
  'Systémové integrace ERP a CRM',
  'Platební brány a dopravci',
  'Výkonnost a SEO',
  'Bezpečnost a GDPR compliance',
];

type ONasPageContentProps = {
  embedded?: boolean;
};

export default function ONasPageContent({ embedded = false }: ONasPageContentProps) {
  return (
    <section
      id="o-nas"
      className={`${embedded ? 'scroll-mt-16' : 'min-h-screen'} bg-primary-black text-white px-4 py-20 sm:px-6 lg:px-8`}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-primary-red/15 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-primary-red">
              O nás
            </span>
            <h2 className="font-unbounded font-bold text-4xl md:text-5xl" style={{ lineHeight: '1.2' }}>
              Technologie stavíme tak, aby <span className="text-primary-red">pomáhaly růstu</span>, ne ho brzdily.
            </h2>
            <p className="max-w-3xl text-lg md:text-xl text-light-gray font-inter leading-relaxed">
              Navrhujeme a dodáváme e-commerce řešení pro firmy, které potřebují stabilní provoz, spolehlivé integrace
              a prostor pro další rozvoj. Neprodáváme šablonu. Stavíme řešení, které odpovídá vašemu byznysu.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {expertise.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg border border-dark-gray bg-dark-gray/60 px-4 py-3">
                  <Check size={16} className="mt-1 flex-shrink-0 text-primary-red" />
                  <span className="font-inter text-light-gray">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-dark-gray bg-dark-gray p-6 text-center space-y-3">
                <div className="font-unbounded text-3xl md:text-4xl font-bold text-primary-red">{stat.number}</div>
                <p className="font-inter text-sm uppercase tracking-wide text-light-gray">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value) => {
            const IconComponent = value.icon;

            return (
              <div key={value.title} className="brand-card-secondary rounded-lg border border-dark-gray p-6">
                <div className="flex items-start gap-4">
                  <div className="brand-icon-container-primary">
                    <IconComponent size={20} className="text-primary-red" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-unbounded font-bold text-xl text-white" style={{ lineHeight: '1.2' }}>
                      {value.title}
                    </h3>
                    <p className="font-inter leading-relaxed text-light-gray">{value.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
