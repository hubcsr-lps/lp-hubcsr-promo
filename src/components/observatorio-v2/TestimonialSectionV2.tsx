import { useInView } from "@/hooks/useInView";

const TestimonialSectionV2 = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} id="depoimento" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 transition-all duration-700 ${
              isInView ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}>
              O que dizem sobre a parceria
            </h2>
          </div>

          {/* Testimonial Card */}
          <div className={`bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-lg mb-12 transition-all duration-700 ${
            isInView ? "animate-fade-in-scale-delay-1" : "opacity-0 scale-95"
          }`}>
            <blockquote className="text-xl sm:text-2xl text-foreground italic leading-relaxed text-center mb-8">
              "Acreditamos que essa parceria vai fortalecer centenas de OSCs, oferecendo visibilidade e continuidade para quem já faz diferença no campo social."
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
              <div className="text-center">
                <p className="font-semibold text-foreground text-lg">
                  Observatório do Terceiro Setor
                </p>
                <p className="text-muted-foreground">
                  Logo Observatório do Terceiro Setor
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={`text-center transition-all duration-700 ${
            isInView ? "animate-fade-in-up animate-fade-in-delay-2" : "opacity-0 translate-y-8"
          }`}>
            <a
              href="#investimento"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-foreground bg-primary rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Quero integrar minha OSC à rede do Observatório
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSectionV2;