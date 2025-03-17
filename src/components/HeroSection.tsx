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
    <header className="flex flex-col items-center" style={{ height: "100vh" }}>
      <div className="flex flex-col items-center pt-16">
        <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-full overflow-hidden mb-4">
          <Image
            src="/img/sara-profile-image.jpg"
            alt="Profile picture"
            width={300}
            height={300}
            priority
            className="object-contain drop-shadow-lg"
          />
        </div>
      </div>
      
      <div className="relative w-[280px] sm:w-[500px] md:w-[600px] lg:w-[700px] mt-16">
        <Image
          src="/img/sara-croft-logo.svg"
          alt="My Portfolio Logo"
          width={0}
          height={0}
          priority
          className="object-contain drop-shadow-lg"
          style={{ width: "100%", height: "auto" }}
        />
        <h1 className="w-full text-left text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl mb-16">
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
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <button
          onClick={scrollToAboutSection}
          className="pt-8 flex flex-col items-center justify-center"
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
        </div>
    </header>
  );
};

export default HeroSection;
