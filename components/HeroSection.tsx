import Button from './Button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="font-unbounded font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 animate-fade-up" style={{fontKerning: 'normal', lineHeight: '1.2'}}>
            E-SHOP PODLE VAŠICH{' '}
            <span className="text-primary-red">PRAVIDEL</span>
            <br />
            NE PODLE OMEZENÍ{' '}
            <span className="text-primary-red">PLATFORMY</span>
          </h1>
          
          <p className="font-inter text-lg sm:text-xl md:text-2xl text-light-gray max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-up" style={{animationDelay: '0.2s'}}>
            Vytváříme robustní e-commerce řešení na míru pro střední a velké firmy. 
            Bez limitů, s plnou kontrolou a nekonečnými možnostmi integrace.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-up" style={{animationDelay: '0.4s'}}>
            <Link href="/sluzby/konzultace">
              <Button size="lg" className="min-w-[280px]">
                <span className="flex items-center">
                  REZERVOVAT KONZULTACI
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Button>
            </Link>
            
            <Link href="/portfolio">
              <Button variant="secondary" size="lg" className="min-w-[200px]">
                NAŠE PORTFOLIO
              </Button>
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-up" style={{animationDelay: '0.6s'}}>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-unbounded font-bold text-primary-red mb-2">50+</div>
              <div className="text-light-gray font-inter">ÚSPĚŠNÝCH PROJEKTŮ</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-unbounded font-bold text-primary-red mb-2">5+</div>
              <div className="text-light-gray font-inter">LET ZKUŠENOSTÍ</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-unbounded font-bold text-primary-red mb-2">99%</div>
              <div className="text-light-gray font-inter">SPOKOJENOST KLIENTŮ</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

