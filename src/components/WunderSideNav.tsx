
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
    <div className="flex flex-col space-y-6">
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
      
      {/* Donation iframe below the navigation menu */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <iframe 
          src="https://secure.fundraisingbox.com/app/widget?hash=Z%2Ff4FgAGptA6fdXqBs3JJ2CvlkQLSe%2FIZiydlxXc4it85tAdD0i%2FrHxyipZM3%2BMmI63BHV4R5fp8JNCbUJf3J2vkzRQaFem5aTfSylHGrmdz%2Fd1dUwfo6Ddim4tCzOd%2FK6OJXUUL6%2F9%2FKcnEENCzbSry0RgME%2Fj0WHaAgF6GvnZvtYRUek3zuh4o09A8xeE6HefaSXtcqaRZPtzQJ9buc0i4miAtUbKWFiKIpCHC%2FwID%2BYw4LAC6kUVu0bM3w65UAfmMPH4d64dEMsTwdY38TxbliSMzReqDVjfH9GGQ50cT44MoOVuzkVx0wOFhha1MD6eWPzkapIRVe8qmNZSsHQ%2B2yHhuCPCUXzjKti2Nu0JD%2BeQkPlWlw01vlfkqgcYfELD0JW9NrooKP9jrMtmaUUr7oSJmYL6CRFvNuHDLmwAWqcRpdWv3mhwP1aFizKk2VfiRDXU14phVFcK4KNixLQ%3D%3D&extended=1"
          name="fundraisingBoxWidget"
          sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation"
          frameBorder="0"
          height="300"
          width="100%"
          scrolling="no"
          allowTransparency
          title="FundraisingBox Widget"
          className="w-full"
        ></iframe>
      </div>
    </div>
  );
};

export default WunderSideNav;
