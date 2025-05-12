"use client";
import { useRef, useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ParticleOverlay from "@/components/ParticleOverlay";
import Navbar from "@/components/Navbar";
import About from "@/components/About"
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Certificates from "@/components/Certificates";


export default function Home() {
  const heroRef = useRef(null);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const target = heroRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNavbar(!entry.isIntersecting);
      },
      { threshold: 0.6}
    );
    if (target) {
      observer.observe(target);
    }
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  },[]);

  return (
    <main className="flex min-h-screen flex-col container mx-auto">
      <ParticleOverlay/>
      {showNavbar && <Navbar />}
      <div ref={heroRef}>
        <HeroSection/>
      </div>
      <About/>
      <Projects/>
      <Certificates/>
      <Contact/>
    </main>
  );
}
