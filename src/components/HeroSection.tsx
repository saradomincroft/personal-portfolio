"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [typingStarted, setTypingStarted] = useState(false);
  const [typingCompleted, setTypingCompleted] = useState(false);
  const [arrowVisible, setArrowVisible] = useState(false);
  const [iconsVisibile, setIconsVisible] = useState(false);

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      setTypingStarted(true);
    }, 300);

    return () => {
      clearTimeout(typingTimer);
    };
  }, []);

  useEffect(() => {
    if (typingStarted) {
      const typingDuration = 200;
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
      }, 500);
  
      return () => clearTimeout(showIconsTimer);
    }
  }, [typingCompleted]);
  
  const scrollToAboutSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <header id="home" className="flex flex-col items-center justify-center" style={{ height: "100vh" }}>
      <div className="relative w-3/4 sm:w-[500px] lg:w-[600px] z-10">
        <Image
          // src="/img/sara-catalano-logo.png"
          src="/personal-portfolio/img/sara-catalano-logo.png"
          alt="My Portfolio Logo"
          width={1600}
          height={900}
          priority
          onLoadingComplete={handleImageLoad}
          className={`object-contain transition-opacity duration-500 
            ${imageLoaded ? "opacity-100" : "opacity-0"} 
            drop-shadow-[0_0_20px_#64b0db]`}
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div className="relative w-3/4 sm:w-[500px] lg:w-[600px] h-[100px]">
        <h1 className="w-full text-left text-l md:text-2xl lg:text-3xl xl:text-4xl">
          <span className="bg-gradient-to-r from-[var(--strong-purple)] to-[var(--dark-steel)] text-transparent bg-clip-text">
            {typingStarted && (
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full text-left text-l md:text-2xl lg:text-3xl xl:text-4xl bg-gradient-to-r from-[var(--strong-purple)] to-[var(--dark-steel)] text-transparent bg-clip-text"
              >
                Full Stack Engineer | Explorer of Digital Realms & Sonic Landscapes
              </motion.h1>
            )}
          </span>
        </h1>
        {typingCompleted && (
          <div
            className={`relative flex mt-2 gap-4 transition-opacity duration-700 ease-out ${
              iconsVisibile ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-[40px] h-[40px] sm:w-[64px] sm:h-[64px] cursor-pointer transition-transform duration-300 hover:scale-110 drop-shadow-[0_0_20px_#64b0db]">
              <a
                  href="https://github.com/saradomincroft"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <Image
                  src="/personal-portfolio/img/icons/github-icon.svg"
                  alt="GitHub icon"
                  width={150}
                  height={150}
                  priority
                  className="object-contain drop-shadow-lg"
                />
              </a>
            </div>
            <div className="relative w-[40px] h-[40px] sm:w-[64px] sm:h-[64px] cursor-pointer transition-transform duration-300 hover:scale-110 drop-shadow-[0_0_20px_#64b0db]">
              <a
                  href="https://www.linkedin.com/in/catalanos/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <Image
                  src="/personal-portfolio/img/icons/linkedin-icon.png"
                  alt="LinkedIn icon"
                  width={150}
                  height={150}
                  priority
                  className="object-contain drop-shadow-lg"
                />
              </a>
            </div>
            <div className="relative w-[40px] h-[40px] sm:w-[64px] sm:h-[64px] cursor-pointer transition-transform duration-300 hover:scale-110 drop-shadow-[0_0_20px_#64b0db]">
              <a
                href="https://dev.to/saradomincroft"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/personal-portfolio/img/icons/dev-icon.svg"
                  alt="Dev.to icon"
                  width={150}
                  height={150}
                  priority
                  className="object-contain drop-shadow-lg"
                />
              </a>
            </div>
            <div className="relative w-[40px] h-[40px] sm:w-[64px] sm:h-[64px] cursor-pointer transition-transform duration-300 hover:scale-110 drop-shadow-[0_0_20px_#64b0db]">
              <a
                href="/personal-portfolio/resume/sara-catalano-resume.pdf"
                download
                title="Download Resume"
              >
                <Image
                  src="/personal-portfolio/img/icons/resume-icon.svg"
                  alt="Download Resume"
                  width={150}
                  height={150}
                  priority
                  className="object-contain drop-shadow-lg"
                />
              </a>
            </div>
          </div>
        )}
      </div>

      {typingCompleted && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
          className="absolute top-[8%] left-[2%] will-change-transform"
        >
          <Image
            src="/personal-portfolio/img/astronaut.svg"
            alt="Astronaut"
            width={250}
            height={250}
            className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] object-contain drop-shadow-[0_0_20px_#64b0db]"
            priority
          />
        </motion.div>
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
              className="white animate-bounce cursor-pointer drop-shadow-[0_0_20px_#64b0db]"
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
