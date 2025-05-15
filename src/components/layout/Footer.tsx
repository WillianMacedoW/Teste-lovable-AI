
import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-barber-black text-white pt-12 pb-6">
      <div className="barber-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 - Logo and Tagline */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Scissors size={24} className="text-barber-yellow mr-2" />
              <div className="font-montserrat font-bold text-2xl">
                Barber<span className="text-barber-yellow">Time</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              Plataforma de agendamento online para barbearias modernas
            </p>
            <div className="flex space-x-4">
              {/* Social Icons placeholder */}
              <div className="p-4 border border-dashed border-gray-600 rounded-md text-center w-full">
                <p className="text-gray-500 text-sm">Espaço para redes sociais</p>
              </div>
            </div>
          </div>

          {/* Column 2 - Main Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-barber-yellow">Links Principais</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-barber-yellow transition">Home</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-barber-yellow transition">Preços</Link></li>
              <li><Link to="/booking/create" className="text-gray-400 hover:text-barber-yellow transition">Agendar</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-barber-yellow transition">Sobre</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-barber-yellow transition">Contato</Link></li>
            </ul>
          </div>

          {/* Column 3 - Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-barber-yellow">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-barber-yellow transition">Política de Privacidade</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-barber-yellow transition">Termos de Uso</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright and Language */}
        <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-3 md:mb-0">
            &copy; {new Date().getFullYear()} BarberTime. Todos os direitos reservados.
          </p>
          <div className="flex items-center">
            <p className="text-gray-500 text-sm">Brasil | Português</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
