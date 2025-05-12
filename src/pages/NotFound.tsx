
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { HomeIcon, CalendarIcon, SearchIcon, PhoneIcon } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 max-w-md">
        <h1 className="text-6xl font-bold text-barber-black mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-barber-black mb-6">Página não encontrada</h2>
        <p className="text-gray-600 mb-8">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        
        <div className="space-y-4">
          <Button asChild className="w-full bg-barber-yellow text-barber-black hover:bg-barber-yellow-light">
            <Link to="/">
              <HomeIcon className="mr-2 h-4 w-4" />
              Voltar ao Início
            </Link>
          </Button>
          
          <div className="grid grid-cols-3 gap-4">
            <Button asChild variant="outline">
              <Link to="/booking">
                <CalendarIcon className="mr-2 h-4 w-4" />
                Agendamentos
              </Link>
            </Button>
            
            <Button asChild variant="outline">
              <Link to="/search">
                <SearchIcon className="mr-2 h-4 w-4" />
                Buscar
              </Link>
            </Button>
            
            <Button asChild variant="outline">
              <Link to="/contact">
                <PhoneIcon className="mr-2 h-4 w-4" />
                Contato
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
