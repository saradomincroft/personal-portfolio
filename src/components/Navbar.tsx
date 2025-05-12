import { useEffect, useState, useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");
  
  const mobileMenuRef = useRef<HTMLUListElement | null>(null);
  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const sectionIds = ["hero", "about", "projects", "certificates", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: "0px 0px 0px 0px",
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const handleLinkClick = (linkId: string) => {
    setActiveLink(linkId);
    setIsOpen(false);

    if (linkId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(linkId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const linkClass = (linkId: string) =>
    `relative inline-block pb-2 after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 cursor-pointer ${
      activeLink === linkId ? "after:w-full" : "hover:after:w-full"
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
            { id: "hero", label: "Home" },
            { id: "about", label: "About" },
            { id: "projects", label: "Projects" },
            { id: "certificates", label: "Certificates" },
            { id: "contact", label: "Contact" },
          ].map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => handleLinkClick(id)}
                className={linkClass(id)}
              >
                {label}
              </button>
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
        <ul
          ref={mobileMenuRef}
          className="md:hidden flex flex-col px-2 pb-4 gap-4 text-lg"
        >
          {[
            { id: "hero", label: "Home" },
            { id: "about", label: "About" },
            { id: "projects", label: "Projects" },
            { id: "certificates", label: "Certificates" },
            { id: "contact", label: "Contact" },
          ].map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => handleLinkClick(id)}
                className={linkClass(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
