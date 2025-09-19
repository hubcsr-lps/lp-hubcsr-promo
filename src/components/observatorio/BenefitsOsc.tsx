const BenefitsOsc = () => {
    return (
        <section className={`my-20 max-w-5xl mx-auto bg-gradient-to-r from-hubcsr-blue to-hubcsr-blue/80 text-white p-6 sm:p-8 rounded-2xl transition-all duration-700 `}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
                ⚡ Benefícios para sua OSC
            </h3>

            <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-hubcsr-green rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-base sm:text-lg text-white/95">
                        Página social exclusiva (minisite com identidade da OSC)
                    </span>
                </div>
                <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-hubcsr-green rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-base sm:text-lg text-white/95">
                        Publicação de projetos e histórico da organização
                    </span>
                </div>
                <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-hubcsr-green rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-base sm:text-lg text-white/95">
                        Gestão de voluntariado com certificados automáticos
                    </span>
                </div>
                <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-hubcsr-green rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-base sm:text-lg text-white/95">
                        Relatórios prontos para prestação de contas com transparência
                    </span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/20">
                    <p className="text-base sm:text-lg">
                        👉 <span className="font-semibold">
                            Acesso à rede de pessoas voluntárias do Observatório
                        </span> e Suporte humano + kit de implementação
                    </p>
                </div>
            </div>
        </section>
    )
}




export default BenefitsOsc;