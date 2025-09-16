const TransparentFundraisingSection = () => {
  const features = [
    {
      icon: "🔗",
      title: "Link exclusivo de doação → todo valor vai direto para sua conta."
    },
    {
      icon: "🎯",
      title: "Organize necessidades → mostre claramente onde o recurso será aplicado."
    },
    {
      icon: "🤝",
      title: "Conheça seus apoiadores → saiba quem são seus doadores e crie relacionamento."
    },
    {
      icon: "📈",
      title: "Transparência automática → envie relatórios e fortaleça confiança."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Captação de Recursos <span className="text-hubcsr-blue">Transparente</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Com a hubCSR, sua OSC pode captar recursos com credibilidade e sem custos escondidos:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-card border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="text-2xl flex-shrink-0">{feature.icon}</div>
                  <p className="text-lg text-gray-700 font-medium">{feature.title}</p>
                </div>
              ))}
            </div>

            {/* Visual Mockup */}
            <div className="bg-gradient-to-br from-hubcsr-blue to-hubcsr-blue/80 p-8 rounded-2xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <h4 className="font-semibold text-hubcsr-orange mb-2">Link de Doação Ativo</h4>
                  <p className="text-sm text-white/90">hubcsr.com/doar/sua-osc</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <h4 className="font-semibold text-hubcsr-orange mb-3">Relatório de Impacto</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Arrecadado este mês:</span>
                      <span className="font-semibold">R$ 2.350</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Pessoas atendidas:</span>
                      <span className="font-semibold">47 famílias</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Voluntários ativos:</span>
                      <span className="font-semibold">12 pessoas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TransparentFundraisingSection;