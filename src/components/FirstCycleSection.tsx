import { useInView } from "@/hooks/useInView";

const FirstCycleSection = () => {
  const { ref, isInView } = useInView();
  const initialFeatures = [
    {
      icon: "🌐",
      title: "Tenha sua Página Social — a página de transparência da sua OSC, com sua marca, projetos e histórico"
    },
    {
      icon: "🤝",
      title: "Ative o voluntariado com vagas simples e abertas"
    },
    {
      icon: "📑",
      title: "Cadastre projetos ou eventos (novos ou históricos)"
    },
    {
      icon: "📊",
      title: "Emita relatórios básicos para apresentar a parceiros"
    }
  ];

  const unlockFeatures = [
    "Link exclusivo de doação (100% direto para sua OSC, sem taxas)",
    "Página de doações pronta para compartilhar",
    "Histórico de impacto que cresce a cada atividade"
  ];

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 transition-all duration-700 ${
              isInView ? 'animate-fade-in' : 'opacity-0 translate-y-8'
            }`}>
              👉 Em até 7 dias, sua OSC já <span className="text-hubcsr-blue">conquista seus primeiros resultados:</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {initialFeatures.map((feature, index) => (
              <div key={index} className={`flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-hubcsr-light-blue/30 rounded-xl border border-hubcsr-blue/20 hover:shadow-lg transition-all duration-300 ${
                isInView ? `animate-fade-in-scale-delay-${index + 2}` : 'opacity-0 scale-95'
              }`}>
                <div className="text-xl sm:text-2xl flex-shrink-0">{feature.icon}</div>
                <p className="text-base sm:text-lg text-gray-700 font-medium">{feature.title}</p>
              </div>
            ))}
          </div>

          <div className={`bg-gradient-to-r from-hubcsr-blue to-hubcsr-blue/80 text-white p-6 sm:p-8 rounded-2xl transition-all duration-700 ${
            isInView ? 'animate-fade-in-delay-6' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              ⚡ E ao concluir o primeiro ciclo, você ainda desbloqueia:
            </h3>
            
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {unlockFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-hubcsr-green rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                  <span className="text-base sm:text-lg text-white/95">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/20">
              <p className="text-base sm:text-lg">
                👉 <span className="font-semibold">Algumas OSCs fazem em 3 dias, outras em 7.</span> O ritmo é seu, 
                mas nosso time acompanha em cada passo.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FirstCycleSection;