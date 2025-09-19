import { useInView } from "@/hooks/useInView";
import { XCircle, CheckCircle2 } from "lucide-react";

const InvestmentSectionV2 = () => {
  const { ref, isInView } = useInView();

  const oldWay = [
    "Planilhas",
    "E-mail Marketing", 
    "Formulários",
    "Site desatualizado"
  ];

  const newWay = [
    "Página Social",
    "Gestão de Voluntários",
    "Relatórios de Impacto",
    "Comunicação Unificada"
  ];

  return (
    <section ref={ref} id="investimento" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 transition-all duration-700 ${
              isInView ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}>
              <span className="text-hubcsr-green">Sustentabilidade</span> e Investimento Inteligente
            </h2>
            <p className={`text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto transition-all duration-700 ${
              isInView ? "animate-fade-in-up animate-fade-in-delay-1" : "opacity-0 translate-y-8"
            }`}>
              Muitas OSCs gastam tempo e recursos em ferramentas isoladas que não conversam entre si. Na parceria, sua organização tem tudo em um só lugar.
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Old Way */}
            <div className={`bg-card border border-border rounded-2xl p-8 transition-all duration-700 ${
              isInView ? "animate-fade-in-scale-delay-2" : "opacity-0 scale-95"
            }`}>
              <h3 className="text-2xl font-bold text-foreground text-center mb-8">
                Ferramentas soltas
              </h3>
              <div className="space-y-4">
                {oldWay.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <XCircle className="w-6 h-6 text-destructive flex-shrink-0" />
                    <span className="text-lg text-muted-foreground line-through">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* New Way */}
            <div className={`bg-hubcsr-green/10 border-2 border-hubcsr-green/30 rounded-2xl p-8 transition-all duration-700 ${
              isInView ? "animate-fade-in-scale-delay-3" : "opacity-0 scale-95"
            }`}>
              <h3 className="text-2xl font-bold text-foreground text-center mb-8">
                <span className="text-hubcsr-green">Plataforma Integrada</span>
              </h3>
              <div className="space-y-4">
                {newWay.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-hubcsr-green flex-shrink-0" />
                    <span className="text-lg text-foreground font-semibold">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className={`text-center transition-all duration-700 ${
            isInView ? "animate-fade-in-up animate-fade-in-delay-4" : "opacity-0 translate-y-8"
          }`}>
            <div className="bg-card border border-hubcsr-green/20 rounded-2xl p-8 sm:p-12 shadow-lg mb-8">
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Por apenas <span className="text-hubcsr-green">R$ 350/mês</span>, sua organização tem tudo.
              </h3>
              <div className="space-y-2 text-lg sm:text-xl text-muted-foreground">
                <p>Duas doações de R$ 200 já cobrem o investimento.</p>
                <p>
                  Mais do que custo, é um ganho de{" "}
                  <span className="font-semibold text-hubcsr-green">
                    tempo, clareza e confiança
                  </span>{" "}
                  para sua OSC.
                </p>
              </div>
            </div>

            <a
              href="#oferta"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-hubcsr-green hover:bg-hubcsr-green/90 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Quero começar agora por R$ 350/mês
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSectionV2;