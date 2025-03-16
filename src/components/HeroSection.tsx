"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const scrollToAboutSection = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="flex flex-col items-center justify-center" style={{ height: "100vh" }}>
      <div className="relative w-[280px] sm:w-[500px] md:w-[600px] lg:w-[700px] pb-4">
        <Image
          src="/img/sara-croft-logo.svg"
          alt="My Portfolio Logo"
          width={0}
          height={0}
          priority
          className="object-contain drop-shadow-lg"
          style={{ width: "100%", height: "auto" }}
        />
        <h1 className="w-full text-left text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          <span className="bg-gradient-to-r from-[var(--strong-purple)] to-[var(--dark-steel)] text-transparent bg-clip-text">
            <TypeAnimation
              sequence={["Full Stack Software and Web Engineer"]}
              wrapper="span"
              speed={50}
              style={{ display: "inline" }}
            />
          </span>
        </h1>
      </div>
        <button
          onClick={scrollToAboutSection}
          className="mt-12 flex flex-col items-center justify-center"
        >
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="80"
            height="80"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="white animate-bounce cursor-pointer"
          >
            <path d="M12 19V6M12 19l-7-7M12 19l7-7" />
          </svg>        
        </button>
    </header>
  );
};

export default HeroSection;
