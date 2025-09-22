const BenefitsSectionV2 = () => {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-foreground">
            O que dizem sobre a parceria
          </h2>

          <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
            <blockquote className="text-lg sm:text-xl text-muted-foreground mb-6 italic">
              "Acreditamos que essa parceria vai fortalecer centenas de OSCs, oferecendo visibilidade e continuidade para quem já faz diferença no campo social."
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              <img
                src="/logo-observatorio.png"
                alt="Logo Observatório do Terceiro Setor"
                className="h-8"
              />
              <span className="text-foreground font-semibold">Observatório do Terceiro Setor</span>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="#integrar-rede"
              className="inline-block bg-hubcsr-green hover:bg-hubcsr-green/90 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Quero integrar minha OSC à rede do Observatório
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSectionV2;