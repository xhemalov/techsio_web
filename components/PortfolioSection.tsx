'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const featuredProject = {
  title: 'TechCorp B2B Platform',
  category: 'B2B E-commerce',
  description:
    'Komplexní B2B platforma s pokročilými funkcemi pro velkoobchod. Firemní účty, více košíků a automatizované objednávky.',
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  results: [
    { metric: 'Nárůst objednávek', value: '+150%' },
    { metric: 'Úspora času', value: '60%' },
    { metric: 'Automatizace', value: '85%' },
  ],
  technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
  href: '/portfolio/techcorp',
};

export default function PortfolioSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="brand-section bg-brand-black-light">
      <div className="brand-container">
        <div className="text-center space-y-6 mb-16">
          <h2 className="hero-text text-3xl md:text-5xl" style={{ lineHeight: '1.2' }}>
            NAŠE <span className="text-brand-red">ÚSPĚŠNÉ PROJEKTY</span>
          </h2>
          <p className="text-xl text-brand-gray-light font-inter max-w-3xl mx-auto leading-relaxed">
            Podívejte se na <span className="text-white font-semibold">reálné výsledky</span> našich klientů.
            Každý projekt je příběhem růstu a obchodního dopadu.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch transition-all duration-300 rounded-lg p-8 ${
            isHovered ? 'border border-white' : 'border border-transparent'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div>
            <Link href={featuredProject.href}>
              <div className="relative overflow-hidden rounded-lg h-full cursor-pointer group">
                <div className="h-full bg-brand-gray-dark rounded-lg overflow-hidden">
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    width={600}
                    height={400}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      isHovered ? 'scale-110' : ''
                    }`}
                  />
                </div>
              </div>
            </Link>
          </div>

          <div className="flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 bg-brand-red/20 text-brand-red text-sm font-inter font-medium rounded-full">
                {featuredProject.category}
              </span>
              <h3 className="font-unbounded font-bold text-white text-2xl md:text-3xl" style={{ lineHeight: '1.2' }}>
                {featuredProject.title}
              </h3>
              <p className="text-brand-gray-light font-inter text-lg leading-relaxed">
                {featuredProject.description}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {featuredProject.results.map((result) => (
                <div key={result.metric} className="text-left space-y-1">
                  <div className="flex items-center justify-start space-x-1">
                    <TrendingUp size={16} className="text-brand-red" />
                    <span className="font-unbounded font-bold text-brand-red text-xl">{result.value}</span>
                  </div>
                  <p className="text-brand-gray-light font-inter text-sm">{result.metric}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <p className="text-brand-gray-light font-inter text-sm uppercase tracking-wide">Technologie</p>
              <div className="flex flex-wrap gap-2">
                {featuredProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-brand-gray-dark text-brand-gray-light text-sm font-inter rounded-full border border-brand-gray-light/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href={featuredProject.href}
              className={`inline-flex items-center space-x-2 font-inter font-semibold transition-colors duration-300 group self-start ${
                isHovered ? 'text-white' : 'text-brand-red hover:text-white'
              }`}
            >
              <span>Zobrazit case study</span>
              <ArrowRight size={16} className="text-brand-red" />
            </Link>
          </div>
        </div>

        <div className="text-center mt-16 space-y-6">
          <h3 className="font-unbounded font-bold text-white text-2xl uppercase" style={{ lineHeight: '1.2' }}>
            Chcete podobné <span className="text-brand-red">výsledky</span>?
          </h3>
          <p className="text-brand-gray-light font-inter text-lg max-w-2xl mx-auto leading-relaxed">
            Každý projekt začíná rozhovorem. Probereme vaše cíle a navrhneme řešení, které obstojí i při růstu.
          </p>
          <Link href="/#kontakt" className="brand-button-primary">
            Rezervovat konzultaci
          </Link>
        </div>
      </div>
    </section>
  );
}
