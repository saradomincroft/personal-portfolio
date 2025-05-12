"use client";
import React, {useState, useRef} from "react";
import Image from "next/image";

const projects = [
  {
    imgSrc: "/img/projects/muffin.jpg",
    title: "Muffin VS Chihuaha Game",
    description: "I developed an interactive and engaging web game, 'Muffin vs Chihuahua,' where players compete against an AI to guess whether an image is a muffin or a chihuahua. The game uses Flask for the backend, featuring dynamic game mechanics like real-time score tracking, a countdown timer, and an intuitive user interface. Players can select difficulty levels, and the AI employs a deep learning model using TensorFlow for predictions. To make the game more accessible, I intentionally make the AI incorrect at times to give the player a better chance. I implemented session storage for progress and scoring, along with smooth transitions between rounds. This project significantly enhanced my full-stack development skills, including Flask routing, session management, and machine learning integration, while providing a fun and responsive user experience.",
    stack: "Python, Flask, TensorFlow",
    website: "",
    github: "https://github.com/saradomincroft/muffin-vs-chihuahua-game",
    youtube: "",
    dev: "",
  },
  {
    imgSrc: "/img/projects/stackpackers.jpg",
    title: "Professional DJ Website",
    description: "I created a dynamic, mobile-first website for my DJ brand Stackpackers using Next.js and Tailwind CSS, with a focus on performance, smooth user experience, and visual identity. The site features custom animations (like particle and lightning overlays), embedded music players, and responsive sections for shows and contact. I experimented with SEO best practices using Open Graph, JSON-LD, and server-side rendering, and overcame technical hurdles like navigation issues caused by next/image. This project sharpened my frontend skills and gave me hands-on experience with metadata, visual polish, and debugging in a real-world context.",
    stack: "Next.js, Tailwind CSS",
    website: "https://stackpackers.com/",
    github: "https://github.com/saradomincroft/stackpackers-website",
    youtube: "",
    dev: "https://dev.to/saradomincroft/building-stackpackers-website-dnb-dj-and-production-duo-5dfm",  
  },
  {
    imgSrc: "/img/projects/ravesync.jpg",
    title: "RaveSync Mobile App",
    description: "I'm developing a modern, dynamic social media app using React Native, TypeScript, Expo, Convex, and Clerk. The app provides a seamless and interactive experience where users can filter and explore event posts based on genres and cities. The frontend is built with React Native and TypeScript, offering a smooth user interface with real-time interactions. I integrated Convex for the backend to efficiently handle and retrieve user data and posts, while Clerk manages user authentication securely. The app also includes dropdown filters for genres and cities, allowing users to customize their feed and view posts that match their preferences. This project enhanced my skills in full-stack development, including frontend mobile app design, backend API integration, and secure user management.",
    stack: "React Native, TypeScript, Clerk, Convex",
    website: "",
    github: "https://github.com/saradomincroft/ravesync",
    youtube: "",
    dev: "",
  },
  {
    imgSrc: "/img/projects/budget.jpg",
    title: "React Budget Tracker",
    description: "Built with React JS and React-Bootstrap, this web app allows users to manage their income and expenses. The home page displays the total balance, income, and expenses. Users can navigate to separate tabs to add or delete incomes and expenses, which are stored in a local JSON file. Incomes are shown as cards with titles, descriptions, and amounts. Expenses include status options (paid or outstanding) and can be filtered accordingly. All calculations are handled in a separate JavaScript utility file.",
    stack: "React, Boostrap, JSON",
    website: "",
    github: "https://github.com/saradomincroft/budget-tracker",
    youtube: "https://www.youtube.com/watch?v=v4t6hi-CMAQ",
    dev: "https://dev.to/saradomincroft/simple-budget-tracker-app-using-react-bootstrap-2ce8",  
  },
  {
    imgSrc: "/img/projects/djdatabass.jpg",
    title: "DJ DataBass",
    description: "DJ Databass is a full-stack web application built with React, Flask, and SQLAlchemy that allows users to explore and manage a directory of DJs. Users can sign up, log in, and browse DJs with filters by name, genre, subgenre, and venues played at. The app includes functionality to favorite DJs for quick access, and authenticated users can add new DJs to the database. Admin users have the additional ability to delete entries. The frontend is styled with React-Bootstrap and communicates with a Flask API backed by a relational database using SQLAlchemy.",
    stack: "React, Python, Flask, SQLAlchemy",
    website: "",
    github: "https://github.com/saradomincroft/dj-databass",
    youtube: "",
    dev: "",  
  },
  {
    imgSrc: "/img/projects/pokedex.jpg",
    title: "Pokedex App",
    description: "I built a responsive Pokédex web app using vanilla JavaScript that displays the original 151 Pokémon with images, types, and descriptions from the PokéAPI. Users can search by name or number, filter by type, and manage a list of favourites stored in localStorage. The UI includes hover effects, type-based color coding, and persistent state for a smooth user experience.",
    stack: "HTML, CSS, JavaScript",
    website: "https://pokedex-mu-bay.vercel.app/",
    github: "https://github.com/saradomincroft/pokedex",
    youtube: "",
    dev: "https://dev.to/saradomincroft/pokedex-project-using-pokeapi-29ab",
  },
];

