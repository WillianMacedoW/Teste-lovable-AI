
import React from 'react';

const FooterCopyright: React.FC = () => {
  return (
    <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
      <p className="text-gray-500 text-sm mb-3 md:mb-0">
        &copy; {new Date().getFullYear()} BarberTime. Todos os direitos reservados.
      </p>
      <div className="flex items-center">
        <p className="text-gray-500 text-sm">Brasil | Português</p>
      </div>
    </div>
  );
};

export default FooterCopyright;
