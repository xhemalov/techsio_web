'use client';

import Link from 'next/link';
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const faqCategories = [
  {
    title: 'Obecné otázky',
    questions: [
      {
        question: 'Jak dlouho trvá realizace e-shopu?',
        answer: 'Doba realizace závisí na složitosti projektu. Malý e-shop s základními funkcemi trvá 6-8 týdnů, střední projekt s integrací 10-14 týdnů a velký komplexní systém 16-24 týdnů. Vždy vám poskytneme realistický časový odhad po analýze vašich požadavků.'
      },
      {
        question: 'Kolik stojí vytvoření e-shopu na míru?',
        answer: 'Cena se odvíjí od rozsahu funkcí a složitosti projektu. Základní e-shop začíná na 100 000 Kč, střední projekty se pohybují kolem 300-500 000 Kč a komplexní B2B systémy mohou stát i více než milion korun. První konzultace je zdarma a poskytneme vám detailní cenovou kalkulaci.'
      },
      {
        question: 'Poskytujete technickou podporu po spuštění?',
        answer: 'Ano, poskytujeme dlouhodobou technickou podporu, údržbu a další rozvoj funkcí. Nabízíme různé úrovně podpory od základní po 24/7 monitoring pro kritické systémy. Součástí je také pravidelné zálohování, bezpečnostní aktualizace a optimalizace výkonu.'
      },
      {
        question: 'Můžeme projekt rozdělit na etapy?',
        answer: 'Určitě doporučujeme postupnou realizaci po etapách. Umožňuje to lepší kontrolu rozpočtu, rychlejší uvedení základních funkcí do provozu a flexibilnější přístup k dalšímu rozvoju podle skutečných potřeb a zpětné vazby uživatelů.'
      }
    ]
  },
  {
    title: 'Technické otázky',
    questions: [
      {
        question: 'Jaké technologie používáte?',
        answer: 'Specializujeme se na moderní technologie: Next.js a React pro frontend, Node.js pro backend, PostgreSQL nebo MongoDB pro databáze, Redis pro cache a AWS/Vercel pro hosting. Tyto technologie zajišťují vysoký výkon, škálovatelnost a bezpečnost.'
      },
      {
        question: 'Můžete integrovat náš e-shop s ERP systémem?',
        answer: 'Ano, systémové integrace jsou naší specialitou. Máme zkušenosti s propojením SAP, Microsoft Dynamics, Pohoda, Money a dalších ERP systémů. Zajistíme automatickou synchronizaci skladů, objednávek, zákazníků a cenových politik.'
      },
      {
        question: 'Je možné migrovat z jiné platformy?',
        answer: 'Ano, pomůžeme vám s migrací z jakékoliv platformy (Shoptet, PrestaShop, WooCommerce, Magento atd.). Zajistíme bezpečný přenos všech dat včetně produktů, zákazníků, objednávek a zachováme SEO hodnotu vašeho webu.'
      },
      {
        question: 'Jak řešíte bezpečnost a GDPR?',
        answer: 'Bezpečnost je naší prioritou. Implementujeme SSL certifikáty, šifrování dat, pravidelné bezpečnostní audity a zálohy. GDPR compliance zajišťujeme správou souhlasů, anonymizací dat a implementací práva na výmaz a přenositelnost dat.'
      }
    ]
  },
  {
    title: 'Proces spolupráce',
    questions: [
      {
        question: 'Jak probíhá první konzultace?',
        answer: 'První konzultace trvá cca 60 minut a je zdarma. Probereme vaše cíle, požadavky, současnou situaci a konkurenci. Následně připravíme detailní návrh řešení, časový harmonogram a cenovou kalkulaci. Konzultace může probíhat osobně, online nebo telefonicky.'
      },
      {
        question: 'Jak často dostáváme reporty o pokroku?',
        answer: 'Poskytujeme týdenní reporty o pokroku projektu včetně dokončených úkolů, aktuálního stavu a plánu na další týden. Máte také přístup k testovacímu prostředí, kde můžete průběžně sledovat vývoj a poskytovat zpětnou vazbu.'
      },
      {
        question: 'Můžeme ovlivňovat vývoj během realizace?',
        answer: 'Ano, flexibilita je součástí našeho přístupu. Menší změny a úpravy jsou běžnou součástí procesu. Větší změny probereme a oceníme dodatečně. Vždy se snažíme najít nejlepší řešení pro vaše potřeby.'
      },
      {
        question: 'Co když nejsme spokojeni s výsledkem?',
        answer: 'Kvalita je naší prioritou. Pokud nejste spokojeni, provedeme potřebné úpravy zdarma. Máme 99% spokojenost klientů a většina našich projektů vede k dlouhodobé spolupráci. Poskytujeme také záruku na naši práci.'
      }
    ]
  },
  {
    title: 'SEO a Marketing',
    questions: [
      {
        question: 'Je SEO součástí každého projektu?',
        answer: 'Ano, základní SEO optimalizace je součástí každého našeho projektu. Zahrnuje technické SEO, optimalizaci rychlosti, strukturovaná data a SEO-friendly URL. Nabízíme také pokročilé SEO služby a měsíční reporting jako samostatnou službu.'
      },
      {
        question: 'Pomůžete nám s obsahem a copywritingem?',
        answer: 'Ano, můžeme pomoci s tvorbou obsahu, popisů produktů a copywritingem optimalizovaným pro SEO. Spolupracujeme s profesionálními copywritery a obsahovými specialisty, kteří rozumí e-commerce prostředí.'
      },
      {
        question: 'Poskytujete školení pro administrátory?',
        answer: 'Samozřejmě. Po spuštění projektu poskytujeme kompletní školení pro vaše administrátory. Zahrnuje správu produktů, objednávek, zákazníků a všech funkcí systému. Poskytujeme také písemnou dokumentaci a video návody.'
      }
    ]
  }
];

