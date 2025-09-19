import { useInView } from "@/hooks/useInView";
import { Headset, Star, TicketPercent } from "lucide-react";

const OfferSectionV2 = () => {
  const { ref, isInView } = useInView();

  const offers = [
    {
      icon: <Headset className="w-12 h-12" />,
      title: "Apoio Próximo",
      description: "Acompanhamento direto da nossa equipe de implementação."
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "Reconhecimento", 
      description: "Destaque como parceira institucional do Observatório."
    },
    {
      icon: <TicketPercent className="w-12 h-12" />,
      title: "Condição Especial",
      description: "Valor promocional de R$ 350/mês garantido."
    }
  ];

  return (
    <section ref={ref} id="oferta" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 transition-all duration-700 ${
              isInView ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}>
              <span className="text-hubcsr-green">Oferta Exclusiva</span> de Lançamento
            </h2>
            <p className={`text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto transition-all duration-700 ${
              isInView ? "animate-fade-in-up animate-fade-in-delay-1" : "opacity-0 translate-y-8"
            }`}>
              Esta é a fase inicial da parceria entre Observatório + hubCSR. As organizações que entrarem agora terão:
            </p>
          </div>

          {/* Offers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {offers.map((offer, index) => (
              <div
                key={index}
                className={`text-center p-8 bg-card border border-border hover:border-hubcsr-green/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  isInView ? `animate-fade-in-scale-delay-${index + 2}` : "opacity-0 scale-95"
                }`}
              >
                <div className="text-hubcsr-green mb-6 flex justify-center">
                  {offer.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {offer.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {offer.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={`text-center transition-all duration-700 ${
            isInView ? "animate-fade-in-up animate-fade-in-delay-5" : "opacity-0 translate-y-8"
          }`}>
            <a
              href="#final-cta"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-hubcsr-green hover:bg-hubcsr-green/90 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Quero garantir minha condição especial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSectionV2;