const Projects = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  const sectionRef = useRef<HTMLDivElement>(null);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="projects"
      ref={sectionRef}
      className="min-h-screen pt-20 px-8 text-[#F1F1F1]"
    >
      <h2 className="text-4xl font-bold mb-8 border-b-2 drop-shadow-[0_0_20px_#6A1B9A]">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12 mx-auto">
        {displayedProjects.map((project, index) => (
          <div key={index} className="group [perspective:1000px]">
            <div className="relative w-full h-60 transition-transform duration-700 [transform-style:preserve-3d] group-hover:rotate-y-180 rounded-xl border border-[#64b0db] shadow-[0_0_30px_#64b0db]">
              {/* Front */}
              <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl overflow-hidden cursor-pointer">
                <Image
                  src={project.imgSrc}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-r from-[#4B9F8C] to-[#4A3C73] bg-opacity-60 text-center py-3">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <h4 className="text-sm">{project.stack}</h4>
                </div>
              </div>

              {/* Back */}
              <div className="absolute inset-0 [backface-visibility:hidden] rotate-y-180 bg-gradient-to-r from-[#4B9F8C] to-[#4A3C73] rounded-xl p-4 flex flex-col justify-between cursor-pointer">
                <div className="p-4 overflow-y-auto flex-1 custom-scrollbar">
                  <p className="text-sm">{project.description}</p>
                </div>
                {(project.website || project.github || project.youtube || project.dev) && (
                  <div className="flex justify-around items-center gap-3 p-3 border-t border-[#00FFFF]/30 bg-black/20 backdrop-blur-sm">
                    {project.website && (
                      <a href={project.website} target="_blank" rel="noopener noreferrer" className="transition hover:drop-shadow-[0_0_8px_#00ffff] hover:text-[#00ffff]">
                        <Image src="/img/icons/website-icon.svg" alt="Website" width={24} height={24} className="transition filter hover:drop-shadow-[0_0_8px_#00ffff] hover:text-[#00ffff]" />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="transition hover:drop-shadow-[0_0_8px_#00ffff] hover:text-[#00ffff]">
                        <Image src="/img/icons/github-icon.svg" alt="GitHub" width={24} height={24} className="transition filter hover:drop-shadow-[0_0_8px_#00ffff] hover:text-[#00ffff]" />
                      </a>
                    )}
                    {project.youtube && (
                      <a href={project.youtube} target="_blank" rel="noopener noreferrer" className="transition hover:drop-shadow-[0_0_8px_#00ffff] hover:text-[#00ffff]">
                        <Image src="/img/icons/youtube-icon.png" alt="YouTube" width={24} height={24} className="transition filter hover:drop-shadow-[0_0_8px_#00ffff] hover:text-[#00ffff]" />
                      </a>
                    )}
                    {project.dev && (
                      <a href={project.dev} target="_blank" rel="noopener noreferrer" className="transition hover:drop-shadow-[0_0_8px_#00ffff] hover:text-[#00ffff]">
                        <Image src="/img/icons/dev-icon.svg" alt="Dev.to" width={24} height={24} className="transition filter hover:drop-shadow-[0_0_8px_#00ffff] hover:text-[#00ffff]" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4">
      <button
        onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
        className={`px-4 py-1 border rounded-md text-white 
          ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-[#64b0db]'} 
          border-[#64b0db] shadow-[0_0_30px_#64b0db]`}
      >
        Prev
      </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`w-10 h-10 cursor-pointer rounded-md border border-[#64b0db] shadow-[0_0_30px_#64b0db] ${
              currentPage === i + 1 ? 'bg-[#64b0db] font-bold' : 'text-white'
            } hover:bg-[#64b0db] transition`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
          className={`px-4 py-1 border rounded-md text-white 
            ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-[#64b0db]'}
            border-[#64b0db] shadow-[0_0_30px_#64b0db]`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Projects;