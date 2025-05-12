
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-barber-black text-white pt-12 pb-6">
      <div className="barber-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1 - Logo and Tagline */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <div className="font-montserrat font-bold text-2xl">
                Barber<span className="text-barber-yellow">Time</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              Plataforma de agendamento online para barbearias modernas
            </p>
            <div className="flex space-x-4">
              {/* Social Icons would go here */}
            </div>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-barber-yellow">Empresa</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-barber-yellow transition">Sobre</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-barber-yellow transition">Preços</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-barber-yellow transition">Carreiras</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-barber-yellow transition">Contato</Link></li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-barber-yellow">Recursos</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-400 hover:text-barber-yellow transition">Blog</Link></li>
              <li><Link to="/help" className="text-gray-400 hover:text-barber-yellow transition">Centro de Ajuda</Link></li>
              <li><Link to="/tutorials" className="text-gray-400 hover:text-barber-yellow transition">Tutoriais</Link></li>
              <li><Link to="/api" className="text-gray-400 hover:text-barber-yellow transition">API</Link></li>
            </ul>
          </div>

          {/* Column 4 - Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-barber-yellow">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-barber-yellow transition">Política de Privacidade</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-barber-yellow transition">Termos de Uso</Link></li>
              <li><Link to="/gdpr" className="text-gray-400 hover:text-barber-yellow transition">LGPD</Link></li>
              <li><Link to="/cookies" className="text-gray-400 hover:text-barber-yellow transition">Política de Cookies</Link></li>
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
