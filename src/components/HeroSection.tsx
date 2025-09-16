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
      
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up">
                Em até 7 dias sua OSC organizada e pronta para crescer.
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed animate-slide-in-left">
                Ganhe visibilidade, engaje voluntários e comece a receber doações de forma simples e transparente — tudo por apenas R$ 350/mês.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
              <Button 
                size="lg"
                className="bg-hubcsr-green hover:bg-hubcsr-green/90 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Quero minha OSC pronta em até 7 dias
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-hubcsr-orange hover:bg-hubcsr-orange/90 border-hubcsr-orange text-white hover:text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Falar com um especialista
              </Button>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/20 animate-fade-in-delay-3 hover:bg-white/10 transition-all duration-300">
              <p className="text-lg font-semibold text-hubcsr-green">+30 OSCs já organizadas este mês</p>
              <p className="text-white/80 mt-2 italic">
                "Em poucos dias já tínhamos projetos ativos e começamos a receber nossas primeiras doações."
              </p>
            </div>
          </div>

          {/* Visual */}
         
        </div>
      </div>
    </section>
  );
};

export default HeroSection;