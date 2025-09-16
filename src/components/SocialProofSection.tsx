const SocialProofSection = () => {
  const organizations = [
    {
      name: "Instituto Ayrton Senna",
      logo: "https://via.placeholder.com/150x60/e5e7eb/374151?text=Instituto+Senna"
    },
    {
      name: "Fundação Roberto Marinho",
      logo: "https://via.placeholder.com/150x60/e5e7eb/374151?text=FRM"
    },
    {
      name: "Instituto Unilever",
      logo: "https://via.placeholder.com/150x60/e5e7eb/374151?text=Unilever"
    },
    {
      name: "Banco Bradesco",
      logo: "https://via.placeholder.com/150x60/e5e7eb/374151?text=Bradesco"
    },
    {
      name: "Petrobras",
      logo: "https://via.placeholder.com/150x60/e5e7eb/374151?text=Petrobras"
    },
    {
      name: "Vale",
      logo: "https://via.placeholder.com/150x60/e5e7eb/374151?text=Vale"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Organizações que confiam na hubCSR
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Conectamos empresas a mais de 360 organizações parceiras
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {organizations.map((org, index) => (
              <div key={index} className="p-4 border border-border rounded-lg bg-card hover:shadow-card transition-shadow flex items-center justify-center min-h-[80px]">
                <img
                  src={org.logo}
                  alt={`Logo ${org.name}`}
                  className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  style={{ maxHeight: '60px', objectFit: 'contain' }}
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