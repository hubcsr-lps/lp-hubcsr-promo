import { useInView } from "@/hooks/useInView";
import heroBackground from "@/assets/hubcsr-01.png";

const HeroSectionV2 = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="relative min-h-screen text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      ></div>
      <div className="absolute inset-0"></div>
      
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
              <p className={`text-xl sm:text-2xl lg:text-3xl text-white/90 leading-relaxed max-w-3xl mx-auto lg:mx-0 transition-all duration-700 ${
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
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-hubcsr-green hover:bg-hubcsr-green/90 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Quero ativar minha página com apoio do Observatório
              </a>
            </div>

            <div className={`bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/20 transition-all duration-700 hover:bg-white/10 ${
              isInView ? "animate-fade-in-delay-3" : "opacity-0 translate-y-8"
            }`}>
              <p className="text-base sm:text-lg font-semibold text-hubcsr-green">+100 OSCs já fortalecidas na rede</p>
              <p className="text-sm sm:text-base text-white/80 mt-2 italic">
                "Essa parceria transformou nossa comunicação e captação de recursos."
              </p>
            </div>
          </div>

          {/* Visual placeholder */}
          <div className={`lg:flex items-center justify-center transition-all duration-700 ${
            isInView ? "animate-fade-in-scale animate-fade-in-delay-3" : "opacity-0 scale-95"
          }`}>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">📱💻</div>
              <p className="text-white/80 text-lg">
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