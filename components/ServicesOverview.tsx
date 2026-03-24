import Link from 'next/link';
import { ArrowRight, MessageSquare, Settings, ShoppingCart } from 'lucide-react';

const services = [
  {
    icon: ShoppingCart,
    title: 'E-COMMERCE ŘEŠENÍ',
    subtitle: 'na míru',
    description:
      'Pokročilé B2B a B2C e-shopy s funkcemi jako firemní účty, více košíků, rychlý nákup a produktové varianty.',
    features: ['Multisklad & Multishop', 'B2B specifika', 'Pokročilé varianty', 'Rychlý nákup'],
    href: '/ecommerce',
  },
  {
    icon: Settings,
    title: 'SYSTÉMOVÉ',
    subtitle: 'integrace',
    description:
      'Propojení s ERP, CRM, účetními systémy, platebními branami a dopravci. Automatizace procesů.',
    features: ['API integrace', 'ERP propojení', 'Platební brány', 'Automatizace'],
    href: '/integrace',
  },
  {
    icon: MessageSquare,
    title: 'E-COMMERCE',
    subtitle: 'konzultace',
    description:
      'Odborné poradenství v oblasti e-commerce strategie, výběr správného řešení a optimalizace.',
    features: ['Strategické poradenství', 'Výběr technologií', 'Optimalizace procesů', 'Analýza konkurence'],
    href: '/#kontakt',
  },
];

export default function ServicesOverview() {
  return (
    <section className="brand-section bg-brand-black-light">
      <div className="brand-container">
        <div className="text-center space-y-6 mb-16">
          <h2 className="hero-text text-3xl md:text-5xl" style={{ lineHeight: '1.2' }}>
            NAŠE <span className="text-brand-red">SLUŽBY</span>
          </h2>
          <p className="text-xl text-brand-gray-light font-inter max-w-3xl mx-auto leading-relaxed">
            Komplexní řešení pro váš <span className="text-white font-semibold">e-commerce úspěch</span>.
            Od návrhu přes implementaci až po dlouhodobou podporu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;

            return (
              <Link
                key={service.href}
                href={service.href}
                className="brand-card-secondary rounded-lg group border border-transparent group-hover:border-white transition-all duration-300 cursor-pointer block"
              >
                <div className="space-y-6 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="brand-icon-container-primary">
                      <IconComponent size={20} className="text-primary-red" />
                    </div>
                    <div>
                      <h3 className="font-unbounded font-bold text-white text-xl uppercase" style={{ lineHeight: '1.2' }}>
                        {service.title}
                      </h3>
                      <p className="font-unbounded font-bold text-brand-red text-xl uppercase">{service.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-brand-gray-light font-inter leading-relaxed">{service.description}</p>

                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-brand-red rounded-full" />
                        <span className="text-sm text-brand-gray-light font-inter">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="inline-flex items-center space-x-2 text-brand-red group-hover:text-white font-inter font-semibold transition-colors duration-300">
                    <span>Zjistit více</span>
                    <ArrowRight size={16} className="group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
