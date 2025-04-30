"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [typingStarted, setTypingStarted] = useState(false);
  const [typingCompleted, setTypingCompleted] = useState(false);
  const [arrowVisible, setArrowVisible] = useState(false);
  const [iconsVisibile, setIconsVisible] = useState(false);

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      setTypingStarted(true);
    }, 800);

    return () => {
      clearTimeout(typingTimer);
    };
  }, []);

  useEffect(() => {
    if (typingStarted) {
      const typingDuration = 2500;
      const typingCompletionTimer = setTimeout(() => {
        setTypingCompleted(true);
        requestAnimationFrame(() => setArrowVisible(true));
      }, typingDuration);
      return () => clearTimeout(typingCompletionTimer);
    }
  }, [typingStarted]);
  
  useEffect(() => {
    if (typingCompleted) {
      const showIconsTimer = setTimeout(() => {
        setIconsVisible(true);
      }, 300);
  
      return () => clearTimeout(showIconsTimer);
    }
  }, [typingCompleted]);
  
  const scrollToAboutSection = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <header className="flex flex-col items-center justify-center" style={{ height: "100vh" }}>
      <div className="relative w-3/4 sm:w-[500px] lg:w-[600px]">
        <Image
          src="/img/sara-croft-logo.svg"
          alt="My Portfolio Logo"
          width={1600}
          height={900}
          priority
          onLoadingComplete={handleImageLoad}
          className={`object-contain drop-shadow-lg transition-opacity duration-400 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div className="relative w-3/4 sm:w-[500px] lg:w-[600px] h-[100px]">
        <h1 className="w-full text-left text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          <span className="bg-gradient-to-r from-[var(--strong-purple)] to-[var(--dark-steel)] text-transparent bg-clip-text">
            {typingStarted && (
              <TypeAnimation
                sequence={["Full Stack Software and Web Engineer"]}
                wrapper="span"
                speed={50}
                style={{
                  display: "inline",
                  overflow: "hidden",
                  width: "100%",
                }}
              />
            )}
          </span>
        </h1>
        {typingCompleted && (
          <div
            className={`relative flex mt-2 gap-4 transition-opacity duration-700 ease-out ${
              iconsVisibile ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-[40px] h-[40px] sm:w-[64px] sm:h-[64px] cursor-pointer transition-transform duration-300 hover:scale-110">
              <Image
                src="/personal-portfolio/img/github-icon.svg"
                alt="GitHub icon"
                width={150}
                height={150}
                priority
                className="object-contain drop-shadow-lg"
              />
            </div>
            <div className="relative w-[40px] h-[40px] sm:w-[64px] sm:h-[64px] cursor-pointer transition-transform duration-300 hover:scale-110">
              <Image
                src="/img/linkedin-icon.png"
                alt="LinkedIn icon"
                width={150}
                height={150}
                priority
                className="object-contain drop-shadow-lg"
              />
            </div>
          </div>
        )}
      </div>

      {typingCompleted && (
        <>
          <div className={`absolute top-24 left-8 transition-transform duration-1000 ease-in-out will-change-transform ${arrowVisible ? "translate-x-0" : "-translate-x-full"}`}>
            <Image
              src="/img/sun.svg"
              alt="Sun"
              width={100}
              height={100}
              className="w-[clamp(80px, 10vw, 120px)] h-[clamp(80px, 10vw, 120px)] object-contain"
            />
          </div>
        </>
      )}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        {typingCompleted && (
          <button
            onClick={scrollToAboutSection}
            className={`pt-8 flex flex-col items-center justify-center transition-opacity duration-1000 ${
              arrowVisible ? "opacity-100" : "opacity-0"
            }`}
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
        )}
      </div>
    </header>
  );
};

export default HeroSection;
