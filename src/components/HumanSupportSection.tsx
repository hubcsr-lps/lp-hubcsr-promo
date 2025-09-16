const HumanSupportSection = () => {
  return (
    <section className="py-20 bg-hubcsr-light-blue/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Suporte <span className="text-hubcsr-blue">Humano</span>
            </h2>
            <p className="text-2xl text-hubcsr-blue font-semibold mb-8">
              Você não fica sozinho.
            </p>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nossa equipe cria um grupo exclusivo no WhatsApp com especialistas prontos para apoiar cada etapa do seu ciclo inicial.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* WhatsApp Mockup */}
            <div className="flex-1">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 max-w-sm mx-auto">
                
                {/* Phone Header */}
                <div className="bg-gray-900 h-8 flex items-center justify-center">
                  <div className="w-32 h-4 bg-gray-800 rounded-full"></div>
                </div>
                
                {/* WhatsApp Header */}
                <div className="bg-green-600 text-white p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">HC</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Equipe hubCSR + OSC Pioneira</h4>
                    <p className="text-xs text-green-100">online</p>
                  </div>
                </div>
                
                {/* Messages */}
                <div className="p-4 space-y-3 bg-green-50 min-h-[300px]">
                  <div className="bg-white p-3 rounded-lg shadow-sm max-w-xs">
                    <p className="text-sm text-gray-700">Olá! Bem-vindos à hubCSR 👋</p>
                    <p className="text-xs text-gray-500 mt-1">Especialista Ana - 09:15</p>
                  </div>
                  
                  <div className="bg-green-500 text-white p-3 rounded-lg shadow-sm max-w-xs ml-auto">
                    <p className="text-sm">Obrigada! Estamos ansiosos para começar 🙂</p>
                    <p className="text-xs text-green-100 mt-1">09:18</p>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg shadow-sm max-w-xs">
                    <p className="text-sm text-gray-700">Perfeito! Vamos começar pelo minisite. Vocês já têm o logo da organização?</p>
                    <p className="text-xs text-gray-500 mt-1">Especialista Ana - 09:20</p>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg shadow-sm max-w-xs">
                    <p className="text-sm text-gray-700">📱 Estou aqui para qualquer dúvida no processo!</p>
                    <p className="text-xs text-gray-500 mt-1">Suporte Marco - 09:25</p>
                  </div>
                </div>
                
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-card border border-hubcsr-blue/20">
                  <div className="text-2xl">👥</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Especialistas Dedicados</h4>
                    <p className="text-gray-600">Time experiente em gestão de ONGs e captação de recursos.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-card border border-hubcsr-blue/20">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Suporte Rápido</h4>
                    <p className="text-gray-600">Resposta em até 2 horas durante dias úteis.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-card border border-hubcsr-blue/20">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Acompanhamento Personalizado</h4>
                    <p className="text-gray-600">Cada OSC tem um plano específico baseado em suas necessidades.</p>
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

export default HumanSupportSection;