export default function FaqPageContent() {
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions(prev => 
      prev.includes(questionId) 
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  return (
    <div className="min-h-screen bg-primary-black text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary-red/20 text-primary-red px-4 py-2 rounded-full text-sm font-medium">
              <HelpCircle size={16} />
              <span>ČASTO KLADENÉ OTÁZKY</span>
            </div>
            <h1 className="font-unbounded font-bold text-4xl md:text-6xl lg:text-7xl" style={{lineHeight: '1.2'}}>
              MÁTE{' '}
              <span className="text-primary-red">OTÁZKY</span>?
            </h1>
            <p className="font-inter text-lg sm:text-xl md:text-2xl text-light-gray max-w-4xl mx-auto leading-relaxed mb-8">
              Najděte odpovědi na nejčastější otázky ohledně našich služeb, procesu spolupráce 
              a e-commerce řešení. Pokud nenajdete odpověď, neváhejte nás kontaktovat.
            </p>
            <Link href="/kontakt" className="bg-primary-red hover:bg-secondary-red text-white px-8 py-4 rounded-lg font-unbounded font-semibold uppercase transition-colors duration-200 inline-flex items-center">
              <span>Zeptat se nás</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <h2 className="font-unbounded font-bold text-2xl md:text-3xl text-primary-red" style={{lineHeight: '1.2'}}>
                  {category.title}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const questionId = `${categoryIndex}-${questionIndex}`;
                    const isOpen = openQuestions.includes(questionId);
                    
                    return (
                      <div key={questionIndex} className="bg-dark-gray rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleQuestion(questionId)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-primary-black/50 transition-colors duration-200"
                        >
                          <h3 className="font-unbounded font-bold text-white text-lg pr-4" style={{lineHeight: '1.2'}}>
                            {faq.question}
                          </h3>
                          {isOpen ? (
                            <ChevronUp size={24} className="text-primary-red flex-shrink-0" />
                          ) : (
                            <ChevronDown size={24} className="text-primary-red flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <div className="border-t border-light-gray/20 pt-4">
                              <p className="text-light-gray font-inter leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-unbounded font-bold text-3xl md:text-4xl mb-6" style={{lineHeight: '1.2'}}>
              STÁLE MÁTE <span className="text-primary-red">OTÁZKY</span>?
            </h2>
            <p className="text-xl text-light-gray max-w-3xl mx-auto">
              Neváhejte nás kontaktovat jakýmkoliv způsobem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary-black p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle size={24} className="text-white" />
              </div>
              <h3 className="font-unbounded font-bold text-white text-xl mb-4" style={{lineHeight: '1.2'}}>
                Konzultace zdarma
              </h3>
              <p className="text-light-gray font-inter mb-6 leading-relaxed">
                60minutová konzultace bez závazků, kde probereme váš projekt do detailu.
              </p>
              <Link href="/kontakt" className="text-primary-red hover:text-white font-inter font-semibold inline-flex items-center transition-colors duration-200">
                <span>Rezervovat termín</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-primary-black p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight size={24} className="text-white" />
              </div>
              <h3 className="font-unbounded font-bold text-white text-xl mb-4" style={{lineHeight: '1.2'}}>
                Naše služby
              </h3>
              <p className="text-light-gray font-inter mb-6 leading-relaxed">
                Podívejte se na kompletní přehled našich služeb a možností.
              </p>
              <Link href="/sluzby/ecommerce" className="text-primary-red hover:text-white font-inter font-semibold inline-flex items-center transition-colors duration-200">
                <span>Zobrazit služby</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-primary-black p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight size={24} className="text-white" />
              </div>
              <h3 className="font-unbounded font-bold text-white text-xl mb-4" style={{lineHeight: '1.2'}}>
                Portfolio projektů
              </h3>
              <p className="text-light-gray font-inter mb-6 leading-relaxed">
                Inspirujte se našimi úspěšnými projekty a jejich výsledky.
              </p>
              <Link href="/portfolio" className="text-primary-red hover:text-white font-inter font-semibold inline-flex items-center transition-colors duration-200">
                <span>Zobrazit portfolio</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-unbounded font-bold text-3xl md:text-4xl mb-6" style={{lineHeight: '1.2'}}>
            NENAŠLI JSTE{' '}
            <span className="text-primary-red">ODPOVĚĎ</span>?
          </h2>
          <p className="text-xl text-light-gray mb-8 leading-relaxed">
            Kontaktujte nás přímo a my vám rádi odpovíme na jakoukoliv otázku ohledně vašeho projektu.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/kontakt" className="bg-primary-red hover:bg-secondary-red text-white px-8 py-4 rounded-lg font-unbounded font-semibold uppercase transition-colors duration-200 inline-flex items-center">
              <span>Kontaktovat nás</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a 
              href="mailto:info@ecommercepartners.cz"
              className="border border-light-gray text-light-gray hover:text-white hover:border-white px-8 py-4 rounded-lg font-unbounded font-semibold uppercase transition-colors duration-200"
            >
              info@ecommercepartners.cz
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


