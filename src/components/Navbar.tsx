import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero-section");

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const sectionIds = [
      "hero-section",
      "about-section",
      "projects-section",
      "certificates-section",
      "contact-section",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: "-80px 0px 0px 0px",
      }
    );
    

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  const linkClass = (href: string) =>
    `relative inline-block pb-2 after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 ${
      activeLink === href ? "after:w-full" : "hover:after:w-full"
    }`;

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 py-3 px-6 text-white transition-opacity duration-700 backdrop-blur-md shadow-lg border border-[#64b0db] shadow-[0_0_30px_#64b0db] ${
        fadeIn ? "opacity-100" : "opacity-0"
      } bg-gradient-to-r from-[#4B9F8C] to-[#4A3C73]`}
    >
      <div className="flex items-center max-w-6xl mx-auto justify-end">
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-lg">
          {[
            { href: "#hero-section", label: "Home" },
            { href: "#about-section", label: "About" },
            { href: "#projects-section", label: "Projects" },
            { href: "#certificates-section", label: "Certificates" },
            { href: "#contact-section", label: "Contact" },
          ].map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => handleLinkClick(href)}
                className={linkClass(href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col px-2 pb-4 gap-4 text-lg">
          {[
            { href: "#hero-section", label: "Home" },
            { href: "#about-section", label: "About" },
            { href: "#projects-section", label: "Projects" },
            { href: "#certificates-section", label: "Certificates" },
            { href: "#contact-section", label: "Contact" },
          ].map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => handleLinkClick(href)}
                className={linkClass(href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
