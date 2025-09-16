const SocialProofSection = () => {
  const testimonials = [
    {
      quote: "Publicamos nosso minisite em poucos dias e já recebemos nossas primeiras doações.",
      author: "ONG comunitária RJ"
    },
    {
      quote: "Agora temos relatórios claros para apresentar a editais e parceiros.",
      author: "Associação MG"
    },
    {
      quote: "Antes gastávamos R$ 700/mês em ferramentas soltas. Hoje resolvemos tudo por R$ 350.",
      author: "OSC SP"
    }
  ];

  const stats = [
    { number: "80+", label: "OSCs já estruturadas" },
    { number: "160+", label: "líderes e mentores ativos" },
    { number: "9,1", label: "nota em clareza e relevância" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Prova Social e <span className="text-hubcsr-blue">Confiança</span>
            </h2>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-hubcsr-light-blue/30 rounded-xl border border-hubcsr-blue/20">
                <div className="text-4xl md:text-5xl font-bold text-hubcsr-blue mb-2">{stat.number}</div>
                <p className="text-lg text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-card border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-hubcsr-blue text-4xl mb-4">"</div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4 italic">
                  {testimonial.quote}
                </p>
                <p className="text-hubcsr-blue font-semibold">— {testimonial.author}</p>
              </div>
            ))}
          </div>

          {/* Partners */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Parceiros</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="bg-gray-100 px-6 py-3 rounded-lg">
                <span className="text-gray-600 font-medium">Observatório do Terceiro Setor</span>
              </div>
              <div className="bg-gray-100 px-6 py-3 rounded-lg">
                <span className="text-gray-600 font-medium">Soul Alegria</span>
              </div>
              <div className="bg-gray-100 px-6 py-3 rounded-lg">
                <span className="text-gray-600 font-medium">Instituto Bem Fazer</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;