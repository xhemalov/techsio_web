'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const portfolioProjects = [
  {
    id: 1,
    title: 'TechCorp B2B Platform',
    category: 'B2B E-commerce',
    description:
      'Komplexní B2B platforma s pokročilými funkcemi pro velkoobchod. Firemní účty, více košíků a automatizované objednávky.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    results: [
      { metric: 'Nárůst objednávek', value: '+150%' },
      { metric: 'Úspora času', value: '60%' },
      { metric: 'Automatizace', value: '85%' },
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
    href: '/portfolio/techcorp',
    featured: true,
  },
];

export default function PortfolioPageContent() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-primary-black text-white">
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <h1 className="font-unbounded font-bold text-4xl md:text-6xl lg:text-7xl" style={{ lineHeight: '1.2' }}>
              NAŠE <span className="text-primary-red">ÚSPĚŠNÉ PROJEKTY</span>
            </h1>
            <p className="font-inter text-lg sm:text-xl md:text-2xl text-light-gray max-w-4xl mx-auto leading-relaxed">
              Podívejte se na reálné výsledky našich klientů. Každý projekt je příběhem úspěchu, růstu a digitální transformace.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-unbounded font-bold text-3xl md:text-4xl lg:text-5xl mb-4" style={{ lineHeight: '1.2' }}>
              CELKOVÉ <span className="text-primary-red">VÝSLEDKY</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-unbounded font-bold text-4xl md:text-5xl text-primary-red mb-2">50+</div>
              <p className="text-light-gray font-inter">Dokončených projektů</p>
            </div>
            <div className="text-center">
              <div className="font-unbounded font-bold text-4xl md:text-5xl text-primary-red mb-2">99%</div>
              <p className="text-light-gray font-inter">Spokojenost klientů</p>
            </div>
            <div className="text-center">
              <div className="font-unbounded font-bold text-4xl md:text-5xl text-primary-red mb-2">150%</div>
              <p className="text-light-gray font-inter">Průměrný nárůst tržeb</p>
            </div>
            <div className="text-center">
              <div className="font-unbounded font-bold text-4xl md:text-5xl text-primary-red mb-2">24/7</div>
              <p className="text-light-gray font-inter">Technická podpora</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {portfolioProjects.map((project) => (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch transition-all duration-300 rounded-lg p-8 ${
                  hoveredProject === project.id ? 'brand-card-tertiary border border-primary-red' : 'border border-transparent'
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div>
                  <Link href={project.href}>
                    <div className="relative overflow-hidden rounded-lg h-full cursor-pointer group">
                      <div className="h-full brand-card-secondary rounded-lg overflow-hidden min-h-[400px]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={800}
                          height={600}
                          className={`w-full h-full object-cover transition-transform duration-500 ${
                            hoveredProject === project.id ? 'scale-110' : ''
                          }`}
                        />
                        <div
                          className={`absolute inset-0 bg-primary-black/40 transition-colors duration-300 ${
                            hoveredProject === project.id ? 'bg-primary-black/20' : ''
                          }`}
                        >
                          <div className="absolute top-4 right-4">
                            <ExternalLink size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          {project.featured ? (
                            <div className="absolute top-4 left-4">
                              <span className="bg-primary-red text-white px-3 py-1 rounded-full text-sm font-inter font-medium">
                                Doporučený projekt
                              </span>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="flex flex-col justify-between space-y-8">
                  <div className="space-y-6">
                    <span className="inline-block px-3 py-1 bg-primary-red/20 text-primary-red text-sm font-inter font-medium rounded-full">
                      {project.category}
                    </span>
                    <h3 className="font-unbounded font-bold text-white text-2xl md:text-3xl" style={{ lineHeight: '1.2' }}>
                      {project.title}
                    </h3>
                    <p className="text-light-gray font-inter text-lg leading-relaxed">{project.description}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    {project.results.map((result) => (
                      <div key={result.metric} className="text-left space-y-1">
                        <div className="flex items-center justify-start space-x-1">
                          <TrendingUp size={16} className="text-primary-red" />
                          <span className="font-unbounded font-bold text-primary-red text-xl">{result.value}</span>
                        </div>
                        <p className="text-light-gray font-inter text-sm">{result.metric}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <p className="text-light-gray font-inter text-sm uppercase tracking-wide">Technologie</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 brand-card-secondary text-light-gray text-sm font-inter rounded-full border border-light-gray/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={project.href}
                    className={`inline-flex items-center space-x-2 font-inter font-semibold transition-colors duration-300 group self-start ${
                      hoveredProject === project.id ? 'text-white' : 'text-primary-red hover:text-white'
                    }`}
                  >
                    <span>Zobrazit case study</span>
                    <ArrowRight size={16} className="transition-colors duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-unbounded font-bold text-3xl md:text-4xl mb-6" style={{ lineHeight: '1.2' }}>
            CHCETE PODOBNÉ <span className="text-primary-red">VÝSLEDKY</span>?
          </h2>
          <p className="text-xl text-light-gray mb-8 leading-relaxed">
            Každý projekt začíná rozhovorem. Promluvme si o vašich cílech a najděme nejlepší řešení.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/#kontakt" className="brand-button-primary inline-flex items-center">
              <span>Začít náš projekt</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/#kontakt"
              className="border border-light-gray text-light-gray hover:text-white hover:border-white px-8 py-4 rounded-lg font-unbounded font-semibold uppercase transition-colors duration-200"
            >
              Konzultace zdarma
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
