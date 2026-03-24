'use client';

import { Calendar, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

const contactMethods = [
  {
    icon: Phone,
    title: 'Telefon',
    value: '+420 731 472 822',
    href: 'tel:+420731472822',
    description: 'Volejte v pracovní dny 9:00 - 17:00',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'pavel.koudelka@naucme.it',
    href: 'mailto:pavel.koudelka@naucme.it',
    description: 'Odpovídáme do 24 hodin',
  },
  {
    icon: MapPin,
    title: 'Adresa',
    value: 'Školní 174, Český Těšín, Mosty, 735 62',
    href: '',
    description: 'Osobní schůzky po domluvě',
  },
  {
    icon: Calendar,
    title: 'Konzultace',
    value: 'Rezervovat termín',
    href: '#contact-form',
    description: 'První konzultace zdarma',
  },
];

const services = [
  'E-commerce řešení na míru',
  'Systémové integrace',
  'E-commerce konzultace',
  'SEO & Reporting',
  'Technická podpora',
  'Jiné',
];

type KontaktPageContentProps = {
  embedded?: boolean;
};

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  budget: string;
};

const initialFormState: ContactFormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
  budget: '',
};

export default function KontaktPageContent({ embedded = false }: KontaktPageContentProps) {
  const [formData, setFormData] = useState<ContactFormState>(initialFormState);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    alert('Děkujeme za vaši zprávu. Ozveme se vám do 24 hodin.');
  };

  return (
    <section
      id="kontakt"
      className={`${embedded ? 'scroll-mt-16' : 'min-h-screen'} bg-primary-black px-4 py-20 text-white sm:px-6 lg:px-8`}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center space-x-2 rounded-full bg-primary-red/20 px-4 py-2 text-sm font-medium text-primary-red">
            <Clock size={16} />
            <span>Odpovídáme do 24 hodin</span>
          </div>
          <h2 className="font-unbounded text-4xl font-bold md:text-5xl lg:text-6xl" style={{ lineHeight: '1.2' }}>
            POJĎME SI <span className="text-primary-red">PROMLUVIT</span>
          </h2>
          <p className="mx-auto max-w-4xl font-inter text-lg leading-relaxed text-light-gray sm:text-xl md:text-2xl">
            Máte projekt na mysli? Potřebujete poradit s e-commerce strategií nebo integracemi?
            Ozvěte se a probereme další krok.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="font-unbounded text-2xl font-bold text-white md:text-3xl" style={{ lineHeight: '1.2' }}>
                Rychlé cesty ke kontaktu
              </h3>
              <p className="font-inter text-lg leading-relaxed text-light-gray">
                Pokud nechcete hned vyplňovat formulář, zavolejte nebo napište. Konzultaci si můžete rezervovat i přímo
                přes tlačítko níže.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-1">
              {contactMethods.map((method) => {
                const IconComponent = method.icon;
                const cardClassName =
                  'brand-card-secondary block rounded-lg border border-dark-gray p-6 transition-colors duration-300 hover:border-white';

                const content = (
                  <>
                    <div className="brand-icon-container-primary">
                      <IconComponent size={20} className="text-primary-red" />
                    </div>
                    <div className="min-w-0 flex-1 space-y-2">
                      <h4 className="font-unbounded text-lg font-bold text-white" style={{ lineHeight: '1.2' }}>
                        {method.title}
                      </h4>
                      <div className="break-words font-inter font-semibold text-primary-red">{method.value}</div>
                      <p className="font-inter text-sm text-light-gray">{method.description}</p>
                    </div>
                  </>
                );

                if (method.href) {
                  return (
                    <a key={method.title} href={method.href} className={cardClassName}>
                      <div className="flex items-start gap-4">{content}</div>
                    </a>
                  );
                }

                return (
                  <div key={method.title} className={cardClassName}>
                    <div className="flex items-start gap-4">{content}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div id="contact-form" className="rounded-lg border border-dark-gray bg-dark-gray p-8">
            <div className="mb-10 space-y-3">
              <h3 className="font-unbounded text-2xl font-bold text-white md:text-3xl" style={{ lineHeight: '1.2' }}>
                Napište nám zprávu
              </h3>
              <p className="font-inter text-lg leading-relaxed text-light-gray">
                Vyplňte základní informace a ozveme se s návrhem dalšího postupu.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block font-inter font-semibold text-white">
                    Jméno a příjmení *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-light-gray/20 bg-primary-black px-4 py-3 font-inter text-white transition-colors duration-200 focus:border-primary-red focus:outline-none"
                    placeholder="Vaše jméno"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block font-inter font-semibold text-white">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-light-gray/20 bg-primary-black px-4 py-3 font-inter text-white transition-colors duration-200 focus:border-primary-red focus:outline-none"
                    placeholder="vas@email.cz"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-2 block font-inter font-semibold text-white">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-light-gray/20 bg-primary-black px-4 py-3 font-inter text-white transition-colors duration-200 focus:border-primary-red focus:outline-none"
                    placeholder="+420 731 472 822"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="mb-2 block font-inter font-semibold text-white">
                    Společnost
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-light-gray/20 bg-primary-black px-4 py-3 font-inter text-white transition-colors duration-200 focus:border-primary-red focus:outline-none"
                    placeholder="Název společnosti"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="service" className="mb-2 block font-inter font-semibold text-white">
                    Služba *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-light-gray/20 bg-primary-black px-4 py-3 font-inter text-white transition-colors duration-200 focus:border-primary-red focus:outline-none"
                  >
                    <option value="">Vyberte službu</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="mb-2 block font-inter font-semibold text-white">
                    Orientační rozpočet
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-light-gray/20 bg-primary-black px-4 py-3 font-inter text-white transition-colors duration-200 focus:border-primary-red focus:outline-none"
                  >
                    <option value="">Vyberte rozpočet</option>
                    <option value="do-100k">Do 100 000 Kč</option>
                    <option value="100k-300k">100 000 - 300 000 Kč</option>
                    <option value="300k-500k">300 000 - 500 000 Kč</option>
                    <option value="500k-1m">500 000 - 1 000 000 Kč</option>
                    <option value="nad-1m">Nad 1 000 000 Kč</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block font-inter font-semibold text-white">
                  Zpráva *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full resize-y rounded-lg border border-light-gray/20 bg-primary-black px-4 py-3 font-inter text-white transition-colors duration-200 focus:border-primary-red focus:outline-none"
                  placeholder="Popište nám váš projekt, cíle a požadavky..."
                />
              </div>

              <div className="text-center">
                <button type="submit" className="brand-button-primary inline-flex items-center">
                  Odeslat zprávu
                </button>
                <p className="mt-4 font-inter text-sm text-light-gray">
                  Odesláním souhlasíte se zpracováním osobních údajů.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
