



"use client";


export default function PrivacyPageContent() {
  return (
    <div className="min-h-screen bg-black text-white">
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-unbounded font-bold text-4xl md:text-6xl lg:text-7xl mb-8 text-center" style={{lineHeight: '1.2'}}>
              OCHRANA OSOBNÍCH{' '}
              <span className="text-primary-red">ÚDAJŮ</span>
            </h1>
            
            <p className="font-inter text-lg sm:text-xl md:text-2xl text-light-gray max-w-4xl mx-auto mb-12 leading-relaxed text-center">
              Zpracováváme osobní údaje v souladu s GDPR a českými právními předpisy. 
              Vaše soukromí je pro nás prioritou.
            </p>
            
            <div className="prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-unbounded font-bold mb-4 text-brand-red">1. Správce osobních údajů</h2>
                <p className="font-inter mb-4">
                  Správcem osobních údajů je společnost Znojemská Rotunda OPEN, 
                  se sídlem v České republice. Kontakt: znojemska.rotunda.open@gmail.com
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-unbounded font-bold mb-4 text-brand-red">2. Jaké údaje zpracováváme</h2>
                <p className="font-inter mb-4">
                  Zpracováváme následující kategorie osobních údajů:
                </p>
                <ul className="list-disc pl-6 mb-4 font-inter">
                  <li>Identifikační údaje (jméno, příjmení, e-mail, telefon)</li>
                  <li>Údaje o společnosti (název, IČO, DIČ, adresa)</li>
                  <li>Komunikační údaje (zprávy, dotazy, požadavky)</li>
                  <li>Technické údaje (IP adresa, cookies, údaje o prohlížeči)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-unbounded font-bold mb-4 text-brand-red">3. Účel zpracování</h2>
                <p className="mb-4">
                  Osobní údaje zpracováváme za následujícími účely:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Poskytování našich služeb a plnění smluv</li>
                  <li>Komunikace s klienty a odpovídání na dotazy</li>
                  <li>Marketingové aktivity (se souhlasem)</li>
                  <li>Plnění zákonných povinností</li>
                  <li>Zlepšování našich služeb a webových stránek</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-unbounded font-bold mb-4 text-brand-red">4. Právní základ zpracování</h2>
                <p className="mb-4">
                  Údaje zpracováváme na základě:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Plnění smlouvy nebo přípravy na její uzavření</li>
                  <li>Oprávněného zájmu správce</li>
                  <li>Souhlasu subjektu údajů</li>
                  <li>Plnění zákonné povinnosti</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-unbounded font-bold mb-4 text-brand-red">5. Doba zpracování</h2>
                <p className="mb-4">
                  Osobní údaje zpracováváme po dobu nezbytnou k naplnění účelu zpracování, 
                  nejdéle však po dobu stanovenou právními předpisy. Po ukončení 
                  spolupráce uchováváme údaje po dobu 10 let z důvodu plnění 
                  zákonných povinností.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-unbounded font-bold mb-4 text-brand-red">6. Předávání údajů třetím stranám</h2>
                <p className="mb-4">
                  Osobní údaje můžeme předávat pouze:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Našim smluvním partnerům pro plnění služeb</li>
                  <li>Státním orgánům na základě zákonné povinnosti</li>
                  <li>Se souhlasem subjektu údajů</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-unbounded font-bold mb-4 text-brand-red">7. Vaše práva</h2>
                <p className="mb-4">
                  Máte právo na:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Přístup k osobním údajům</li>
                  <li>Opravu nepřesných údajů</li>
                  <li>Výmaz údajů (právo být zapomenut)</li>
                  <li>Omezení zpracování</li>
                  <li>Přenositelnost údajů</li>
                  <li>Námitku proti zpracování</li>
                  <li>Odvolání souhlasu</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-unbounded font-bold mb-4 text-brand-red">8. Cookies</h2>
                <p className="mb-4">
                  Naše webové stránky používají cookies pro zajištění správné 
                  funkčnosti a zlepšení uživatelského zážitku. Používáme pouze 
                  nezbytné cookies, které jsou nutné pro fungování webu.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-unbounded font-bold mb-4 text-brand-red">9. Zabezpečení údajů</h2>
                <p className="mb-4">
                  Implementujeme vhodná technická a organizační opatření 
                  k ochraně osobních údajů před neoprávněným přístupem, 
                  ztrátou nebo zneužitím.
                </p>
              </section>

              <div className="mt-12 p-6 bg-gray-900 rounded-lg">
                <p className="text-sm text-gray-400">
                  Tyto zásady ochrany osobních údajů jsou platné od 1. ledna 2024.
                  <br />
                  Pro dotazy kontaktujte: znojemska.rotunda.open@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}



