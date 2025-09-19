import { useInView } from "@/hooks/useInView";
import { Headset, Star, TicketPercent } from "lucide-react";

const LaunchOfferSection = () => {
  const { ref, isInView } = useInView();

  const offers = [
    {
      icon: <Headset className="w-10 h-10 text-hubcsr-green" />,
      title: "Apoio Próximo",
      description: "Acompanhamento direto da nossa equipe de implementação.",
    },
    {
      icon: <Star className="w-10 h-10 text-hubcsr-green" />,
      title: "Reconhecimento",
      description: "Destaque como parceira institucional do Observatório.",
    },
    {
      icon: <TicketPercent className="w-10 h-10 text-hubcsr-green" />,
      title: "Condição Especial",
      description: "Valor promocional de R$ 350/mês garantido.",
    },
  ];

  return (
    <section ref={ref} id="oferta" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-hubcsr-blue to-hubcsr-blue/90 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center mb-12 sm:mb-16">
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold transition-all duration-700 ${
                isInView ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              }`}
            >
              Oferta Exclusiva de Lançamento
            </h2>
            <p
              className={`text-white/90 text-lg sm:text-xl max-w-3xl mx-auto mt-4 transition-all duration-700 ${
                isInView
                  ? "animate-fade-in-delay-1"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Esta é a fase inicial da parceria entre Observatório + hubCSR. As
              organizações que entrarem agora terão:
            </p>
          </div>

          {/* Grid de Ofertas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {offers.map((offer, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center p-6 sm:p-8 bg-white/10 backdrop-blur-sm border-white/20 border rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  isInView
                    ? `animate-fade-in-scale-delay-${index + 2}`
                    : "opacity-0 scale-95"
                }`}
              >
                <div className="mb-4">{offer.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  {offer.title}
                </h3>
                <p className="text-white/80 text-base sm:text-lg">
                  {offer.description}
                </p>
              </div>
            ))}
          </div>

          {/* Botão CTA */}
          <div
            className={`mt-12 sm:mt-16 text-center transition-all duration-700 ${
              isInView
                ? "animate-fade-in-up animate-fade-in-delay-5"
                : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="#quero-aproveitar"
              className="inline-block bg-hubcsr-green hover:bg-hubcsr-green/90 text-white font-bold px-8 py-4 text-base sm:text-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Quero garantir minha condição especial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchOfferSection;