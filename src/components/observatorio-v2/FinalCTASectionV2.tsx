import { useInView } from "@/hooks/useInView";

const FinalCTASectionV2 = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} id="final-cta" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-hubcsr-green via-hubcsr-green/95 to-hubcsr-green/90 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Message */}
          <div className={`mb-12 transition-all duration-700 ${
            isInView ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Entre para a rede que fortalece o Terceiro Setor.
            </h2>
          </div>

          {/* Main CTA */}
          <div className={`mb-8 transition-all duration-700 ${
            isInView ? "animate-fade-in-scale-delay-1" : "opacity-0 scale-95"
          }`}>
            <a
              href="http://wa.me/+5511917124081?text=Ol%C3%A1%21+Quero+ativar+minha+p%C3%A1gina+com+apoio+do+Observat%C3%B3rio&type=phone_number&app_absent=0"
              className="inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-hubcsr-green bg-white hover:bg-white/90 rounded-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
            >
              Ativar minha página agora
            </a>
          </div>

          {/* Trust Signal */}
          <div className={`transition-all duration-700 ${
            isInView ? "animate-fade-in-up animate-fade-in-delay-2" : "opacity-0 translate-y-8"
          }`}>
            <p className="text-lg text-white/80">
              Sem fidelidade. Cancelamento simples.
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASectionV2;