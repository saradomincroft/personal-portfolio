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
          </div>
        <h1>Hey, I'm Sara Catalano – Full Stack Software and Web Engineer.</h1>
      </header>
    );
};

export default HeroSection;
