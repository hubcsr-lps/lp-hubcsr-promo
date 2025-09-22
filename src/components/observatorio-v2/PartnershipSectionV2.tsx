const PartnershipSectionV2 = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-foreground">
            Benefícios para sua OSC
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-hubcsr-green/10 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-hubcsr-green rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Página social exclusiva</h3>
              <p className="text-muted-foreground">(minisite com identidade da OSC)</p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-hubcsr-green/10 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-hubcsr-green rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Publicação de projetos</h3>
              <p className="text-muted-foreground">e histórico da organização</p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-hubcsr-green/10 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-hubcsr-green rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Gestão de voluntariado</h3>
              <p className="text-muted-foreground">com certificados automáticos</p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-hubcsr-green/10 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-hubcsr-green rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Relatórios prontos</h3>
              <p className="text-muted-foreground">para prestação de contas com transparência</p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-hubcsr-green/10 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-hubcsr-green rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Suporte humano</h3>
              <p className="text-muted-foreground">+ kit de implementação</p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-hubcsr-green/10 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-hubcsr-green rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Parceria institucional</h3>
              <p className="text-muted-foreground">com o Observatório do Terceiro Setor</p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-shadow md:col-span-3">
              <div className="w-12 h-12 bg-hubcsr-green/10 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-hubcsr-green rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Acesso à rede de pessoas voluntárias</h3>
              <p className="text-muted-foreground">do Observatório</p>
              <div className="mt-4 text-center">
                <p className="text-muted-foreground">Mockup de um relatório de impacto</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#quero-beneficios"
              className="inline-block bg-hubcsr-green hover:bg-hubcsr-green/90 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Quero esses benefícios para minha OSC
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSectionV2;