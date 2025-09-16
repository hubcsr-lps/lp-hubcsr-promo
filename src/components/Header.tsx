import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-hubcsr-blue">
            hub<span className="text-hubcsr-orange">CSR</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#solucoes" className="text-gray-600 hover:text-hubcsr-blue transition-colors">
              Soluções
            </a>
            <a href="#resultados" className="text-gray-600 hover:text-hubcsr-blue transition-colors">
              Resultados
            </a>
            <a href="#parceiros" className="text-gray-600 hover:text-hubcsr-blue transition-colors">
              Parceiros
            </a>
          </nav>
          <Button 
            variant="default" 
            className="bg-hubcsr-orange hover:bg-hubcsr-orange/90 text-white px-6 py-2 rounded-lg shadow-button"
          >
            Entre em contato
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;