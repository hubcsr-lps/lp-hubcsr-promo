import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const ConversionSection = () => {
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    email: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-hubcsr-blue to-hubcsr-blue/90 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-16">
            <div className="inline-block bg-hubcsr-orange px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🎯 OFERTA DE LANÇAMENTO
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Acesso completo à hubCSR por apenas <span className="text-hubcsr-orange">R$ 350/mês</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Exclusiva, por tempo limitado, para organizações sociais que querem dar o próximo passo em profissionalização e captação de recursos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Opção 1 - Formulário */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6">
                👉 Opção 1 – Formulário rápido
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nome" className="text-white text-base font-medium">Nome</Label>
                  <Input
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-white/20 border-white/30 text-white placeholder-white/60"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <Label htmlFor="whatsapp" className="text-white text-base font-medium">WhatsApp</Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-white/20 border-white/30 text-white placeholder-white/60"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white text-base font-medium">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-white/20 border-white/30 text-white placeholder-white/60"
                    placeholder="seu@email.com"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full text-wrap h-fit bg-green-600  hover:bg-green-700 text-white py-4 text-lg rounded-lg shadow-lg"
                >
                  Quero aproveitar a oferta de lançamento
                </Button>
              </form>
            </div>

            {/* Opção 2 - Contato Direto */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6">
                👉 Opção 2 – Contato direto
              </h3>
              
              <div className="space-y-6">
                <p className="text-lg text-white/90">
                  Prefere falar primeiro?
                </p>
                
                <Button 
                  size="lg"
                  className="w-full text-wrap h-fit bg-hubcsr-orange hover:bg-hubcsr-orange/90 text-white py-4 text-lg rounded-lg shadow-lg"
                >
                  Falar agora com nossos especialistas → WhatsApp
                </Button>

                <div className="border-t border-white/20 pt-6">
                  <h4 className="font-semibold text-lg mb-4">Por que escolher a hubCSR?</h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-hubcsr-orange rounded-full mt-2 flex-shrink-0"></div>
                      <span>100% das doações vão direto para sua OSC</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-hubcsr-orange rounded-full mt-2 flex-shrink-0"></div>
                      <span>Suporte humano especializado</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-hubcsr-orange rounded-full mt-2 flex-shrink-0"></div>
                      <span>Sem fidelidade - pode cancelar quando quiser</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-hubcsr-orange rounded-full mt-2 flex-shrink-0"></div>
                      <span>Resultados em poucos dias</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ConversionSection;