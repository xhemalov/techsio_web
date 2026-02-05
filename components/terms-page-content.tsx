


"use client";


export default function TermsPageContent() {
  return (
    <div className="min-h-screen bg-black text-white">
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-unbounded font-bold text-4xl md:text-6xl lg:text-7xl mb-8 text-center" style={{lineHeight: '1.2'}}>
              OBCHODNÍ{' '}
              <span className="text-primary-red">PODMÍNKY</span>
            </h1>
            
            <p className="font-inter text-lg sm:text-xl md:text-2xl text-light-gray max-w-4xl mx-auto mb-12 leading-relaxed text-center">
              Transparentní podmínky spolupráce pro všechny naše služby. 
              Jasná pravidla pro úspěšné partnerství.
            </p>
            
            <div className="prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-unbounded font-bold mb-4 text-brand-red">1. Základní ustanovení</h2>
                <p className="font-inter mb-4">
                  Tyto obchodní podmínky upravují vzájemná práva a povinnosti mezi společností 
                  Znojemská Rotunda OPEN (dále jen "poskytovatel") a klientem při poskytování 
                  služeb v oblasti vývoje webových aplikací, e-commerce řešení a digitálních služeb.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-unbounded font-bold mb-4 text-brand-red">2. Předmět smlouvy</h2>
                <p className="font-inter mb-4">
                  Předmětem smlouvy je poskytování následujících služeb:
                </p>
                <ul className="list-disc pl-6 mb-4 font-inter">
                  <li>Vývoj webových aplikací a e-commerce řešení</li>
                  <li>Systémové integrace a API propojení</li>
                  <li>SEO optimalizace a reporting</li>
                  <li>Konzultační služby v oblasti digitalizace</li>
                  <li>Technická podpora a údržba</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-brand-red">3. Cena a platební podmínky</h2>
                <p className="mb-4">
                  Cena za poskytované služby je stanovena na základě individuální kalkulace 
                  podle rozsahu a složitosti projektu. Platební podmínky jsou dohodnuty 
                  v konkrétní smlouvě o dílo nebo objednávce.
                </p>
                <p className="mb-4">
                  Standardní platební podmínky: 30% záloha při zahájení projektu, 
                  70% při dokončení a předání díla.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-brand-red">4. Dodací lhůty</h2>
                <p className="mb-4">
                  Dodací lhůty jsou stanoveny individuálně podle rozsahu projektu. 
                  Poskytovatel se zavazuje dodržet dohodnuté termíny, pokud nedojde 
                  k prodlení na straně klienta nebo k nepředvídatelným okolnostem.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-brand-red">5. Autorská práva</h2>
                <p className="mb-4">
                  Autorská práva k vytvořenému dílu přecházejí na klienta po úplném 
                  uhrazení všech závazků. Do té doby zůstávají autorská práva u poskytovatele.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-brand-red">6. Reklamace a záruka</h2>
                <p className="mb-4">
                  Poskytovatel poskytuje záruku na funkčnost dodaného řešení po dobu 
                  12 měsíců od předání díla. Záruka se nevztahuje na škody způsobené 
                  nesprávným používáním nebo zásahy třetích stran.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-brand-red">7. Ochrana osobních údajů</h2>
                <p className="mb-4">
                  Poskytovatel se zavazuje chránit osobní údaje klienta v souladu 
                  s platnou legislativou GDPR. Podrobnosti jsou uvedeny v našich 
                  zásadách ochrany osobních údajů.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-brand-red">8. Závěrečná ustanovení</h2>
                <p className="mb-4">
                  Tyto obchodní podmínky nabývají účinnosti dnem jejich zveřejnění. 
                  Poskytovatel si vyhrazuje právo tyto podmínky změnit s předchozím 
                  upozorněním klientů.
                </p>
                <p className="mb-4">
                  Případné spory budou řešeny dohodou, v případě neúspěchu 
                  u příslušného soudu České republiky.
                </p>
              </section>

              <div className="mt-12 p-6 bg-gray-900 rounded-lg">
                <p className="text-sm text-gray-400">
                  Tyto obchodní podmínky jsou platné od 1. ledna 2024.
                  <br />
                  Kontakt: znojemska.rotunda.open@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}


