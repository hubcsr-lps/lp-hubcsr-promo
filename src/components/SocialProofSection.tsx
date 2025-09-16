import { useInView } from "@/hooks/useInView";

const SocialProofSection = () => {
  const { ref, isInView } = useInView();
  const organizations = [
    {
      name: "Instituto Ayrton Senna",
      logo: "/logos/logo-01.png"
    },
    {
      name: "Fundação Roberto Marinho",
      logo: "/logos/logo-02.png"
    },
    {
      name: "Instituto Unilever",
      logo: "/logos/logo-03.png"
    },
    {
      name: "Banco Bradesco",
      logo: "/logos/logo-04.png"
    }
  ];

  const animationDelays = [
    "animate-fade-in-delay-1",
    "animate-fade-in-delay-2", 
    "animate-fade-in-delay-3",
    "animate-fade-in-delay-4",
    "animate-fade-in-delay-5",
    "animate-fade-in-delay-6"
  ];

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 transition-all duration-700 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            Organizações que confiam na hubCSR
          </h2>
          <p className={`text-muted-foreground text-base sm:text-lg mb-8 sm:mb-12 transition-all duration-700 ${
            isInView ? 'animate-slide-in-right animate-fade-in-delay-1' : 'opacity-0 translate-x-8'
          }`}>
            Conectamos empresas a mais de 360 organizações parceiras
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 cursor-pointer gap-4 sm:gap-6 lg:gap-8 items-center">
            {organizations.map((org, index) => (
              <div 
                key={index} 
                className={`p-3 sm:p-4 border border-border rounded-lg bg-card hover:shadow-lg hover:shadow-hubcsr-green/20 hover:scale-105 transition-all duration-300 flex items-center justify-center min-h-[60px] sm:min-h-[80px] ${
                  isInView ? animationDelays[index] : 'opacity-0 scale-95'
                }`}
              >
                <img
                  src={org.logo}
                  alt={`Logo ${org.name}`}
                  className="max-w-full h-auto opacity-70 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 hover:scale-110"
                  style={{ height: '100px', objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;