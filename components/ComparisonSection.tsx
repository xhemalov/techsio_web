import Link from 'next/link';
import { Check, X } from 'lucide-react';

const comparisonData = [
  {
    feature: 'Flexibilita funkcí',
    custom: true,
    platform: false,
    description: 'Přizpůsobení přesně vašim potřebám'
  },
  {
    feature: 'Kontrola nad kódem',
    custom: true,
    platform: false,
    description: 'Plná kontrola a možnost úprav'
  },
  {
    feature: 'Systémové integrace',
    custom: true,
    platform: 'limited',
    description: 'Neomezené propojení s vašimi systémy'
  },
  {
    feature: 'Škálovatelnost',
    custom: true,
    platform: 'limited',
    description: 'Růst bez technických omezení'
  },
  {
    feature: 'Rychlost nasazení',
    custom: 'medium',
    platform: true,
    description: 'Kvalitní řešení vyžaduje čas'
  },
  {
    feature: 'Měsíční poplatky',
    custom: false,
    platform: true,
    description: 'Žádné licenční poplatky'
  },
  {
    feature: 'Vlastnictví dat',
    custom: true,
    platform: false,
    description: 'Vaše data zůstávají vaše'
  },
  {
    feature: 'B2B specifika',
    custom: true,
    platform: 'limited',
    description: 'Pokročilé B2B funkce bez kompromisů'
  }
];

function StatusIcon({ status }: { status: boolean | 'limited' | 'medium' }) {
  if (status === true) {
    return <Check size={20} className="text-brand-red" />;
  }
  if (status === 'limited' || status === 'medium') {
    return <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>;
  }
  return <X size={20} className="text-brand-gray-light" />;
}

export default function ComparisonSection() {
  return (
    <section className="brand-section bg-brand-black">
      <div className="brand-container">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="hero-text text-3xl md:text-5xl" style={{lineHeight: '1.2'}}>
            <span className="text-brand-red">ŘEŠENÍ NA MÍRU</span> <span className="text-white">VS. KRABICOVÁ ŘEŠENÍ</span>
          </h2>
          <p className="text-xl text-brand-gray-light font-inter max-w-3xl mx-auto leading-relaxed">
            Proč si vybrat <span className="text-white font-semibold">řešení na míru</span> místo omezujících platforem? 
            Podívejte se na klíčové rozdíly.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          <div className="brand-card overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 p-6 border-b border-brand-gray-dark">
              <div className="col-span-2">
                <h3 className="font-unbounded font-bold text-white text-lg uppercase" style={{lineHeight: '1.2'}}>
                  Vlastnost
                </h3>
              </div>
              <div className="text-center">
                <h3 className="font-unbounded font-bold text-brand-red text-lg uppercase" style={{lineHeight: '1.2'}}>
                  Na míru
                </h3>
              </div>
              <div className="text-center">
                <h3 className="font-unbounded font-bold text-brand-gray-light text-lg uppercase" style={{lineHeight: '1.2'}}>
                  Platforma
                </h3>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-brand-gray-dark">
              {comparisonData.map((item, index) => (
                <div key={index} className="grid grid-cols-4 gap-4 p-6 hover:bg-white/5 transition-colors duration-300">
                  <div className="col-span-2 flex flex-col justify-end space-y-1 min-h-[60px]">
                    <h4 className="font-inter font-semibold text-white leading-snug">
                      {item.feature}
                    </h4>
                    <p className="font-inter text-sm text-brand-gray-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <StatusIcon status={item.custom as boolean | 'limited' | 'medium'} />
                  </div>
                  <div className="flex justify-center items-center">
                    <StatusIcon status={item.platform as boolean | 'limited' | 'medium'} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex justify-center space-x-8 mt-8 text-sm font-inter">
            <div className="flex items-center space-x-2">
              <Check size={16} className="text-brand-red" />
              <span className="text-brand-gray-light">Plná podpora</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-brand-gray-light">Omezená podpora</span>
            </div>
            <div className="flex items-center space-x-2">
              <X size={16} className="text-brand-gray-light" />
              <span className="text-brand-gray-light">Nepodporováno</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-6">
          <h3 className="font-unbounded font-bold text-white text-2xl uppercase" style={{lineHeight: '1.2'}}>
            Připraveni na <span className="text-brand-red">změnu</span>?
          </h3>
          <p className="text-brand-gray-light font-inter text-lg max-w-2xl mx-auto leading-relaxed">
            Promluvme si o tom, jak vám řešení na míru pomůže překonat omezení současných platforem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/kontakt" className="brand-button-primary">
              Rezervovat konzultaci
            </Link>
            <Link href="/portfolio" className="brand-button-secondary">
              NAŠE PORTFOLIO
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}














