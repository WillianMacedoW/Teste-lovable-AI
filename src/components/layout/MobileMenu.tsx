
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { UserIcon, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAuthModal?: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onOpenAuthModal }) => {
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    onClose();
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 top-16 bg-barber-black z-40 animate-fadeIn">
      <nav className="flex flex-col p-6 gap-6">
        <Link 
          to="/" 
          className="text-xl py-2 border-b border-gray-800 hover:text-barber-yellow transition"
          onClick={onClose}
        >
          Home
        </Link>
        <Link 
          to="/pricing" 
          className="text-xl py-2 border-b border-gray-800 hover:text-barber-yellow transition"
          onClick={onClose}
        >
          Preços
        </Link>
        <Link 
          to="/booking" 
          className="text-xl py-2 border-b border-gray-800 hover:text-barber-yellow transition"
          onClick={onClose}
        >
          Agendar
        </Link>
        <Link 
          to="/about" 
          className="text-xl py-2 border-b border-gray-800 hover:text-barber-yellow transition"
          onClick={onClose}
        >
          Sobre
        </Link>
        <Link 
          to="/contact" 
          className="text-xl py-2 border-b border-gray-800 hover:text-barber-yellow transition"
          onClick={onClose}
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
              onClick={onClose}
            >
              Dashboard
            </Link>
            <Button 
              variant="outline" 
              className="mt-4 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              onClick={handleLogout}
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
              if (onOpenAuthModal) onOpenAuthModal();
              onClose();
            }}
          >
            <UserIcon size={18} className="mr-2" />
            Login / Cadastro
          </Button>
        )}
      </nav>
    </div>
  );
};

export default MobileMenu;
