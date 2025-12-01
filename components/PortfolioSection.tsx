
'use client';

import Link from 'next/link';
import { ArrowRight, ExternalLink, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const portfolioProjects = [
  {
    id: 1,
    title: 'TechCorp B2B Platform',
    category: 'B2B E-commerce',
    description: 'Komplexní B2B platforma s pokročilými funkcemi pro velkoobchod. Firemní účty, více košíků a automatizované objednávky.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    results: [
      { metric: 'Nárůst objednávek', value: '+150%' },
      { metric: 'Úspora času', value: '60%' },
      { metric: 'Automatizace', value: '85%' }
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
    href: '/portfolio/techcorp'
  },
  {
    id: 2,
    title: 'GlobalTrade Marketplace',
    category: 'Marketplace',
    description: 'Mezinárodní marketplace s multi-vendor funkcemi, pokročilým vyhledáváním a integrací s dopravci.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    results: [
      { metric: 'Aktivní prodejci', value: '500+' },
      { metric: 'Denní objednávky', value: '2000+' },
      { metric: 'Konverzní poměr', value: '4.2%' }
    ],
    technologies: ['React', 'Express.js', 'MongoDB', 'Elasticsearch'],
    href: '/portfolio/globaltrade'
  },
  {
    id: 3,
    title: 'SmartBusiness ERP Integration',
    category: 'Systémová integrace',
    description: 'Propojení e-shopu s ERP systémem, automatická synchronizace skladů a účetnictví.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop',
    results: [
      { metric: 'Chybovost', value: '-95%' },
      { metric: 'Rychlost zpracování', value: '+300%' },
      { metric: 'Manuální práce', value: '-80%' }
    ],
    technologies: ['API Gateway', 'Microservices', 'Docker', 'Kubernetes'],
    href: '/portfolio/smartbusiness'
  }
];

export default function PortfolioSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="brand-section bg-brand-black-light">
      <div className="brand-container">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="hero-text text-3xl md:text-5xl" style={{lineHeight: '1.2'}}>
            NAŠE <span className="text-brand-red">ÚSPĚŠNÉ PROJEKTY</span>
          </h2>
          <p className="text-xl text-brand-gray-light font-inter max-w-3xl mx-auto leading-relaxed">
            Podívejte se na <span className="text-white font-semibold">reálné výsledky</span> našich klientů. 
            Každý projekt je příběhem úspěchu a růstu.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="space-y-12">
          {portfolioProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''} transition-all duration-300 rounded-lg p-8 ${hoveredProject === project.id ? 'border border-white' : 'border border-transparent'}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <Link href={project.href}>
                  <div className="relative overflow-hidden rounded-lg h-full cursor-pointer group">
                    <div className="h-full bg-brand-gray-dark rounded-lg overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className={`w-full h-full object-cover transition-transform duration-500 ${hoveredProject === project.id ? 'scale-110' : ''}`}
                      />
                    </div>
                  </div>
                </Link>
              </div>

              {/* Project Content */}
              <div className={`flex flex-col justify-between space-y-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="space-y-6">
                  <span className="inline-block px-3 py-1 bg-brand-red/20 text-brand-red text-sm font-inter font-medium rounded-full">
                    {project.category}
                  </span>
                  <h3 className="font-unbounded font-bold text-white text-2xl md:text-3xl" style={{lineHeight: '1.2'}}>
                    {project.title}
                  </h3>
                  <p className="text-brand-gray-light font-inter text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-6">
                  {project.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="text-left space-y-1">
                      <div className="flex items-center justify-start space-x-1">
                        <TrendingUp size={16} className="text-brand-red" />
                        <span className="font-unbounded font-bold text-brand-red text-xl">
                          {result.value}
                        </span>
                      </div>
                      <p className="text-brand-gray-light font-inter text-sm">
                        {result.metric}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <p className="text-brand-gray-light font-inter text-sm uppercase tracking-wide">
                    Technologie
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-brand-gray-dark text-brand-gray-light text-sm font-inter rounded-full border border-brand-gray-light/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link 
                  href={project.href}
                  className={`inline-flex items-center space-x-2 font-inter font-semibold transition-colors duration-300 group self-start ${hoveredProject === project.id ? 'text-white' : 'text-brand-red hover:text-white'}`}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <span>Zobrazit case study</span>
                  <ArrowRight size={16} className="text-brand-red" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-6">
          <h3 className="font-unbounded font-bold text-white text-2xl uppercase" style={{lineHeight: '1.2'}}>
            Chcete podobné <span className="text-brand-red">výsledky</span>?
          </h3>
          <p className="text-brand-gray-light font-inter text-lg max-w-2xl mx-auto">
            Každý projekt začíná rozhovorem. Promluvme si o vašich cílech a najděme nejlepší řešení.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/kontakt" className="brand-button-primary">
              Začít náš projekt
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






















