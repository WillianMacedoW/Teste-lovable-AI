
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { UserIcon, LogOut } from 'lucide-react';
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

interface DesktopNavProps {
  onOpenAuthModal?: () => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ onOpenAuthModal }) => {
  const { user, isAuthenticated, logout } = useAuth();

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
  );
};

export default DesktopNav;
