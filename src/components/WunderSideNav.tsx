
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

  const getActiveClass = () => {
    if (textColorClass === 'text-schulbau') {
      return 'bg-schulbau/10 border-schulbau font-semibold';
    } else if (textColorClass === 'text-schulgruendung') {
      return 'bg-schulgruendung/10 border-schulgruendung font-semibold';
    } else if (textColorClass === 'text-schulinnovation') {
      return 'bg-schulinnovation/10 border-schulinnovation font-semibold';
    }
    return 'bg-primary/10 border-primary font-semibold';
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    
    if (targetElement) {
      // Get the header height (assuming it's fixed at 64px, adjust if different)
      const headerOffset = 80; // 64px header + some extra space
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Update active section after scrolling
      setActiveSection(href.substring(1));
    }
  };

  const hoverClass = getHoverClass();
  const activeClass = getActiveClass();

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
                  isActive ? activeClass : ''
                }`}
                onClick={(e) => handleLinkClick(e, link.href)}
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
