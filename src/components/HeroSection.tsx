import { Button } from "@/components/ui/button";
import heroMockup from "@/assets/hero-mockup.jpg";
import heroBackground from "@/assets/hubcsr-01.png";

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
                Em até 7 dias sua OSC organizada e pronta para crescer.
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed animate-slide-in-left max-w-2xl mx-auto lg:mx-0">
                Ganhe visibilidade, engaje voluntários e comece a receber doações de forma simples e transparente — tudo por apenas R$ 350/mês.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2 justify-center lg:justify-start">
              <a href="#quero-aproveitar"

                className="lg:text-nowrap font-medium bg-hubcsr-green hover:bg-hubcsr-green/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                Quero minha OSC pronta em até 7 dias
              </a>
              <Button href="http://wa.me/+5511917124081?text=Ol%C3%A1%21+Quero+minha+OSC+organizada+em+at%C3%A9+7+dias&type=phone_number&app_absent=0"
                className="lg:text-nowrap md:h-full bg-hubcsr-orange hover:bg-hubcsr-orange/90 border-hubcsr-orange text-white hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                onClick={
                  () => {
                    alert("click")
                    window.chatWidget.open()
                  }
                }
              >
                Falar com um especialista
              </Button>
            </div>

            <div className="bg-white/5 w-full backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/20 animate-fade-in-delay-3 hover:bg-white/10 transition-all duration-300">
              <p className="text-base sm:text-lg font-semibold text-hubcsr-green">+30 OSCs já organizadas este mês</p>
              <p className="text-sm sm:text-base text-white/80 mt-2 italic">
                "Em poucos dias já tínhamos projetos ativos e começamos a receber nossas primeiras doações."
              </p>
            </div>
          </div>

          {/* Visual - Empty for now */}

        </div>
      </div>
    </section>
  );
};

export default HeroSection;