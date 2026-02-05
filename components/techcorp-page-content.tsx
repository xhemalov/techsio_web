


"use client";

import Link from 'next/link';
import { ArrowLeft, TrendingUp, CheckCircle } from 'lucide-react';

export default function TechCorpPageContent() {
  return (
    <div className="min-h-screen bg-black text-white">
      
      <main className="pt-20">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <Link href="/portfolio" className="inline-flex items-center text-brand-red hover:text-white transition-colors mb-8">
              <ArrowLeft size={20} className="mr-2" />
              Zpět na portfolio
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 bg-brand-red/20 text-brand-red text-sm font-inter font-medium rounded-full mb-4">
                  B2B E-commerce
                </span>
                <h1 className="font-unbounded font-bold text-4xl md:text-6xl lg:text-7xl mb-6" style={{lineHeight: '1.2'}}>
                  TECHCORP{' '}
                  <span className="text-primary-red">B2B PLATFORM</span>
                </h1>
                <p className="font-inter text-lg sm:text-xl md:text-2xl text-light-gray mb-8 leading-relaxed">
                  Komplexní B2B platforma s pokročilými funkcemi pro velkoobchod. 
                  Firemní účty, více košíků a automatizované objednávky pro efektivní 
                  správu velkých objemů.
                </p>
                
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      <TrendingUp size={20} className="text-brand-red" />
                      <span className="font-bold text-brand-red text-2xl">+150%</span>
                    </div>
                    <p className="text-gray-400 text-sm">Nárůst objednávek</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      <TrendingUp size={20} className="text-brand-red" />
                      <span className="font-bold text-brand-red text-2xl">60%</span>
                    </div>
                    <p className="text-gray-400 text-sm">Úspora času</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      <TrendingUp size={20} className="text-brand-red" />
                      <span className="font-bold text-brand-red text-2xl">85%</span>
                    </div>
                    <p className="text-gray-400 text-sm">Automatizace</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" 
                  alt="TechCorp B2B Platform"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Challenge Section */}
        <div className="bg-gray-900 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Výzva</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                TechCorp potřebovala modernizovat svůj B2B prodejní proces. Stávající řešení 
                neumožňovalo efektivní správu firemních účtů, individuálních ceníků a 
                komplexních objednávek s více položkami.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Hlavním problémem byla časově náročná administrace objednávek a nemožnost 
                automatizace opakujících se procesů, což vedlo k chybám a zpoždění.
              </p>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Řešení</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={24} className="text-brand-red mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Firemní účty</h3>
                      <p className="text-gray-300">Hierarchická struktura účtů s individuálními ceníky a schvalovacími procesy.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={24} className="text-brand-red mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Více košíků</h3>
                      <p className="text-gray-300">Možnost vytváření více košíků pro různé projekty a oddělení.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={24} className="text-brand-red mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Rychlý nákup</h3>
                      <p className="text-gray-300">Optimalizované rozhraní pro rychlé objednávání velkých objemů.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={24} className="text-brand-red mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Automatizace</h3>
                      <p className="text-gray-300">Automatické generování objednávek na základě přednastavených pravidel.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={24} className="text-brand-red mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Integrace ERP</h3>
                      <p className="text-gray-300">Propojení s interním ERP systémem pro synchronizaci dat.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={24} className="text-brand-red mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Reporting</h3>
                      <p className="text-gray-300">Pokročilé reporty pro analýzu prodeje a optimalizaci procesů.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Použité technologie</h3>
                <div className="flex flex-wrap gap-3">
                  {['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-gray-900 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Výsledky</h2>
              <p className="text-lg text-gray-300 mb-12 leading-relaxed">
                Implementace nové B2B platformy přinesla TechCorp významné zlepšení 
                v efektivitě prodejních procesů a spokojenosti zákazníků.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-brand-red mb-2">+150%</div>
                  <div className="text-gray-300">Nárůst počtu objednávek</div>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-brand-red mb-2">60%</div>
                  <div className="text-gray-300">Úspora času při zpracování</div>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-brand-red mb-2">85%</div>
                  <div className="text-gray-300">Automatizace procesů</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Chcete podobné <span className="text-brand-red">výsledky</span>?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Promluvme si o vašem B2B projektu a najděme nejlepší řešení pro váš byznys.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/kontakt" className="bg-brand-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-unbounded font-semibold uppercase transition-colors">
                  Začít náš projekt
                </Link>
                <Link href="/portfolio" className="border border-gray-600 hover:border-white text-white px-8 py-3 rounded-lg font-unbounded font-semibold uppercase transition-colors">
                  Další projekty
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}


