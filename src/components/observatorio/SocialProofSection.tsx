import { useInView } from "@/hooks/useInView";

const SocialProofSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="parceiros" ref={ref} className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 sm:mb-12 transition-all duration-700 ${
              isInView ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            O que dizem sobre a parceria
          </h2>

          {/* Card de Depoimento */}
          <div
            className={`mx-auto max-w-3xl bg-card border border-border rounded-xl p-6 sm:p-8 shadow-lg transition-all duration-700 ${
              isInView ? "animate-fade-in-scale" : "opacity-0 scale-95"
            }`}
          >
            <blockquote className="text-lg sm:text-xl text-foreground italic leading-relaxed">
              “Acreditamos que essa parceria vai fortalecer centenas de OSCs,
              oferecendo visibilidade e continuidade para quem já faz diferença
              no campo social.”
            </blockquote>
            <div className="flex items-center justify-center mt-6">
              <img
                src="/logos/logo-02.png" // Reutilizando o logo do componente original
                alt="Logo Observatório do Terceiro Setor"
                className="h-10 mr-4 opacity-80"
              />
              <p className="font-semibold text-muted-foreground">
                Observatório do Terceiro Setor
              </p>
            </div>
          </div>

          {/* Novo Botão CTA */}
          <div
            className={`mt-10 transition-all duration-700 ${
              isInView
                ? "animate-fade-in-up animate-fade-in-delay-2"
                : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="#quero-aproveitar"
              className="inline-block bg-hubcsr-green hover:bg-hubcsr-green/90 text-white font-bold px-8 py-4 text-base sm:text-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Quero integrar minha OSC à rede do Observatório
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;