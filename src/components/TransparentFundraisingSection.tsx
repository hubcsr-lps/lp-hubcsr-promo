import { useInView } from "@/hooks/useInView";

const TransparentFundraisingSection = () => {
  const { ref, isInView } = useInView();
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
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 transition-all duration-700 ${
              isInView ? 'animate-fade-in' : 'opacity-0 translate-y-8'
            }`}>
              Captação de Recursos <span className="text-hubcsr-blue">Transparente</span>
            </h2>
            <p className={`text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-700 ${
              isInView ? 'animate-fade-in-delay-1' : 'opacity-0 translate-y-8'
            }`}>
              Com a hubCSR, sua OSC pode captar recursos com credibilidade e sem custos escondidos:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Features List */}
            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <div key={index} className={`flex items-start gap-3 sm:gap-4 p-4 bg-white rounded-xl shadow-card border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-102 ${
                  isInView ? `animate-slide-in-left animate-fade-in-delay-${index + 2}` : 'opacity-0 -translate-x-8'
                }`}>
                  <div className="text-xl sm:text-2xl flex-shrink-0">{feature.icon}</div>
                  <p className="text-base sm:text-lg text-gray-700 font-medium">{feature.title}</p>
                </div>
              ))}
            </div>

            {/* Visual Mockup */}
            <div className={`bg-gradient-to-br from-hubcsr-blue to-hubcsr-blue/80 p-6 sm:p-8 rounded-2xl text-white relative overflow-hidden transition-all duration-700 mt-8 lg:mt-0 ${
              isInView ? 'animate-slide-in-right animate-fade-in-delay-3' : 'opacity-0 translate-x-8'
            }`}>
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white/10 rounded-full -mr-12 sm:-mr-16 -mt-12 sm:-mt-16"></div>
              
              <div className="relative z-10 space-y-4 sm:space-y-6">
                <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-white/20">
                  <h4 className="font-semibold text-hubcsr-green mb-2">Link de Doação Ativo</h4>
                  <p className="text-xs sm:text-sm text-white/90">hubcsr.com/doar/sua-osc</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-white/20">
                  <h4 className="font-semibold text-hubcsr-green mb-2 sm:mb-3">Relatório de Impacto</h4>
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span>Arrecadado este mês:</span>
                      <span className="font-semibold">R$ 2.350</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span>Pessoas atendidas:</span>
                      <span className="font-semibold">47 famílias</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm">
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


// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useState } from "react";
// import { useInView } from "@/hooks/useInView";
// import { supabase } from "@/integrations/supabase/client";
// import { toast } from "@/hooks/use-toast";

// const ConversionSection = () => {
//   const { ref, isInView } = useInView();
//   const [formData, setFormData] = useState({
//     nome: "",
//     TELEFONE_VALIDO: "",
//     email: "",
//     RAZAO_SOCIAL: ""
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const { data, error } = await supabase.functions.invoke('brevo-lead', {
//         body: formData
//       });

//       if (error) throw error;

//       if (data?.success) {
//         toast({
//           title: "Sucesso!",
//           description: "Seus dados foram enviados com sucesso. Entraremos em contato em breve!",
//         });

//         // Reset form
//         setFormData({
//           nome: "",
//           TELEFONE_VALIDO: "",
//           email: "",
//           RAZAO_SOCIAL: ""
//         });
//       } else {
//         throw new Error(data?.error || 'Erro desconhecido');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       toast({
//         title: "Erro",
//         description: "Houve um erro ao enviar seus dados. Tente novamente ou entre em contato pelo WhatsApp.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   return (
//     <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-hubcsr-blue to-hubcsr-blue/90 text-white">
//       <div className="container mx-auto px-4 sm:px-6">
//         <div className="max-w-5xl mx-auto">

//           <div className="text-center mb-12 sm:mb-16">
//             <div className={`inline-block bg-hubcsr-green px-3 sm:px-4 py-2 rounded-full text-sm font-semibold mb-4 sm:mb-6 transition-all duration-700 ${isInView ? 'animate-bounce-subtle animate-fade-in' : 'opacity-0 scale-95'
//               }`}>
//               🎯 OFERTA DE LANÇAMENTO
//             </div>
//             <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 transition-all duration-700 ${isInView ? 'animate-fade-in-delay-1' : 'opacity-0 translate-y-8'
//               }`}>
//               Acesso completo à hubCSR por apenas <span className="text-hubcsr-green">R$ 350/mês</span>
//             </h2>
//             <p className={`text-lg sm:text-xl text-white/90 max-w-3xl mx-auto transition-all duration-700 ${isInView ? 'animate-fade-in-delay-2' : 'opacity-0 translate-y-8'
//               }`}>
//               Exclusiva, por tempo limitado, para organizações sociais que querem dar o próximo passo em profissionalização e captação de recursos.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

//             {/* Opção 1 - Formulário */}
//             <div className={`bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20 transition-all duration-700 ${isInView ? 'animate-slide-in-left animate-fade-in-delay-3' : 'opacity-0 -translate-x-8'
//               }`}>
//               <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
//                 👉 Opção 1 – Formulário rápido
//               </h3>

//               <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
//                 <div>
//                   <Label htmlFor="nome" className="text-white text-sm sm:text-base font-medium">Nome</Label>
//                   <Input
//                     id="nome"
//                     name="nome"
//                     value={formData.nome}
//                     onChange={handleChange}
//                     required
//                     className="mt-2 bg-white/20 border-white/30 text-white placeholder-white/60"
//                     placeholder="Seu nome completo"
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="TELEFONE_VALIDO" className="text-white text-sm sm:text-base font-medium">WhatsApp</Label>
//                   <Input
//                     id="TELEFONE_VALIDO"
//                     name="TELEFONE_VALIDO"
//                     value={formData.TELEFONE_VALIDO}
//                     onChange={handleChange}
//                     required
//                     className="mt-2 bg-white/20 border-white/30 text-white placeholder-white/60"
//                     placeholder="(11) 99999-9999"
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="email" className="text-white text-sm sm:text-base font-medium">E-mail</Label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="mt-2 bg-white/20 border-white/30 text-white placeholder-white/60"
//                     placeholder="seu@email.com"
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="RAZAO_SOCIAL" className="text-white text-sm sm:text-base font-medium">Razão Social</Label>
//                   <Input
//                     id="RAZAO_SOCIAL"
//                     name="RAZAO_SOCIAL"
//                     value={formData.RAZAO_SOCIAL}
//                     onChange={handleChange}
//                     required
//                     className="mt-2 bg-white/20 border-white/30 text-white placeholder-white/60"
//                     placeholder="Nome da sua organização"
//                   />
//                 </div>

//                 <Button
//                   id="quero-aproveitar"
//                   type="submit"
//                   size="lg"
//                   disabled={isSubmitting}
//                   className="w-full text-wrap h-fit bg-hubcsr-green hover:bg-hubcsr-green/90 text-white py-3 sm:py-4 text-base sm:text-lg rounded-lg shadow-lg disabled:opacity-50"
//                 >
//                   {isSubmitting ? "Enviando..." : "Quero aproveitar a oferta de lançamento"}
//                 </Button>
//               </form>
//             </div>

//             {/* Opção 2 - Contato Direto */}
//             <div className={`bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20 transition-all duration-700 ${isInView ? 'animate-slide-in-right animate-fade-in-delay-3' : 'opacity-0 translate-x-8'
//               }`}>
//               <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
//                 👉 Opção 2 – Contato direto
//               </h3>

//               <div className="space-y-4 sm:space-y-6">
//                 <p className="text-base sm:text-lg text-white/90">
//                   Prefere falar primeiro?
//                 </p>

//                 <a
//                   href="http://wa.me/+5511917124081?text=Ol%C3%A1%21+Quero+minha+OSC+organizada+em+at%C3%A9+7+dias&type=phone_number&app_absent=0"
//                   className=" flex items-center justify-center w-full text-wrap h-fit bg-hubcsr-green hover:bg-hubcsr-green/90 text-white py-3 sm:py-4 text-base sm:text-lg rounded-lg shadow-lg"
//                 >
//                   Falar agora com nossos especialistas → WhatsApp
//                 </a>

//                 <div className="border-t border-white/20 pt-4 sm:pt-6">
//                   <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Por que escolher a hubCSR?</h4>
//                   <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-white/90">
//                     <li className="flex items-start gap-3">
//                       <div className="w-2 h-2 bg-hubcsr-green rounded-full mt-2 flex-shrink-0"></div>
//                       <span>100% das doações vão direto para sua OSC</span>
//                     </li>
//                     <li className="flex items-start gap-3">
//                       <div className="w-2 h-2 bg-hubcsr-green rounded-full mt-2 flex-shrink-0"></div>
//                       <span>Suporte humano especializado</span>
//                     </li>
//                     <li className="flex items-start gap-3">
//                       <div className="w-2 h-2 bg-hubcsr-green rounded-full mt-2 flex-shrink-0"></div>
//                       <span>Sem fidelidade - pode cancelar quando quiser</span>
//                     </li>
//                     <li className="flex items-start gap-3">
//                       <div className="w-2 h-2 bg-hubcsr-green rounded-full mt-2 flex-shrink-0"></div>
//                       <span>Resultados em poucos dias</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ConversionSection;
