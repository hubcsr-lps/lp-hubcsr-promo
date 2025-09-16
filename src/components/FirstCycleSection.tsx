const FirstCycleSection = () => {
  const initialFeatures = [
    {
      icon: "🌐",
      title: "Publicar um minisite exclusivo com logo, projetos e histórico."
    },
    {
      icon: "🤝",
      title: "Ativar voluntariado com vagas simples."
    },
    {
      icon: "📋",
      title: "Cadastrar projetos ou eventos (novos ou históricos)."
    },
    {
      icon: "📊",
      title: "Emitir relatórios básicos para parceiros."
    }
  ];

  const unlockFeatures = [
    "Link exclusivo de doação (100% direto para sua OSC, sem taxas).",
    "Página de doações pronta para compartilhar.",
    "Relatórios para doadores e parceiros."
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Seu primeiro ciclo: <span className="text-hubcsr-blue">seu primeiro resultado</span>
            </h2>
            <p className="text-xl text-gray-600">
              No seu primeiro ciclo de uso, sua OSC já pode:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {initialFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-hubcsr-light-blue/30 rounded-xl border border-hubcsr-blue/20">
                <div className="text-2xl">{feature.icon}</div>
                <p className="text-lg text-gray-700 font-medium">{feature.title}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-hubcsr-blue to-hubcsr-blue/80 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              ⚡️ Ao concluir, você desbloqueia:
            </h3>
            
            <div className="space-y-4 mb-8">
              {unlockFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-hubcsr-orange rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-white/95">{feature}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <p className="text-lg">
                👉 <span className="font-semibold">Algumas OSCs fazem em 3 dias, outras em 7.</span> O ritmo é seu, 
                mas nosso time acompanha em cada passo.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FirstCycleSection;