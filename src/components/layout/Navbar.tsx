
import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import NavbarLogo from './NavbarLogo';
import DesktopNav from './DesktopNav';
import MobileMenu from './MobileMenu';

interface NavbarProps {
  onOpenAuthModal?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAuthModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-barber-black text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="barber-container flex items-center justify-between">
        {/* Logo */}
        <NavbarLogo />

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
        {!isMobile && <DesktopNav onOpenAuthModal={onOpenAuthModal} />}
      </div>

      {/* Mobile Navigation */}
      {isMobile && (
        <MobileMenu 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)} 
          onOpenAuthModal={onOpenAuthModal} 
        />
      )}
    </header>
  );
};

export default Navbar;
