const FinalCTASectionV2 = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-hubcsr-green via-hubcsr-green to-hubcsr-green/80 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
            Sua OSC merece ter <br />
            <span className="text-hubcsr-orange">visibilidade e continuidade.</span>
          </h2>

          <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Junte-se às organizações que já escolheram crescer com infraestrutura digital completa e o apoio do Observatório do Terceiro Setor.
          </p>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 mb-8">
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-hubcsr-orange mb-2">350+</div>
                <div className="text-white/80">OSCs já na plataforma</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-hubcsr-orange mb-2">R$ 350</div>
                <div className="text-white/80">por mês</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-hubcsr-orange mb-2">7 dias</div>
                <div className="text-white/80">para ativar</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <a
              href="#ativar-final"
              className="inline-block bg-white text-hubcsr-green hover:bg-white/90 font-bold px-12 py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
            >
              Quero ativar minha página agora
            </a>
            
            <p className="text-white/80 text-sm">
              Sem fidelidade • Suporte incluso • Garantia de satisfação
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASectionV2;