import { ShoppingCart, Settings, MessageSquare, TrendingUp } from 'lucide-react';

export default function ProcessSection() {
  const processSteps = [
    {
      icon: ShoppingCart,
      number: '01',
      title: 'ANALÝZA A PLÁNOVÁNÍ',
      description: 'Úvodní schůzka, definice cílů a požadavků, analýza současného stavu a konkurence.',
      details: ['Konzultace s klíčovými stakeholdery', 'Analýza business požadavků', 'Technická analýza', 'Vytvoření projektového plánu']
    },
    {
      icon: Settings,
      number: '02', 
      title: 'NÁVRH ŘEŠENÍ',
      description: 'Technická specifikace, wireframy, UI/UX design a architektura systému.',
      details: ['Wireframy a prototypy', 'UI/UX design', 'Technická architektura', 'Schválení designu']
    },
    {
      icon: MessageSquare,
      number: '03',
      title: 'VÝVOJ A TESTOVÁNÍ',
      description: 'Agilní vývoj s pravidelnými milníky, průběžné testování a optimalizace.',
      details: ['Agilní metodika vývoje', 'Pravidelné code review', 'Automatizované testování', 'Uživatelské testování']
    },
    {
      icon: TrendingUp,
      number: '04',
      title: 'IMPLEMENTACE A PODPORA',
      description: 'Nasazení do produkce, migrace dat, školení týmu a dlouhodobá technická podpora.',
      details: ['Nasazení do produkce', 'Migrace dat', 'Školení uživatelů', 'Technická podpora 24/7']
    }
  ];

  return (
    <section id="proces" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-unbounded font-bold text-3xl md:text-5xl mb-6" style={{lineHeight: '1.2'}}>
            PROCES <span className="text-primary-red">SPOLUPRÁCE</span>
          </h2>
          <p className="font-inter text-xl text-light-gray max-w-3xl mx-auto leading-relaxed">
            Transparentní a strukturovaný přístup k realizaci vašeho e-commerce projektu. 
            Od prvního kontaktu po spuštění a následnou podporu.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden xl:block">
            <div className="flex justify-between items-start relative">
              {/* Connection line from step 01 to 04 */}
              <div className="absolute top-10 left-0 right-0 h-0.5 bg-dark-gray z-0" style={{left: '12.5%', right: '12.5%'}}></div>
              
              {processSteps.map((step, index) => (
                <div key={index} className="flex-1 relative px-2">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-dark-gray border border-light-gray/20 rounded-lg flex items-center justify-center mb-4 relative z-10">
                      <step.icon className="w-8 h-8 text-primary-red" />
                    </div>
                    <div className="text-center max-w-xs">
                      <div className="font-unbounded font-bold text-primary-red text-2xl mb-3">
                        {step.number}
                      </div>
                      <div className="h-16 flex items-center justify-center mb-4">
                        <h3 className="font-unbounded font-semibold text-xl text-center" style={{lineHeight: '1.2'}}>
                          {step.title}
                        </h3>
                      </div>
                      <p className="font-inter text-base text-light-gray mb-6 leading-relaxed min-h-24">
                        {step.description}
                      </p>
                      <ul className="text-left space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="font-inter text-sm text-secondary-gray flex items-center">
                            <div className="w-1 h-1 bg-primary-red rounded-full mr-2"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tablet Timeline */}
          <div className="hidden lg:block xl:hidden">
            <div className="flex justify-between items-start relative">
              {/* Connection line from step 01 to 04 */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-dark-gray z-0" style={{left: '12.5%', right: '12.5%'}}></div>
              
              {processSteps.map((step, index) => (
                <div key={index} className="flex-1 relative px-1">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-dark-gray border border-light-gray/20 rounded-lg flex items-center justify-center mb-4 relative z-10">
                      <step.icon className="w-6 h-6 text-primary-red" />
                    </div>
                    <div className="text-center max-w-[200px]">
                      <div className="font-unbounded font-bold text-primary-red text-xl mb-3">
                        {step.number}
                      </div>
                      <div className="h-12 flex items-center justify-center mb-4">
                        <h3 className="font-unbounded font-semibold text-base leading-tight text-center">
                          {step.title}
                        </h3>
                      </div>
                      <p className="font-inter text-sm text-light-gray mb-4 leading-relaxed min-h-20">
                        {step.description}
                      </p>
                      <ul className="text-left space-y-1">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="font-inter text-xs text-secondary-gray flex items-start">
                            <div className="w-1 h-1 bg-primary-red rounded-full mr-1 mt-1 flex-shrink-0"></div>
                            <span className="break-words leading-tight">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-dark-gray border border-light-gray/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-primary-red" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-unbounded font-bold text-primary-red text-2xl mb-2">
                      {step.number}
                    </div>
                    <div className="h-16 flex items-center mb-4">
                      <h3 className="font-unbounded font-semibold text-lg sm:text-xl break-words">
                        {step.title}
                      </h3>
                    </div>
                    <p className="font-inter text-base text-light-gray mb-6 leading-relaxed min-h-24">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="font-inter text-sm text-secondary-gray flex items-start">
                          <div className="w-1 h-1 bg-primary-red rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          <span className="break-words">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-12 bg-dark-gray"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-secondary-black border border-dark-gray rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="font-unbounded font-bold text-2xl mb-4" style={{lineHeight: '1.2'}}>
              PŘIPRAVENI <span className="text-primary-red">ZAČÍT?</span>
            </h3>
            <p className="font-inter text-light-gray mb-6">
              Rezervujte si bezplatnou konzultaci a probereme váš projekt do detailu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#kontakt"
                className="brand-button-primary"
              >
                REZERVOVAT KONZULTACI
              </a>
              <a 
                href="tel:+420123456789"
                className="border border-white text-white hover:bg-white hover:text-primary-black px-8 py-3 rounded-lg font-unbounded font-semibold uppercase transition-all duration-200"
              >
                ZAVOLAT NYNÍ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}














