const InvestmentSectionV2 = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-hubcsr-green/10 to-hubcsr-orange/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-hubcsr-green/20 border border-hubcsr-green/30 p-2 rounded-full inline-block mb-6">
            <span className="bg-hubcsr-green text-white px-4 py-2 rounded-full text-sm font-semibold">
              OFERTA EXCLUSIVA
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-foreground">
            Oferta Exclusiva de Lançamento
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Esta é a fase inicial da parceria entre Observatório + hubCSR. As organizações que entrarem agora terão:
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card p-6 rounded-2xl border border-border shadow-lg">
              <div className="w-16 h-16 bg-hubcsr-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-hubcsr-green rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Apoio Próximo</h3>
              <p className="text-muted-foreground">
                Acompanhamento direto da nossa equipe de implementação.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-lg">
              <div className="w-16 h-16 bg-hubcsr-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-hubcsr-green rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Reconhecimento</h3>
              <p className="text-muted-foreground">
                Destaque como parceira institucional do Observatório.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-lg">
              <div className="w-16 h-16 bg-hubcsr-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-hubcsr-green rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Condição Especial</h3>
              <p className="text-muted-foreground">
                Valor promocional de R$ 350/mês garantido.
              </p>
            </div>
          </div>

          <div className="bg-hubcsr-green/10 p-8 rounded-2xl border border-hubcsr-green/20">
            <h3 className="text-2xl font-bold text-hubcsr-green mb-4">
              Garante já sua condição especial!
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Número limitado de organizações nesta primeira fase.
            </p>
            <a
              href="#garantir-condicao"
              className="inline-block bg-hubcsr-green hover:bg-hubcsr-green/90 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Quero garantir minha condição especial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSectionV2;