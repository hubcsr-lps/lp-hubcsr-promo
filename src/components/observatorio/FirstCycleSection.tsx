import { useInView } from "@/hooks/useInView";

const FirstCycleSection = () => {
  const { ref, isInView } = useInView();

  // Adaptei para mostrar as duas organizações parceiras
  const partners = [
    {
      icon: "📢",
      name: "Observatório do Terceiro Setor",
      description: "É referência nacional em comunicação e fortalecimento do campo social.",
    },
    {
      icon: "💻",
      name: "hubCSR",
      description: "É a plataforma que organiza e dá continuidade às iniciativas sociais com dados, páginas próprias e relatórios prontos.",
    },
  ];

  return (
    <section id="solucao" ref={ref} className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 transition-all duration-700 ${
                isInView ? "animate-fade-in" : "opacity-0 translate-y-8"
              }`}
            >
              Uma rede para fortalecer quem já faz diferença.
            </h2>
            <p
              className={`text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-700 ${
                isInView
                  ? "animate-fade-in-delay-1"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Juntas, criamos uma ponte entre visibilidade e infraestrutura: sua
              OSC terá mais presença, apoio e resultados reais.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`flex flex-col items-start gap-3 sm:gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg hover:border-hubcsr-blue/50 transition-all duration-300 ${
                  isInView
                    ? `animate-fade-in-scale-delay-${index + 2}`
                    : "opacity-0 scale-95"
                }`}
              >
                <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl flex-shrink-0">{partner.icon}</span>
                    <h3 className="text-xl font-bold text-gray-800">{partner.name}</h3>
                </div>
                <p className="text-base sm:text-lg text-gray-700">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstCycleSection;