
import React from 'react';
import FooterLogo from './FooterLogo';
import FooterLinks from './FooterLinks';
import FooterSocialSection from './FooterSocialSection';
import FooterCopyright from './FooterCopyright';
import { Separator } from '@/components/ui/separator';

const Footer: React.FC = () => {
  const mainLinks = [
    { to: '/', label: 'Home' },
    { to: '/pricing', label: 'Preços' },
    { to: '/booking/create', label: 'Agendar' },
    { to: '/about', label: 'Sobre' },
    { to: '/contact', label: 'Contato' }
  ];

  const legalLinks = [
    { to: '/privacy', label: 'Política de Privacidade' },
    { to: '/terms', label: 'Termos de Uso' }
  ];

  return (
    <footer className="bg-barber-black text-white pt-12 pb-6">
      <div className="barber-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 - Logo and Tagline */}
          <div>
            <FooterLogo />
            <p className="text-gray-400 mb-4">
              Plataforma de agendamento online para barbearias modernas
            </p>
            <FooterSocialSection />
          </div>

          {/* Column 2 - Main Links */}
          <FooterLinks title="Links Principais" links={mainLinks} />

          {/* Column 3 - Legal */}
          <FooterLinks title="Legal" links={legalLinks} />
        </div>

        {/* Bottom Section - Copyright and Language */}
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;
