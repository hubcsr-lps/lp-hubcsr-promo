import { Button } from "@/components/ui/button";

import { useInView } from "@/hooks/useInView";

const PainValidationSection = () => {
  const { ref, isInView } = useInView();
  const painPoints = [
    {
      icon: "⏳",
      title: "Tempo perdido em planilhas e grupos de WhatsApp"
    },
    {
      icon: "💸",
      title: "Dinheiro desperdiçado em ferramentas soltas e treinamentos"
    },
    {
      icon: "📑",
      title: "Relatórios atrasados que desgastam sua equipe"
    },
    {
      icon: "👥",
      title: "Voluntários dispersos sem engajamento real"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-hubcsr-green to-hubcsr-green/80">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-12 leading-tight transition-all duration-700 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            Esses problemas travam o crescimento da sua OSC:
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {painPoints.map((pain, index) => (
              <div 
                key={index} 
                className={`flex items-start gap-4 p-6 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 shadow-lg hover:bg-white/30 hover:shadow-xl hover:scale-105 transition-all duration-300 ${
                  isInView ? `animate-fade-in-scale-delay-${index + 1}` : 'opacity-0 scale-95'
                }`}
              >
                <div className={`text-3xl ${isInView ? 'animate-bounce-subtle' : ''}`}>{pain.icon}</div>
                <p className="text-lg text-white font-medium text-left">{pain.title}</p>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <p className={`text-xl text-white/90 leading-relaxed max-w-2xl mx-auto transition-all duration-700 ${
              isInView ? 'animate-slide-in-left animate-fade-in-delay-4' : 'opacity-0 -translate-x-8'
            }`}>
              Você já faz muito com pouco. Mas sem organização e dados claros, captar recursos fica mais difícil.
              <br />
              <span className="font-semibold text-white">👉 Com a hubCSR, esse ciclo pode mudar em até 7 dias.</span>
            </p>
            
            <Button 
              size="lg"
              className={`bg-white hover:bg-white/90 text-hubcsr-green px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold ${
                isInView ? 'animate-glow-pulse animate-scale-in animate-fade-in-delay-5' : 'opacity-0 scale-95'
              }`}
            >
              Quero minha OSC organizada em até 7 dias
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PainValidationSection;