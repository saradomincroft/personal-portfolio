import HeroSection from "@/components/HeroSection";
import ParticleOverlay from "@/components/ParticleOverlay";
// import Navbar from "@/components/Navbar";
import About from "@/components/About"
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto">
      <ParticleOverlay/>
      <HeroSection/>
      <About/>
      <Projects/>
      <Contact/>
    </main>
  );
}
