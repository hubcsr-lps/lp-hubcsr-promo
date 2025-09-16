import { Button } from "@/components/ui/button";

import { useInView } from "@/hooks/useInView";

const FinalCallSection = () => {
  const { ref, isInView } = useInView();
  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white pb-20 sm:pb-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="space-y-6 sm:space-y-8">
            <h2 className={`text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight transition-all duration-700 ${
              isInView ? 'animate-fade-in' : 'opacity-0 translate-y-8'
            }`}>
              Sua causa já <span className="text-hubcsr-blue">transforma vidas.</span>
            </h2>
            
            <p className={`text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${
              isInView ? 'animate-fade-in-delay-1' : 'opacity-0 translate-y-8'
            }`}>
              Agora é hora de captar mais recursos, mostrar seus resultados e conquistar o apoio que sua OSC merece.
            </p>

            <div className="pt-6 sm:pt-8">
              <Button 
                size="lg"
                className={`bg-hubcsr-blue w-full text-wrap h-fit hover:bg-hubcsr-blue/90 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 ${
                  isInView ? 'animate-glow-pulse animate-fade-in-delay-2' : 'opacity-0 scale-95'
                }`}
              >
                👉 Começar agora por R$ 350/mês, sem fidelidade
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-12">
              <div className={`text-center p-4 sm:p-6 transition-all duration-700 ${
                isInView ? 'animate-fade-in-scale-delay-3' : 'opacity-0 scale-95'
              }`}>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚡</div>
                <h4 className="font-semibold text-gray-900 mb-2">Rápido</h4>
                <p className="text-sm sm:text-base text-gray-600">Primeiros resultados em 3-7 dias</p>
              </div>
              
              <div className={`text-center p-4 sm:p-6 transition-all duration-700 ${
                isInView ? 'animate-fade-in-scale-delay-4' : 'opacity-0 scale-95'
              }`}>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💯</div>
                <h4 className="font-semibold text-gray-900 mb-2">Transparente</h4>
                <p className="text-sm sm:text-base text-gray-600">100% das doações para sua OSC</p>
              </div>
              
              <div className={`text-center p-4 sm:p-6 transition-all duration-700 ${
                isInView ? 'animate-fade-in-scale-delay-5' : 'opacity-0 scale-95'
              }`}>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🤝</div>
                <h4 className="font-semibold text-gray-900 mb-2">Apoio Total</h4>
                <p className="text-sm sm:text-base text-gray-600">Suporte humano especializado</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Fixed CTA for mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-hubcsr-blue text-white p-3 sm:p-4 shadow-2xl lg:hidden z-50">
        <Button 
          className="w-full text-wrap h-fit bg-hubcsr-green hover:bg-hubcsr-green/90 text-white py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg"
        >
          Começar agora por R$ 350/mês, sem fidelidade
        </Button>
      </div>

    </section>
  );
};

export default FinalCallSection;