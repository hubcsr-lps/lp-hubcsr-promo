import { useInView } from "@/hooks/useInView";

const ConversionSection = () => {
  const { ref, isInView } = useInView();

  // --- Ícones para os novos benefícios ---
  const IconPage = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-hubcsr-green"><rect width="18" height="18" x="3" y="3" rx="2" /><line x1="3" x2="21" y1="9" y2="9" /><line x1="9" x2="9" y1="21" y2="9" /></svg>
  );
  const IconProjects = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-hubcsr-green"><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"/><path d="M14 2v6h6"/><path d="M3 15h6"/><path d="M6 12v6"/></svg>
  );
  const IconVolunteer = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-hubcsr-green"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  );
  const IconReport = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-hubcsr-green"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="M8 18v-1"/><path d="M16 18v-3"/></svg>
  );
  const IconSupport = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-hubcsr-green"><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" x2="6" y1="1" y2="4" /><line x1="10" x2="10" y1="1" y2="4" /><line x1="14" x2="14" y1="1" y2="4" /></svg>
  );
  const IconPartnership = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-hubcsr-green"><path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" x2="16" y1="12" y2="12"/></svg>
  );
  const IconNetwork = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-hubcsr-green"><circle cx="12" cy="5" r="3"/><path d="M12 22v-4"/><path d="m17 14-3-3-3 3"/><path d="M12 8v5"/><path d="m7 14 3-3 3 3"/><path d="M20 14h-4"/><path d="M4 14h4"/></svg>
  );

  const benefits = [
    { icon: <IconPage />, text: 'Página social exclusiva (minisite com identidade da OSC)' },
    { icon: <IconProjects />, text: 'Publicação de projetos e histórico da organização' },
    { icon: <IconVolunteer />, text: 'Gestão de voluntariado com certificados automáticos' },
    { icon: <IconReport />, text: 'Relatórios prontos para prestação de contas' },
    { icon: <IconSupport />, text: 'Suporte humano + kit de implementação' },
    { icon: <IconPartnership />, text: 'Parceria institucional com o Observatório do 3º Setor' },
    { icon: <IconNetwork />, text: 'Acesso à rede de pessoas voluntárias do Observatório' },
  ];

  return (
    <section ref={ref} id="quero-aproveitar" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-hubcsr-blue to-hubcsr-blue/90 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold transition-all duration-700 ${isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
              Benefícios para sua OSC
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 sm:mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 transition-all duration-500 ${isInView ? `animate-fade-in-delay-${index + 1}` : 'opacity-0 translate-y-4'}`}
              >
                {benefit.icon}
                <p className="text-white/95 text-base sm:text-lg">{benefit.text}</p>
              </div>
            ))}
          </div>

          <div className={`text-center transition-all duration-700 ${isInView ? 'animate-fade-in-scale-delay-7' : 'opacity-0 scale-95'}`}>
            <a
              href="http://wa.me/+5511917124081?text=Ol%C3%A1%21+Quero+esses+benef%C3%ADcios+para+minha+OSC.&type=phone_number&app_absent=0"
              className="inline-block bg-hubcsr-green hover:bg-hubcsr-green/90 text-white font-bold px-8 py-4 text-base sm:text-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Quero esses benefícios para minha OSC
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionSection;