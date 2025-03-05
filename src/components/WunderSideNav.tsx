
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
  return (
    <nav className="bg-white rounded-lg shadow-lg p-4">
      <ul className="space-y-2">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`${textColorClass} hover:underline block py-2`}
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
