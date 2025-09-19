import { useInView } from "@/hooks/useInView";

const HumanSupportSection = () => {
  const { ref, isInView } = useInView();
  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-hubcsr-light-blue/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 transition-all duration-700 ${isInView ? 'animate-fade-in' : 'opacity-0 translate-y-8'
              }`}>
              Uma rede para fortalecer quem <span className="text-hubcsr-blue">já faz diferença.</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">

            {/* WhatsApp Mockup */}
            <div className="flex-1 w-full">
              <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 max-w-sm mx-auto transition-all duration-700 ${isInView ? 'animate-slide-in-left animate-fade-in-delay-3' : 'opacity-0 -translate-x-8'
                }`}>

                {/* Phone Header */}
                <div className="bg-gray-900 h-6 sm:h-8 flex items-center justify-center">
                  <div className="w-24 sm:w-32 h-3 sm:h-4 bg-gray-800 rounded-full"></div>
                </div>

                {/* WhatsApp Header */}
                <div className="bg-green-600 text-white p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-xs sm:text-sm font-semibold">HC</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">Equipe hubCSR + OSC Pioneira</h4>
                    <p className="text-xs text-green-100">online</p>
                  </div>
                </div>

                {/* Messages */}
                <div className="p-3 sm:p-4 space-y-2 sm:space-y-3 bg-green-50 min-h-[250px] sm:min-h-[300px]">
                  <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm max-w-xs">
                    <p className="text-xs sm:text-sm text-gray-700">Olá! Bem-vindos à hubCSR 👋</p>
                    <p className="text-xs text-gray-500 mt-1">Especialista Ana - 09:15</p>
                  </div>

                  <div className="bg-green-500 text-white p-2 sm:p-3 rounded-lg shadow-sm max-w-xs ml-auto">
                    <p className="text-xs sm:text-sm">Obrigada! Estamos ansiosos para começar 🙂</p>
                    <p className="text-xs text-green-100 mt-1">09:18</p>
                  </div>

                  <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm max-w-xs">
                    <p className="text-xs sm:text-sm text-gray-700">Perfeito! Vamos começar pelo minisite. Vocês já têm o logo da organização?</p>
                    <p className="text-xs text-gray-500 mt-1">Especialista Ana - 09:20</p>
                  </div>

                  <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm max-w-xs">
                    <p className="text-xs sm:text-sm text-gray-700">📱 Estou aqui para qualquer dúvida no processo!</p>
                    <p className="text-xs text-gray-500 mt-1">Suporte Marco - 09:25</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-6 sm:space-y-8 w-full">
              <div className="space-y-4 sm:space-y-6">
                <div className={`flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-card border border-hubcsr-blue/20 hover:shadow-lg transition-all duration-300 ${isInView ? 'animate-fade-in-scale-delay-4' : 'opacity-0 scale-95'
                  }`}>
                  <div className="text-xl sm:text-2xl">👥</div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-600">O Observatório do Terceiro Setor é referência nacional em comunicação e fortalecimento do campo social.</p>
                  </div>
                </div>

                <div className={`flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-card border border-hubcsr-blue/20 hover:shadow-lg transition-all duration-300 ${isInView ? 'animate-fade-in-scale-delay-5' : 'opacity-0 scale-95'
                  }`}>
                  <div className="text-xl sm:text-2xl">⚡</div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-600">A hubCSR é a plataforma que organiza e dá continuidade às iniciativas sociais com dados, páginas próprias e relatórios prontos.

                    </p>
                  </div>
                </div>

                <div className={`flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-card border border-hubcsr-blue/20 hover:shadow-lg transition-all duration-300 ${isInView ? 'animate-fade-in-scale-delay-6' : 'opacity-0 scale-95'
                  }`}>
                  <div className="text-xl sm:text-2xl">🎯</div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-600">Juntas, criamos uma ponte entre visibilidade e infraestrutura: sua OSC terá mais presença, apoio e resultados reais.

                    </p>
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