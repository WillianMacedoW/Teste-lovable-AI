
import React from 'react';
import { Link } from 'react-router-dom';

interface FooterLinksProps {
  title: string;
  links: Array<{
    to: string;
    label: string;
  }>;
}

const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-barber-yellow">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link 
              to={link.to} 
              className="text-gray-400 hover:text-barber-yellow transition"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
