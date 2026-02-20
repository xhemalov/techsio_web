'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const contactMethods = [
  {
    icon: Phone,
    title: 'Telefon',
    value: '+420 731 472 822',
    href: 'tel:+420731472822',
    description: 'Volejte v pracovní dny 9:00 - 17:00'
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'pavel.koudelka@naucme.it',
    href: 'mailto:pavel.koudelka@naucme.it',
    description: 'Odpovídáme do 24 hodin'
  },
  {
    icon: MapPin,
    title: 'Adresa',
    value: 'Školní 174, Český Těšín, Mosty, 735 62',
    href: '#',
    description: 'Osobní schůzky po domluvě'
  },
  {
    icon: Calendar,
    title: 'Konzultace',
    value: 'Rezervovat termín',
    href: '#contact-form',
    description: 'První konzultace zdarma'
  }
];

const services = [
  'E-commerce řešení na míru',
  'Systémové integrace',
  'E-commerce konzultace',
  'SEO & Reporting',
  'Technická podpora',
  'Jiné'
];

export default function KontaktPageContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    budget: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Děkujeme za vaši zprávu! Ozveme se vám do 24 hodin.');
  };

  return (
    <div className="min-h-screen bg-primary-black text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <h1 className="font-unbounded font-bold text-4xl md:text-6xl lg:text-7xl" style={{lineHeight: '1.2'}}>
              POJĎME SI{' '}
              <span className="text-primary-red">PROMLUVIT</span>
            </h1>
            <p className="font-inter text-lg sm:text-xl md:text-2xl text-light-gray max-w-4xl mx-auto leading-relaxed">
              Máte projekt na mysli? Potřebujete poradit s e-commerce strategií? 
              Kontaktujte nás a promluvme si o vašich cílech.
            </p>
            <div className="inline-flex items-center space-x-2 bg-primary-red/20 text-primary-red px-4 py-2 rounded-full text-sm font-medium">
              <Clock size={16} />
              <span>Odpovídáme do 24 hodin</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-unbounded font-bold text-3xl md:text-4xl mb-6" style={{lineHeight: '1.2'}}>
              ZPŮSOBY <span className="text-primary-red">KONTAKTU</span>
            </h2>
            <p className="text-xl text-light-gray max-w-3xl mx-auto">
              Vyberte si způsob komunikace, který vám vyhovuje
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div
                  key={index}
                  className="brand-card-secondary p-6 rounded-lg border border-transparent transition-colors duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="brand-icon-container-primary">
                      <IconComponent size={20} className="text-primary-red" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-unbounded font-bold text-white text-lg mb-2" style={{lineHeight: '1.2'}}>
                        {method.title}
                      </h3>
                      <span className="text-primary-red font-inter font-semibold hover:text-white transition-colors duration-200 block mb-2 break-words overflow-wrap-anywhere">
                        {method.value}
                      </span>
                      <p className="text-light-gray font-inter text-sm">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-unbounded font-bold text-3xl md:text-4xl mb-6" style={{lineHeight: '1.2'}}>
              NAPIŠTE NÁM <span className="text-primary-red">ZPRÁVU</span>
            </h2>
            <p className="text-xl text-light-gray max-w-3xl mx-auto">
              Vyplňte formulář a my se vám ozveme do 24 hodin
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-dark-gray p-8 rounded-lg space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white font-inter font-semibold mb-2">
                  Jméno a příjmení *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-primary-black border border-light-gray/20 rounded-lg text-white font-inter focus:border-primary-red focus:outline-none transition-colors duration-200"
                  placeholder="Vaše jméno"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white font-inter font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-primary-black border border-light-gray/20 rounded-lg text-white font-inter focus:border-primary-red focus:outline-none transition-colors duration-200"
                  placeholder="vas@email.cz"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-white font-inter font-semibold mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-primary-black border border-light-gray/20 rounded-lg text-white font-inter focus:border-primary-red focus:outline-none transition-colors duration-200"
                  placeholder="+420 731 472 822"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-white font-inter font-semibold mb-2">
                  Společnost
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-primary-black border border-light-gray/20 rounded-lg text-white font-inter focus:border-primary-red focus:outline-none transition-colors duration-200"
                  placeholder="Název společnosti"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="service" className="block text-white font-inter font-semibold mb-2">
                  Služba *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-primary-black border border-light-gray/20 rounded-lg text-white font-inter focus:border-primary-red focus:outline-none transition-colors duration-200"
                >
                  <option value="">Vyberte službu</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-white font-inter font-semibold mb-2">
                  Orientační rozpočet
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-primary-black border border-light-gray/20 rounded-lg text-white font-inter focus:border-primary-red focus:outline-none transition-colors duration-200"
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
              <label htmlFor="message" className="block text-white font-inter font-semibold mb-2">
                Zpráva *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-primary-black border border-light-gray/20 rounded-lg text-white font-inter focus:border-primary-red focus:outline-none transition-colors duration-200 resize-vertical"
                placeholder="Popište nám váš projekt, cíle a požadavky..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="brand-button-primary inline-flex items-center"
              >
                <span>Odeslat zprávu</span>
              </button>
              <p className="text-light-gray font-inter text-sm mt-4">
                Odesláním souhlasíte se zpracováním osobních údajů podle{' '}
                <Link href="/privacy" className="text-primary-red hover:text-white transition-colors duration-200">
                  zásad ochrany osobních údajů
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-unbounded font-bold text-3xl md:text-4xl mb-6" style={{lineHeight: '1.2'}}>
              ČASTO KLADENÉ <span className="text-primary-red">OTÁZKY</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-unbounded font-bold text-white text-lg mb-3" style={{lineHeight: '1.2'}}>
                  Jak dlouho trvá realizace projektu?
                </h3>
                <p className="text-light-gray font-inter leading-relaxed">
                  Závisí na složitosti projektu. Malý e-shop 6-8 týdnů, střední projekt 10-14 týdnů, 
                  velký komplexní systém 16-24 týdnů.
                </p>
              </div>
              <div>
                <h3 className="font-unbounded font-bold text-white text-lg mb-3" style={{lineHeight: '1.2'}}>
                  Poskytujete technickou podporu?
                </h3>
                <p className="text-light-gray font-inter leading-relaxed">
                  Ano, poskytujeme dlouhodobou technickou podporu, údržbu a další rozvoj funkcí 
                  podle vašich potřeb.
                </p>
              </div>
              <div>
                <h3 className="font-unbounded font-bold text-white text-lg mb-3" style={{lineHeight: '1.2'}}>
                  Můžeme si projekt rozdělit na etapy?
                </h3>
                <p className="text-light-gray font-inter leading-relaxed">
                  Určitě. Často doporučujeme postupnou realizaci po etapách, což umožňuje 
                  flexibilnější přístup a lepší kontrolu rozpočtu.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-unbounded font-bold text-white text-lg mb-3" style={{lineHeight: '1.2'}}>
                  Jaké technologie používáte?
                </h3>
                <p className="text-light-gray font-inter leading-relaxed">
                  Specializujeme se na moderní technologie jako Next.js, React, Node.js, 
                  PostgreSQL a cloud řešení pro maximální výkon a škálovatelnost.
                </p>
              </div>
              <div>
                <h3 className="font-unbounded font-bold text-white text-lg mb-3" style={{lineHeight: '1.2'}}>
                  Poskytujete SEO optimalizaci?
                </h3>
                <p className="text-light-gray font-inter leading-relaxed">
                  Ano, SEO je součástí každého našeho projektu. Navíc nabízíme specializované 
                  SEO služby a měsíční reporting.
                </p>
              </div>
              <div>
                <h3 className="font-unbounded font-bold text-white text-lg mb-3" style={{lineHeight: '1.2'}}>
                  Je první konzultace skutečně zdarma?
                </h3>
                <p className="text-light-gray font-inter leading-relaxed">
                  Ano, první konzultace je vždy zdarma a bez závazků. Trvá cca 60 minut 
                  a probereme váš projekt do detailu.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/faq" className="text-primary-red hover:text-white font-inter font-semibold inline-flex items-center transition-colors duration-200">
              <span>Zobrazit všechny otázky</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-unbounded font-bold text-3xl md:text-4xl mb-6" style={{lineHeight: '1.2'}}>
            PŘIPRAVENI ZAČÍT{' '}
            <span className="text-primary-red">VÁŠ PROJEKT</span>?
          </h2>
          <p className="text-xl text-light-gray mb-8 leading-relaxed">
            Neváhejte nás kontaktovat. Rádi si s vámi promluvíme o vašich cílech a najdeme nejlepší řešení.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="tel:+420731472822"
              className="brand-button-primary inline-flex items-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              <span>Zavolat nyní</span>
            </a>
            <a 
              href="mailto:pavel.koudelka@naucme.it"
              className="border border-light-gray text-light-gray hover:text-white hover:border-white px-8 py-4 rounded-lg font-unbounded font-semibold uppercase transition-colors duration-200 inline-flex items-center"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              <span>Napsat email</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}















