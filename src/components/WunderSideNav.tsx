
import React from "react";

type NavLinkType = {
  href: string;
  label: string;
};

interface WunderSideNavProps {
  navLinks: NavLinkType[];
  textColorClass: string;
}

const WunderSideNav: React.FC<WunderSideNavProps> = ({ navLinks, textColorClass }) => {
  // Diese Funktion gibt die Hover-Klassen basierend auf der textColorClass zurück
  const getHoverClass = () => {
    if (textColorClass === 'text-schulbau') {
      return 'hover:bg-schulbau/10 hover:border-schulbau hover:shadow-sm';
    } else if (textColorClass === 'text-schulgruendung') {
      return 'hover:bg-schulgruendung/10 hover:border-schulgruendung hover:shadow-sm';
    } else if (textColorClass === 'text-schulinnovation') {
      return 'hover:bg-schulinnovation/10 hover:border-schulinnovation hover:shadow-sm';
    }
    return 'hover:bg-primary/10 hover:border-primary hover:shadow-sm';
  };

  const hoverClass = getHoverClass();

  return (
    <nav className="bg-white rounded-lg shadow-lg p-4">
      <ul className="space-y-2">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`${textColorClass} border border-transparent rounded-md transition-all duration-200 block py-2 px-3 ${hoverClass}`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default WunderSideNav;
