import { Button } from "@/components/ui/button";

const PainValidationSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-hubcsr-light-blue to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Em até 7 dias sua OSC organizada e pronta para crescer.
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Ganhe visibilidade, engaje voluntários e comece a receber doações de forma simples e transparente — tudo por apenas R$ 350/mês.
            </p>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 max-w-md mx-auto">
              <p className="text-lg font-semibold text-hubcsr-green">+30 OSCs já organizadas este mês</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-hubcsr-green hover:bg-hubcsr-green/90 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Quero minha OSC pronta em até 7 dias
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-hubcsr-orange hover:bg-hubcsr-orange/90 border-hubcsr-orange text-white hover:text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Falar com um especialista
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PainValidationSection;