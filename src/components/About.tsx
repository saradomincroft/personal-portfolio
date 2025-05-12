"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Tech = {
  title: string;
  imgSrc: string;
};

const techStack: Tech[] = [
  { title: "Python", imgSrc: "/img/icons/python.svg" },
  { title: "React", imgSrc: "/img/icons/react.svg" },
  { title: "TypeScript", imgSrc: "/img/icons/typescript.svg" },
  { title: "C#", imgSrc: "/img/icons/csharp.svg" },
  { title: "Next.js", imgSrc: "/img/icons/nextjs.svg" },
  { title: "Node.js", imgSrc: "/img/icons/nodejs.svg" },
  { title: ".NET", imgSrc: "/img/icons/net.svg" },
  { title: "Tailwind", imgSrc: "/img/icons/tailwind.svg" },
  { title: "PHP", imgSrc: "/img/icons/php.svg" },
  { title: "Java", imgSrc: "/img/icons/java.svg" },
  { title: "SQL", imgSrc: "/img/icons/sql.svg" },
  { title: "WordPress", imgSrc: "/img/icons/wordpress.svg" },
  { title: "Git", imgSrc: "/img/icons/git.svg" },
];

const columns: Tech[][] = [[], [], []];
techStack.forEach((item, index) => {
  const colIndex = [1, 0, 2][index % 3];
  columns[colIndex].push(item);
});

const About = () => {
  const [showStorm, setShowStorm] = useState(false);
  const [showMoon, setShowMoon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const stormElement = document.getElementById("storm");
      const moonElement = document.getElementById("moon");

      if (stormElement) {
        const stormRect = stormElement.getBoundingClientRect();
        if (stormRect.top <= window.innerHeight && stormRect.bottom >= 0) {
          setShowStorm(true);
        }
      }

      if (moonElement) {
        const moonRect = moonElement.getBoundingClientRect();
        if (moonRect.top <= window.innerHeight && moonRect.bottom >= 0) {
          setShowMoon(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="about"
      className="relative items-center pt-20 px-4 min-h-screen"
    >
      <h2 className="text-4xl font-bold mb-8 border-b-2 text-[#F1F1F1] drop-shadow-[0_0_20px_#6A1B9A]">About</h2>

      {/* Main Flex Container */}
      <div className="flex flex-col items-center justify-center gap-12 w-full max-w-4xl px-2 mx-auto">

        {/* Storm Image */}
        <div
          id="storm"
          className={`absolute top-[10%] left-[2%] transition-transform duration-1000 ease-in-out will-change-transform ${
            showStorm ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          } sm:block hidden`}
        >              
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full text-left text-l md:text-2xl lg:text-3xl xl:text-4xl bg-gradient-to-r from-[var(--strong-purple)] to-[var(--dark-steel)] text-transparent bg-clip-text drop-shadow-[0_0_20px_#64b0db]"
          >
            <Image
              src="/img/storm.svg"
              alt="Storm"
              width={100}
              height={100}
              className="w-[100px] h-[100px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px] xl:w-[250px] xl:h-[250px] object-contain animate-float"
            />
          </motion.h1>
        </div>
        {/* Moon Image */}
        <div
          id="moon"
          className={`absolute bottom-4 right-4 transition-transform duration-1000 ease-in-out will-change-transform ${
            showMoon ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          } sm:block hidden`}
        >          
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full text-left text-l md:text-2xl lg:text-3xl xl:text-4xl bg-gradient-to-r from-[var(--strong-purple)] to-[var(--dark-steel)] text-transparent bg-clip-text"
          >
            <Image
              src="/img/moon.svg"
              alt="Moon"
              width={100}
              height={100}
              className="w-[100px] h-[100px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px] xl:w-[250px] xl:h-[250px] object-contain animate-float drop-shadow-[0_0_20px_#64b0db]"
            />
          </motion.h1>
        </div>

        {/* Left Column: Image + Bio */}
        <div className="flex flex-col items-center text-center max-w-lg">
          <div className="relative w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden mb-4  border border-[#64b0db] shadow-[0_0_30px_#64b0db]">
            <Image
              src="/img/sara-profile-image.jpg"
              alt="Profile picture"
              width={300}
              height={300}
              priority
              className="object-contain drop-shadow-lg"
            />
          </div>
          <p className="text-center text-base md:text-xl leading-relaxed" style={{ color: "#F1F1F1" }}>
          👋 Hi, I&apos;m Sara Catalano, a creative full-stack problem slayer 
            with a background that fuses software, mobile, and web development, 
            eCommerce, music, events, and social media marketing.
            <br />
            <br />
            Whether I&apos;m building responsive, high-performance websites or
            crafting immersive digital experiences for live events, I bring both
            precision and energy to every project.
            <br />
            <br />
            What drives me? Turning ambitious ideas into interactive realities.
            I thrive at the intersection of tech and creativity, and believe that
            user experience is the main focus. Collaborating across disciplines
            (especially in the chaos of music and events) keeps me sharp,
            inspired, and always experimenting.
            <br />
            <br />
            Lately, I&apos;ve been exploring machine learning, bringing data-driven 
            insights into the creative process and expanding the possibilities 
            of how technology can be used to solve real-world problems.
            <br />
            <br />
            When I&apos;m not coding, you can find me DJing at and hosting local music 
            events, producing tracks in my home studio, or gaming.
            <br />
            <br />
            If it involves electrifying a digital space, syncing tech with
            creativity, or turning big ideas into bold experiences—you&apos;ll find me
            in my element.
            <br />
            <br />
            Check out my tech stack and projects below!
          </p>
        </div>

        {/* Right Column: Tech Stack */}
        <div className="flex gap-4 justify-center items-start">
          {columns.map((col, colIdx) => (
            <div
              key={colIdx}
              className={`flex flex-col gap-6 ${
                colIdx === 1 ? "-translate-y-6" : ""
              }`}
            >
              {col.map((tech, index) => (
                <div
                  key={index}
                  className="p-[2px] rounded-xl bg-[conic-gradient(at_top_left,_#00f0ff,_#ff007f)] shadow-[0_0_30px_#64b0db]"
                >
                  <div
                    className="flex flex-col items-center justify-center w-22 h-16 p-3 rounded-xl"
                    style={{ backgroundColor: "#333333" }}
                  >
                    <Image
                      src={tech.imgSrc}
                      alt={tech.title}
                      width={32}
                      height={32}
                      className="object-contain mb-1"
                    />
                    <p className="text-xs text-white font-semibold text-center">
                      {tech.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
