
import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors } from 'lucide-react';

const NavbarLogo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center">
      <Scissors size={24} className="text-barber-yellow mr-2" />
      <div className="font-montserrat font-bold text-2xl">
        Barber<span className="text-barber-yellow">Time</span>
      </div>
    </Link>
  );
};

export default NavbarLogo;
