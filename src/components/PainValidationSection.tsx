import { Button } from "@/components/ui/button";

const PainValidationSection = () => {
  const painPoints = [
    {
      icon: "⏳",
      title: "Tempo perdido em planilhas e grupos de WhatsApp"
    },
    {
      icon: "💸",
      title: "Dinheiro gasto em ferramentas soltas e treinamentos"
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
              <span className="font-semibold text-hubcsr-blue"> Esse ciclo pode mudar em poucos dias.</span>
            </p>
            
            <Button 
              size="lg"
              className="bg-hubcsr-blue hover:bg-hubcsr-blue/90 text-white px-8 py-4 text-lg rounded-lg shadow-button"
            >
              👉 Quero ver como funciona
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PainValidationSection;