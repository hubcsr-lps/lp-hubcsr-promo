const SocialProofSection = () => {
  const organizations = [
    "Instituto Ayrton Senna",
    "Fundação Roberto Marinho",
    "Instituto Unilever",
    "Banco Bradesco",
    "Petrobras",
    "Vale"
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
              <div key={index} className="p-4 border border-border rounded-lg bg-card hover:shadow-card transition-shadow">
                <p className="text-sm font-medium text-card-foreground">{org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;