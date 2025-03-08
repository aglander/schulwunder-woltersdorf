
import React, { useState, useEffect } from "react";

type NavLinkType = {
  href: string;
  label: string;
};

interface WunderSideNavProps {
  navLinks: NavLinkType[];
  textColorClass: string;
}

const WunderSideNav: React.FC<WunderSideNavProps> = ({ navLinks, textColorClass }) => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -79% 0px"
      }
    );

    // Observe all sections
    navLinks.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [navLinks]);

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
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.substring(1);
          return (
            <li key={link.href}>
              <a
                href={link.href}
                className={`${textColorClass} border border-transparent rounded-md transition-all duration-200 block py-2 px-3 ${hoverClass} ${
                  isActive ? hoverClass.replace('hover:', '') : ''
                }`}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default WunderSideNav;
