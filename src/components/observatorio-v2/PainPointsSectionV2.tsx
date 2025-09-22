const PainPointsSectionV2 = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-hubcsr-green via-hubcsr-green to-hubcsr-green/80">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 animate-fade-in-up">
            Uma rede para fortalecer quem já faz diferença.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="text-xl font-bold mb-4">Observatório do Terceiro Setor</h3>
              <p className="text-white/90">
                É referência nacional em comunicação e fortalecimento do campo social.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="text-xl font-bold mb-4">hubCSR</h3>
              <p className="text-white/90">
                É a plataforma que organiza e dá continuidade às iniciativas sociais com dados, páginas próprias e relatórios prontos.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <p className="text-lg text-white/90">
              Juntas, criamos uma ponte entre visibilidade e infraestrutura: sua OSC terá mais presença, apoio e resultados reais.
            </p>
            <div className="mt-6">
              <p className="text-white/70">Ilustração da parceria</p>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="#quero-ser-parceira"
              className="inline-block bg-white text-hubcsr-green hover:bg-white/90 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Quero ser parceira institucional do Observatório
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSectionV2;