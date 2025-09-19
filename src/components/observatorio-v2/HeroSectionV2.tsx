import { useInView } from "@/hooks/useInView";

const HeroSectionV2 = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="relative min-h-screen bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight transition-all duration-700 ${
                isInView ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              }`}>
                Sua OSC conectada ao futuro do Terceiro Setor
              </h1>
              <p className={`text-xl sm:text-2xl lg:text-3xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto lg:mx-0 transition-all duration-700 ${
                isInView ? "animate-fade-in-up animate-fade-in-delay-1" : "opacity-0 translate-y-8"
              }`}>
                O Observatório do Terceiro Setor e a hubCSR se uniram para fortalecer organizações sociais com infraestrutura digital completa: visibilidade, gestão e rede de voluntários em um só lugar.
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 ${
              isInView ? "animate-fade-in-up animate-fade-in-delay-2" : "opacity-0 translate-y-8"
            }`}>
              <a
                href="#beneficios"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary bg-primary-foreground rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Quero ativar minha página com apoio do Observatório
              </a>
            </div>
          </div>

          {/* Visual placeholder */}
          <div className={`lg:flex items-center justify-center transition-all duration-700 ${
            isInView ? "animate-fade-in-scale animate-fade-in-delay-3" : "opacity-0 scale-95"
          }`}>
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">📱💻</div>
              <p className="text-primary-foreground/80 text-lg">
                Mockup da página social em um desktop e celular
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionV2;