import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const ConversionSection = () => {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState({
    nome: "",
    TELEFONE_VALIDO: "",
    email: "",
    RAZAO_SOCIAL: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('brevo-lead', {
        body: formData
      });

      if (error) throw error;

      if (data?.success) {
        toast({
          title: "Sucesso!",
          description: "Seus dados foram enviados com sucesso. Entraremos em contato em breve!",
        });

        // Reset form
        setFormData({
          nome: "",
          TELEFONE_VALIDO: "",
          email: "",
          RAZAO_SOCIAL: ""
        });
      } else {
        throw new Error(data?.error || 'Erro desconhecido');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Erro",
        description: "Houve um erro ao enviar seus dados. Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const IconDonation = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-hubcsr-green">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    </svg>
  );

  const IconSupport = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-hubcsr-green">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>
    </svg>
  );

  const IconNoFidelity = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-hubcsr-green">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line>
    </svg>
  );

  const IconClock = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-hubcsr-green">
      <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );


  // --- Dados para os cards, tornando o código mais limpo ---
  const features = [
    {
      icon: <IconDonation />,
      strongText: '100% das doações',
      regularText: 'direto para sua OSC',
    },
    {
      icon: <IconSupport />,
      strongText: 'Suporte humano',
      regularText: 'por diversos canais',
    },
    {
      icon: <IconNoFidelity />,
      strongText: 'Sem fidelidade,',
      regularText: 'cancele quando quiser',
    },
    {
      icon: <IconClock />,
      strongText: 'Resultados visíveis',
      regularText: 'em até 7 dias',
    },
  ];
  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-hubcsr-blue to-hubcsr-blue/90 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 transition-all duration-700 ${isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}>
              👉 Acesso completo à hubCSR por apenas R$ 350/mês
            </h2>
            <p className={`text-lg sm:text-xl text-white/90 max-w-3xl mx-auto transition-all duration-700 ${isInView ? 'animate-fade-in-delay-1' : 'opacity-0 translate-y-8'
              }`}>
              Sem fidelidade. Resultados em até 7 dias.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-start">
            <div className={`w-full lg:w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 pt-6 lg:pt-0 transition-all duration-700 ${isInView ? 'animate-slide-in-right animate-fade-in-delay-3' : 'opacity-0 translate-x-8'
              }`}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border-white/20 border p-4 rounded-xl   transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  {feature.icon}
                  <p className="text-white text-sm">
                    <strong className="font-semibold text-white">{feature.strongText}</strong> {feature.regularText}
                  </p>
                </div>
              ))}
            </div>
            {/* Box principal (CTA) */}
            <div id="quero-aproveitar" className={`bg-white/10 backdrop-blur-sm border-white/20 border p-6  sm:p-8 rounded-2xl   transition-all duration-700 ${isInView ? 'animate-slide-in-left animate-fade-in-delay-2' : 'opacity-0 -translate-x-8'
              }`}>
              <h3 className="text-xl  sm:text-2xl font-bold mb-4">
                💬 Fale agora com nossos especialistas
              </h3>
              <p className="text-white/90 mb-6">
                Nossa equipe está disponível por diversos canais (WhatsApp, e-mail e chamadas) para apoiar sua OSC desde o primeiro dia.
              </p>

              <a
                href="http://wa.me/+5511917124081?text=Ol%C3%A1%21+Quero+minha+OSC+organizada+em+at%C3%A9+7+dias&type=phone_number&app_absent=0"
                className=" flex text-center items-center justify-center w-full text-wrap h-fit bg-hubcsr-green hover:bg-hubcsr-green/90 text-white font-bold py-3 sm:py-4 text-base sm:text-lg rounded-lg shadow-lg"
              >
                ➡ Quero falar com um especialista agora
              </a>
            </div>


          </div>

        </div>
      </div>
    </section>
  );
};

export default ConversionSection;