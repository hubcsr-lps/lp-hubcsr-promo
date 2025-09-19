import { useInView } from "@/hooks/useInView";
import { CheckCircle2, XCircle } from "lucide-react";

const InvestmentSection = () => {
  const { ref, isInView } = useInView();

  const painPoints = [
    "Planilhas",
    "E-mail Marketing",
    "Formulários",
    "Site desatualizado",
  ];

  const gainPoints = [
    "Página Social",
    "Gestão de Voluntários",
    "Relatórios de Impacto",
    "Comunicação Unificada",
  ];

  return (
    <section ref={ref} id="investimento" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center mb-12 sm:mb-16">
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 transition-all duration-700 ${
                isInView ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              }`}
            >
              Sustentabilidade e Investimento Inteligente
            </h2>
            <p
              className={`text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto transition-all duration-700 ${
                isInView
                  ? "animate-fade-in-delay-1"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Muitas OSCs gastam tempo e recursos em ferramentas isoladas que
              não conversam entre si. Na parceria, sua organização tem tudo em
              um só lugar.
            </p>
          </div>

          {/* Grid de Comparação */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Coluna de "Ferramentas Soltas" (Pain) */}
            <div
              className={`p-6 sm:p-8 rounded-xl transition-all duration-700 ${
                isInView
                  ? "animate-fade-in-scale-delay-2"
                  : "opacity-0 scale-95"
              }`}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-6">
                Ferramentas soltas
              </h3>
              <ul className="space-y-4">
                {painPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <span className="text-muted-foreground text-base sm:text-lg line-through">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna de "Plataforma Integrada" (Gain) */}
            <div
              className={`p-6 sm:p-8 rounded-xl bg-card border border-hubcsr-green/30 shadow-lg shadow-hubcsr-green/10 transition-all duration-700 ${
                isInView
                  ? "animate-fade-in-scale-delay-3"
                  : "opacity-0 scale-95"
              }`}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-6">
                Plataforma Integrada
              </h3>
              <ul className="space-y-4">
                {gainPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-hubcsr-green flex-shrink-0" />
                    <span className="text-foreground font-semibold text-base sm:text-lg">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Seção de Preço e Valor */}
          <div
            className={`text-center mt-12 sm:mt-16 transition-all duration-700 ${
              isInView
                ? "animate-fade-in-up animate-fade-in-delay-4"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xl sm:text-2xl font-semibold text-foreground">
              Por apenas <span className="text-hubcsr-blue">R$ 350/mês</span>,
              sua organização tem tudo.
            </p>
            <p className="text-muted-foreground mt-4 text-base sm:text-lg">
              Duas doações de R$ 200 já cobrem o investimento. <br />
              Mais do que custo, é um ganho de{" "}
              <span className="font-medium text-foreground">
                tempo, clareza e confiança
              </span>{" "}
              para sua OSC.
            </p>
          </div>

          {/* Botão CTA Final */}
          <div
            className={`mt-10 text-center transition-all duration-700 ${
              isInView
                ? "animate-fade-in-scale-delay-5"
                : "opacity-0 scale-95"
            }`}
          >
            <a
              href="#quero-aproveitar"
              className="inline-block bg-hubcsr-green hover:bg-hubcsr-green/90 text-white font-bold px-8 py-4 text-base sm:text-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Quero começar agora por R$ 350/mês
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;