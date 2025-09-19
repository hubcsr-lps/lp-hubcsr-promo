import { useInView } from "@/hooks/useInView";
import { CheckCircle2, FileText, Users, Award, Headphones, Handshake, Network } from "lucide-react";

const BenefitsSectionV2 = () => {
  const { ref, isInView } = useInView();

  const benefits = [
    {
      icon: <FileText className="w-8 h-8" />,
      text: "Página social exclusiva (minisite com identidade da OSC)"
    },
    {
      icon: <Award className="w-8 h-8" />,
      text: "Publicação de projetos e histórico da organização"
    },
    {
      icon: <Users className="w-8 h-8" />,
      text: "Gestão de voluntariado com certificados automáticos"
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      text: "Relatórios prontos para prestação de contas com transparência"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      text: "Suporte humano + kit de implementação"
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      text: "Parceria institucional com o Observatório do Terceiro Setor"
    },
    {
      icon: <Network className="w-8 h-8" />,
      text: "Acesso à rede de pessoas voluntárias do Observatório"
    }
  ];

  return (
    <section ref={ref} id="beneficios" className="py-16 sm:py-20 lg:py-24 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 transition-all duration-700 ${
              isInView ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}>
              Benefícios para sua OSC
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-500 ${
                  isInView ? `animate-fade-in-scale-delay-${index + 1}` : "opacity-0 scale-95"
                }`}
              >
                <div className="flex-shrink-0 text-primary">
                  {benefit.icon}
                </div>
                <p className="text-lg text-foreground font-medium leading-relaxed">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>

          {/* Mockup placeholder */}
          <div className={`text-center mb-12 transition-all duration-700 ${
            isInView ? "animate-fade-in-up animate-fade-in-delay-8" : "opacity-0 translate-y-8"
          }`}>
            <div className="bg-muted/50 rounded-2xl p-12 mb-8">
              <div className="text-6xl mb-4">📊</div>
              <p className="text-muted-foreground text-lg">Mockup de um relatório de impacto</p>
            </div>

            <a
              href="#depoimento"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-foreground bg-primary rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Quero esses benefícios para minha OSC
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSectionV2;