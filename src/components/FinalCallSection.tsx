import { Button } from "@/components/ui/button";

import { useInView } from "@/hooks/useInView";

const FinalCallSection = () => {
  const { ref, isInView } = useInView();
  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="space-y-8">
            <h2 className={`text-3xl md:text-5xl font-bold text-gray-900 leading-tight transition-all duration-700 ${
              isInView ? 'animate-fade-in' : 'opacity-0 translate-y-8'
            }`}>
              Sua causa já <span className="text-hubcsr-blue">transforma vidas.</span>
            </h2>
            
            <p className={`text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${
              isInView ? 'animate-fade-in-delay-1' : 'opacity-0 translate-y-8'
            }`}>
              Agora é hora de captar mais recursos, mostrar seus resultados e conquistar o apoio que sua OSC merece.
            </p>

            <div className="pt-8">
              <Button 
                size="lg"
                className={`bg-hubcsr-blue w-full text-wrap h-fit hover:bg-hubcsr-blue/90 text-white px-12 py-6 text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 ${
                  isInView ? 'animate-glow-pulse animate-fade-in-delay-2' : 'opacity-0 scale-95'
                }`}
              >
                👉 Começar agora por R$ 350/mês, sem fidelidade
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-12">
              <div className={`text-center p-6 transition-all duration-700 ${
                isInView ? 'animate-fade-in-scale-delay-3' : 'opacity-0 scale-95'
              }`}>
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="font-semibold text-gray-900 mb-2">Rápido</h4>
                <p className="text-gray-600">Primeiros resultados em 3-7 dias</p>
              </div>
              
              <div className={`text-center p-6 transition-all duration-700 ${
                isInView ? 'animate-fade-in-scale-delay-4' : 'opacity-0 scale-95'
              }`}>
                <div className="text-4xl mb-4">💯</div>
                <h4 className="font-semibold text-gray-900 mb-2">Transparente</h4>
                <p className="text-gray-600">100% das doações para sua OSC</p>
              </div>
              
              <div className={`text-center p-6 transition-all duration-700 ${
                isInView ? 'animate-fade-in-scale-delay-5' : 'opacity-0 scale-95'
              }`}>
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="font-semibold text-gray-900 mb-2">Apoio Total</h4>
                <p className="text-gray-600">Suporte humano especializado</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Fixed CTA for mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-hubcsr-blue text-white p-4 shadow-2xl lg:hidden z-50">
        <Button 
          className="w-full text-wrap h-fit bg-hubcsr-orange hover:bg-hubcsr-orange/90 text-white py-4 text-lg font-semibold rounded-lg"
        >
          Começar agora por R$ 350/mês, sem fidelidade
        </Button>
      </div>

    </section>
  );
};

export default FinalCallSection;