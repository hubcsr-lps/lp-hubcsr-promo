import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-hubcsr-01.png";


const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          <img src={logo} />
          <nav className="hidden md:flex items-center gap-8">
            <a href="#solucoes" className="text-white/90 hover:text-white transition-colors drop-shadow">
              Soluções
            </a>
            <a href="#resultados" className="text-white/90 hover:text-white transition-colors drop-shadow">
              Resultados
            </a>
            <a href="#parceiros" className="text-white/90 hover:text-white transition-colors drop-shadow">
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