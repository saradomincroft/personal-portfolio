import React from "react";
import Image from "next/image"; 

const HeroSection = () => {
  return (
      <header className="flex flex-col items-center justify-center" style={{height: "100vh" }}>
          <div className="relative w-[340px] sm:w-[500px] md:w-[600px] lg:w-[700px] mb-4">
            <Image
              src="/img/sara-croft-logo.svg"
              alt="My Portfolio Logo"
              width={0}
              height={0}
              priority
              className="object-contain"
              style={{ width: '100%', height: 'auto' }} 
            />
            <h1 className="w-full text-left text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Hey, I'm <span className="bg-gradient-to-r from-[var(--strong-purple)] to-[var(--steel-gray)] text-transparent bg-clip-text">Sara Catalano</span> – Full Stack Software and Web Engineer.</h1>
          </div>
      </header>
    );
};

export default HeroSection;
