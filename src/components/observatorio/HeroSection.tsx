import { Button } from "@/components/ui/button";
import heroBackground from "/hubcsr-observatorio.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      ></div>
      <div className="absolute inset-0 "></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left md:w-fit">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-fade-in-up">
                Sua OSC conectada ao futuro do Terceiro Setor
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed animate-slide-in-left max-w-2xl mx-auto lg:mx-0">
                O Observatório do Terceiro Setor e a hubCSR se uniram para
                fortalecer organizações sociais com infraestrutura digital
                completa: visibilidade, gestão e rede de voluntários em um só
                lugar.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2 justify-center lg:justify-start">
              <a
                href="#quero-aproveitar"
                className="lg:text-nowrap font-medium bg-hubcsr-green hover:bg-hubcsr-green/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center"
              >
                Quero ativar minha página
              </a>
              <button
                onClick={
                  window.chatWidget.open()

                }
                className="lg:text-nowrap md:h-full bg-hubcsr-orange hover:bg-hubcsr-orange/90 border-hubcsr-orange text-white hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com um especialista
              </button>
            </div>
          </div>

          {/* Visual - Empty for now */}
        </div>
      </div>
    </section >
  );
};

export default HeroSection;