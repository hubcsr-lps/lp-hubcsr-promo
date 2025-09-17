import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-hubcsr-01.png";


const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">

          <img src={logo} alt="hubCSR Logo" className="h-8 sm:h-10 w-auto" />
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#desafios" className="text-white/90 hover:text-white transition-colors drop-shadow text-sm lg:text-base">
              Desafios
            </a>
            <a href="#solucao" className="text-white/90 hover:text-white transition-colors drop-shadow text-sm lg:text-base">
              Solução
            </a>
            <a href="#parceiros" className="text-white/90 hover:text-white transition-colors drop-shadow text-sm lg:text-base">
              Parceiros impactados
            </a>
          </nav>
          <a
            href="http://wa.me/+5511917124081?text=Ol%C3%A1%21+Quero+minha+OSC+organizada+em+at%C3%A9+7+dias&type=phone_number&app_absent=0"
            className="bg-hubcsr-green hover:bg-hubcsr-green/90 text-white px-3 sm:px-6 py-2 text-sm sm:text-base rounded-lg shadow-button"
          >
            <span className="hidden sm:inline">Entre em contato</span>
            <span className="sm:hidden">Contato</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;