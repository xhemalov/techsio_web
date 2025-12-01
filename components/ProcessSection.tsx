import { MessageSquare, FileText, Code, Rocket } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      icon: MessageSquare,
      number: '01',
      title: 'Konzultace',
      description: 'Detailní analýza vašich požadavků, cílů a současného stavu vašeho byznysu.',
    },
    {
      icon: FileText,
      number: '02',
      title: 'Návrh řešení',
      description: 'Vytvoření technické specifikace, wireframes a plánu implementace.',
    },
    {
      icon: Code,
      number: '03',
      title: 'Vývoj',
      description: 'Implementace e-shopu s pravidelnými kontrolami a testováním funkcí.',
    },
    {
      icon: Rocket,
      number: '04',
      title: 'Spuštění',
      description: 'Nasazení do produkce, školení a poskytnutí kompletní dokumentace.',
    },
  ];

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-gray/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-unbounded font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6" style={{lineHeight: '1.2'}}>
            Náš <span className="text-primary-red">Proces</span>
          </h2>
          <p className="font-inter text-lg text-light-gray max-w-3xl mx-auto">
            Transparentní přístup od první konzultace až po úspěšné spuštění vašeho e-shopu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon size={24} className="text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary-red rounded-full flex items-center justify-center">
                  <span className="text-white font-unbounded font-bold text-sm">{step.number}</span>
                </div>
              </div>
              <h3 className="font-unbounded font-bold text-white text-xl mb-3" style={{lineHeight: '1.2'}}>
                {step.title}
              </h3>
              <p className="font-inter text-light-gray leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

