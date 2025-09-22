const OfferSectionV2 = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-foreground">
            Entre para a rede que <br />
            <span className="text-hubcsr-green">fortalece o Terceiro Setor.</span>
          </h2>

          <div className="bg-gradient-to-br from-hubcsr-green/10 to-hubcsr-orange/10 p-8 sm:p-12 rounded-3xl border border-hubcsr-green/20 shadow-xl">
            <div className="max-w-2xl mx-auto">
              <div className="mb-8">
                <div className="inline-block bg-hubcsr-green/20 border border-hubcsr-green/30 p-2 rounded-full mb-4">
                  <span className="bg-hubcsr-green text-white px-4 py-2 rounded-full text-sm font-semibold">
                    CONDIÇÃO ESPECIAL
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Ative sua página agora
                </h3>
                <p className="text-lg text-muted-foreground">
                  Sem fidelidade. Cancelamento simples.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="#ativar-pagina"
                  className="block w-full bg-hubcsr-green hover:bg-hubcsr-green/90 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center text-lg"
                >
                  Ativar minha página agora
                </a>
                
                <p className="text-sm text-muted-foreground">
                  Ao clicar, você será direcionado para nossa equipe de implementação
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-sm text-muted-foreground">
            <p>
              💚 Parceria entre Observatório do Terceiro Setor e hubCSR
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSectionV2;