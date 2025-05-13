
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MenuIcon, UserIcon, XIcon, LogOut } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface NavbarProps {
  onOpenAuthModal?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAuthModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { user, isAuthenticated, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    // If we're on the dashboard, redirect to home
    if (window.location.pathname === '/dashboard') {
      window.location.href = '/';
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <header className="bg-barber-black text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="barber-container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="font-montserrat font-bold text-2xl">
            Barber<span className="text-barber-yellow">Time</span>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        {isMobile && (
          <button 
            onClick={toggleMenu} 
            className="p-2 text-barber-yellow"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        )}

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="flex items-center gap-6">
            <Link to="/" className="hover:text-barber-yellow transition">Home</Link>
            <Link to="/pricing" className="hover:text-barber-yellow transition">Preços</Link>
            <Link to="/booking" className="hover:text-barber-yellow transition">Agendar</Link>
            <Link to="/about" className="hover:text-barber-yellow transition">Sobre</Link>
            <Link to="/contact" className="hover:text-barber-yellow transition">Contato</Link>
            
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative ml-4 flex items-center gap-2 text-white hover:bg-barber-black/80">
                    <Avatar className="h-8 w-8 bg-barber-yellow text-barber-black">
                      <AvatarFallback>{user?.name ? getInitials(user.name) : "U"}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">
                      {user?.name ? (user.name.split(' ')[0]) : "Usuário"}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard" className="cursor-pointer">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/booking" className="cursor-pointer">Meus Agendamentos</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-500">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sair</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                variant="outline" 
                className="ml-4 border-barber-yellow text-barber-yellow hover:bg-barber-yellow hover:text-barber-black"
                onClick={onOpenAuthModal}
              >
                <UserIcon size={18} className="mr-2" />
                Login
              </Button>
            )}
          </nav>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-barber-black z-40 animate-fadeIn">
          <nav className="flex flex-col p-6 gap-6">
            <Link 
              to="/" 
              className="text-xl py-2 border-b border-gray-800 hover:text-barber-yellow transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/pricing" 
              className="text-xl py-2 border-b border-gray-800 hover:text-barber-yellow transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Preços
            </Link>
            <Link 
              to="/booking" 
              className="text-xl py-2 border-b border-gray-800 hover:text-barber-yellow transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Agendar
            </Link>
            <Link 
              to="/about" 
              className="text-xl py-2 border-b border-gray-800 hover:text-barber-yellow transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link 
              to="/contact" 
              className="text-xl py-2 border-b border-gray-800 hover:text-barber-yellow transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            
            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-2 border-b border-gray-800 py-2">
                  <Avatar className="h-8 w-8 bg-barber-yellow text-barber-black">
                    <AvatarFallback>{user?.name ? getInitials(user.name) : "U"}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">
                    {user?.name || "Usuário"}
                  </span>
                </div>
                <Link 
                  to="/dashboard" 
                  className="text-xl py-2 border-b border-gray-800 hover:text-barber-yellow transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Button 
                  variant="outline" 
                  className="mt-4 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                >
                  <LogOut size={18} className="mr-2" />
                  Sair
                </Button>
              </>
            ) : (
              <Button 
                variant="outline" 
                className="mt-4 border-barber-yellow text-barber-yellow hover:bg-barber-yellow hover:text-barber-black"
                onClick={() => {
                  if(onOpenAuthModal) onOpenAuthModal();
                  setIsMenuOpen(false);
                }}
              >
                <UserIcon size={18} className="mr-2" />
                Login / Cadastro
              </Button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
