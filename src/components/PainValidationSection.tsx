import { Button } from "@/components/ui/button";

const PainValidationSection = () => {
  const painPoints = [
    {
      icon: "⏳",
      title: "Tempo perdido em planilhas e grupos de WhatsApp"
    },
    {
      icon: "💸",
      title: "Dinheiro desperdiçado em ferramentas soltas e treinamentos"
    },
    {
      icon: "📑",
      title: "Relatórios atrasados que desgastam sua equipe"
    },
    {
      icon: "👥",
      title: "Voluntários dispersos sem engajamento real"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-hubcsr-light-blue to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 leading-tight">
            Esses problemas travam o crescimento da sua OSC:
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {painPoints.map((pain, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-card border border-gray-100">
                <div className="text-3xl">{pain.icon}</div>
                <p className="text-lg text-gray-700 font-medium text-left">{pain.title}</p>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Você já faz muito com pouco. Mas sem organização e dados claros, captar recursos fica mais difícil.
              <br />
              <span className="font-semibold text-hubcsr-green">👉 Com a hubCSR, esse ciclo pode mudar em até 7 dias.</span>
            </p>
            
            <Button 
              size="lg"
              className="bg-hubcsr-green hover:bg-hubcsr-green/90 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Quero minha OSC organizada em até 7 dias
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PainValidationSection;