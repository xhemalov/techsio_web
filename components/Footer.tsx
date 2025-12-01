import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const services = [
  { name: 'E-commerce řešení', href: '/sluzby/ecommerce' },
  { name: 'Systémové integrace', href: '/sluzby/integrace' },
  { name: 'Konzultace', href: '/sluzby/konzultace' },
  { name: 'SEO & Reporting', href: '/sluzby/seo' },
];

const company = [
  { name: 'O nás', href: '/o-nas' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Proces spolupráce', href: '/proces' },
  { name: 'FAQ', href: '/faq' },
];

export default function Footer() {
  return (
    <footer className="bg-primary-black border-t border-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <img 
                src="https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/fmiyg7xfgenllfw0sv5aj2mr/rqshjrhuz6joh86j6qbpervr/d-OP_6Gvjq7yBPlgDv8Lm/logo-techsio.png"
                alt="TechSio Logo"
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-light-gray font-inter leading-relaxed">
              Specializujeme se na tvorbu <span className="text-primary-red">e-shopů a webových stránek na míru</span>.
              Flexibilní řešení bez omezení platformy pro váš úspěšný byznys.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-light-gray hover:text-primary-red transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-light-gray hover:text-primary-red transition-colors duration-300">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-unbounded font-bold text-white text-lg uppercase" style={{lineHeight: '1.2'}}>
              Služby
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-light-gray hover:text-primary-red font-inter transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="font-unbounded font-bold text-white text-lg uppercase" style={{lineHeight: '1.2'}}>
              Společnost
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-light-gray hover:text-primary-red font-inter transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="font-unbounded font-bold text-white text-lg uppercase" style={{lineHeight: '1.2'}}>
              Kontakt
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-red" />
                <a
                  href="mailto:info@techsio.cz"
                  className="text-light-gray hover:text-primary-red font-inter transition-colors duration-300"
                >
                  info@techsio.cz
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-red" />
                <a
                  href="tel:+420123456789"
                  className="text-light-gray hover:text-primary-red font-inter transition-colors duration-300"
                >
                  +420 123 456 789
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary-red mt-1" />
                <span className="text-light-gray font-inter">
                  Praha, Česká republika
                </span>
              </div>
            </div>
            <Link
              href="/kontakt"
              className="bg-primary-red hover:bg-secondary-red text-white px-6 py-2 rounded-lg font-unbounded font-semibold uppercase transition-colors duration-200 inline-block text-sm"
            >
              Kontaktujte nás
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-gray mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light-gray font-inter text-sm">
            © 2025 Techsio. Všechna práva vyhrazena.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-light-gray hover:text-primary-red font-inter text-sm transition-colors duration-300">
              Ochrana osobních údajů
            </Link>
            <Link href="/terms" className="text-light-gray hover:text-primary-red font-inter text-sm transition-colors duration-300">
              Obchodní podmínky
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}








