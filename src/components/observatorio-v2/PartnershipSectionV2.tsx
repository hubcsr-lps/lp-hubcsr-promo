import { useInView } from "@/hooks/useInView";

const PartnershipSectionV2 = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-700 ${
              isInView ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}>
              Uma rede para fortalecer quem já faz diferença.
            </h2>
          </div>

          {/* Partnership Cards */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Observatório Card */}
            <div className={`bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${
              isInView ? "animate-fade-in-scale-delay-1" : "opacity-0 scale-95"
            }`}>
              <div className="text-5xl mb-6 text-center">📢</div>
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                Observatório do Terceiro Setor
              </h3>
              <p className="text-lg text-muted-foreground text-center leading-relaxed">
                É referência nacional em comunicação e fortalecimento do campo social.
              </p>
            </div>

            {/* hubCSR Card */}
            <div className={`bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${
              isInView ? "animate-fade-in-scale-delay-2" : "opacity-0 scale-95"
            }`}>
              <div className="text-5xl mb-6 text-center">💻</div>
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                hubCSR
              </h3>
              <p className="text-lg text-muted-foreground text-center leading-relaxed">
                É a plataforma que organiza e dá continuidade às iniciativas sociais com dados, páginas próprias e relatórios prontos.
              </p>
            </div>
          </div>

          {/* Partnership Description */}
          <div className={`text-center mb-12 transition-all duration-700 ${
            isInView ? "animate-fade-in-up animate-fade-in-delay-3" : "opacity-0 translate-y-8"
          }`}>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
              Juntas, criamos uma ponte entre visibilidade e infraestrutura: sua OSC terá mais presença, apoio e resultados reais.
            </p>
            
            {/* Illustration placeholder */}
            <div className="bg-muted/50 rounded-2xl p-12 mb-8">
              <div className="text-6xl mb-4">🤝</div>
              <p className="text-muted-foreground">Ilustração da parceria</p>
            </div>

            <a
              href="#beneficios"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-foreground bg-primary rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Quero ser parceira institucional do Observatório
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSectionV2;