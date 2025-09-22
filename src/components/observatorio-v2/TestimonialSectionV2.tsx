import { X, Check } from "lucide-react";

const TestimonialSectionV2 = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-foreground">
            Sustentabilidade e Investimento Inteligente
          </h2>

          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Muitas OSCs gastam tempo e recursos em ferramentas isoladas que não conversam entre si. Na parceria, sua organização tem tudo em um só lugar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Ferramentas Soltas */}
            <div className="bg-red-50 dark:bg-red-950/20 p-8 rounded-2xl border border-red-200 dark:border-red-800">
              <h3 className="text-2xl font-bold mb-6 text-red-700 dark:text-red-400 text-center">
                Ferramentas soltas
              </h3>
              <div className="space-y-4">
                {[
                  "Planilhas",
                  "E-mail Marketing",
                  "Formulários",
                  "Site desatualizado"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <X className="h-5 w-5 text-red-500" />
                    <span className="text-red-700 dark:text-red-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Plataforma Integrada */}
            <div className="bg-green-50 dark:bg-green-950/20 p-8 rounded-2xl border border-green-200 dark:border-green-800">
              <h3 className="text-2xl font-bold mb-6 text-hubcsr-green text-center">
                Plataforma Integrada
              </h3>
              <div className="space-y-4">
                {[
                  "Página Social",
                  "Gestão de Voluntários",
                  "Relatórios de Impacto",
                  "Comunicação Unificada"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-hubcsr-green" />
                    <span className="text-hubcsr-green">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center bg-hubcsr-green/10 p-8 rounded-2xl border border-hubcsr-green/20">
            <div className="max-w-2xl mx-auto">
              <p className="text-2xl font-bold text-hubcsr-green mb-4">
                Por apenas R$ 350/mês, sua organização tem tudo.
              </p>
              <p className="text-lg text-muted-foreground mb-2">
                Duas doações de R$ 200 já cobrem o investimento.
              </p>
              <p className="text-base text-muted-foreground">
                Mais do que custo, é um ganho de tempo, clareza e confiança para sua OSC.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="#comecar-agora"
              className="inline-block bg-hubcsr-green hover:bg-hubcsr-green/90 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Quero começar agora por R$ 350/mês
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSectionV2;