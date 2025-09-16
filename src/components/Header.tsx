import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-hubcsr-01.png";


const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          
          <img src={logo} alt="hubCSR Logo" className="h-8 sm:h-10 w-auto" />
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#solucoes" className="text-white/90 hover:text-white transition-colors drop-shadow text-sm lg:text-base">
              Soluções
            </a>
            <a href="#resultados" className="text-white/90 hover:text-white transition-colors drop-shadow text-sm lg:text-base">
              Resultados
            </a>
            <a href="#parceiros" className="text-white/90 hover:text-white transition-colors drop-shadow text-sm lg:text-base">
              Parceiros
            </a>
          </nav>
          <Button 
            variant="default" 
            className="bg-hubcsr-green hover:bg-hubcsr-green/90 text-white px-3 sm:px-6 py-2 text-sm sm:text-base rounded-lg shadow-button"
          >
            <span className="hidden sm:inline">Entre em contato</span>
            <span className="sm:hidden">Contato</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;