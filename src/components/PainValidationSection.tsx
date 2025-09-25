import { useInView } from "@/hooks/useInView";

const PainValidationSection = () => {
  const { ref, isInView } = useInView();
  const painPoints = [
    {
      icon: "⏳",
      problem: "Perde tempo em planilhas e WhatsApp?",
      solution: "Centralize a comunicação e todas as suas atividades em um único painel de controle."
    },
    {
      icon: "💸",
      problem: "Gasta dinheiro com várias ferramentas?",
      solution: "Tenha uma plataforma tudo-em-um que substitui outros sistemas e economiza seu orçamento."
    },
    {
      icon: "📑",
      problem: "Sofre com relatórios atrasados?",
      solution: "Gere relatórios de impacto com dados automáticos e em tempo real. Prontos com um clique."
    },
    {
      icon: "👥",
      problem: "Seus voluntários estão dispersos?",
      solution: "Crie uma comunidade ativa em um portal exclusivo para engajar, capacitar e gerenciar seus voluntários."
    }
  ];

  return (
    <section id="desafios" ref={ref} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-hubcsr-green to-emerald-600">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 sm:mb-12 leading-tight transition-all duration-700 ${isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}>
            Chega de improvisar. Profissionalize a gestão da sua OSC.
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {painPoints.map((pain, index) => (
              <div
                key={index}
                className={`p-4 sm:p-6 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 shadow-lg hover:bg-white/30 hover:shadow-xl hover:scale-105 transition-all duration-300 ${isInView ? `animate-fade-in-scale-delay-${index + 1}` : 'opacity-0 scale-95'
                  }`}
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-3">
                  <div className={`text-2xl sm:text-3xl flex-shrink-0 ${isInView ? 'animate-bounce-subtle' : ''}`}>{pain.icon}</div>
                  <p className="text-base sm:text-lg text-white font-bold text-left">{pain.problem}</p>
                </div>
                <div className="ml-8 sm:ml-12">
                  <p className="text-sm sm:text-base text-white/90 font-medium text-left">
                    <span className="text-white font-semibold">Solução hubCSR:</span> {pain.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6 sm:space-y-8">
            <p className={`text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto transition-all duration-700 ${isInView ? 'animate-slide-in-left animate-fade-in-delay-4' : 'opacity-0 -translate-x-8'
              }`}>
              Você já faz muito com pouco. Com a organização e os dados certos, você fará muito mais.
              <br />
              <span className="font-semibold text-white">👉 Com a hubCSR, a transformação começa em até 7 dias.</span>
            </p>
          </div>

        </div>
        <div className="w-full pt-8 flex items-center justify-center">
          <a
            href="#quero-aproveitar"
            className={`bg-white hover:bg-white/90 text-hubcsr-green px-6  py-2 sm:py-4 text-base sm:text-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold w-full sm:w-auto ${isInView ? 'animate-glow-pulse animate-scale-in animate-fade-in-delay-5' : 'opacity-0 scale-95'
              }`}
          >
            Quero minha OSC organizada
          </a>
        </div>
      </div>

    </section>
  );
};

export default PainValidationSection;