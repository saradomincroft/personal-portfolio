import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero-section");

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(() => setFadeOut(true), 100);
      return () => clearTimeout(timer);
    }
  }, [fadeOut]);

  useEffect(() => {
    const sections = ["#hero-section", "#about-section", "#projects-section", "#contact-section"];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.querySelector(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.querySelector(section);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsOpen(false); 
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 py-3 px-6 text-white transition-opacity duration-700 backdrop-blur-md shadow-lg border border-[#64b0db] shadow-[0_0_30px_#64b0db]${
        fadeIn && !fadeOut ? "opacity-100" : "opacity-0"
      } bg-gradient-to-r from-[#4B9F8C] to-[#4A3C73]`}
    >
      <div className="flex items-center max-w-6xl mx-auto justify-end">
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-lg">
          <li>
            <a
              href="#hero-section"
              onClick={() => handleLinkClick("#hero-section")}
              className={`relative inline-block pb-2 after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 ${activeLink === "#hero-section" ? "after:w-full" : "hover:after:w-full"}`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about-section"
              onClick={() => handleLinkClick("#about-section")}
              className={`relative inline-block pb-2 after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 ${activeLink === "#about-section" ? "after:w-full" : "hover:after:w-full"}`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects-section"
              onClick={() => handleLinkClick("#projects-section")}
              className={`relative inline-block pb-2 after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 ${activeLink === "#projects-section" ? "after:w-full" : "hover:after:w-full"}`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact-section"
              onClick={() => handleLinkClick("#contact-section")}
              className={`relative inline-block pb-2 after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 ${activeLink === "#contact-section" ? "after:w-full" : "hover:after:w-full"}`}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger Button */}
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
          <li>
            <a
              href="#hero-section"
              onClick={() => handleLinkClick("#hero-section")}
              className={`relative inline-block pb-2 after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 ${activeLink === "#hero-section" ? "after:w-full" : "hover:after:w-full"}`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about-section"
              onClick={() => handleLinkClick("#about-section")}
              className={`relative inline-block pb-2 after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 ${activeLink === "#about-section" ? "after:w-full" : "hover:after:w-full"}`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects-section"
              onClick={() => handleLinkClick("#projects-section")}
              className={`relative inline-block pb-2 after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 ${activeLink === "#projects-section" ? "after:w-full" : "hover:after:w-full"}`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact-section"
              onClick={() => handleLinkClick("#contact-section")}
              className={`relative inline-block pb-2 after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 ${activeLink === "#contact-section" ? "after:w-full" : "hover:after:w-full"}`}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
