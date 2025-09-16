const SocialProofSection = () => {
  const stats = [
    { number: "5K+", label: "Horas de impacto social gerado" },
    { number: "97%", label: "De satisfação dos clientes" },
    { number: "360+", label: "Parceiros conectados" }
  ];

  return (
    <section className="py-20" style={{ background: 'var(--gradient-green)' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Main text */}
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Cada número vem de ações de impacto reais.
              </h2>
            </div>

            {/* Right side - Stats cards */}
            <div className="space-y-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30">
                  <div className="flex items-center justify-between">
                    <div className="text-5xl md:text-6xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-right">
                      <p className="text-white text-lg font-medium">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;