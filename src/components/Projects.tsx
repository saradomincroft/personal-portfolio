"use client";
import React, {useState, useRef} from "react";
import Image from "next/image";

const projects = [
  {
    imgSrc: "/img/sara-profile-image.jpg",
    title: "TBA",
    description: "DLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    stack: "React, TypeScript",
    website: "https://example.com/project2",
    github: "https://github.com/your-repo",
    youtube: "",
    dev: "",
  },
  {
    imgSrc: "/img/sara-profile-image.jpg",
    title: "Professional DJ Website",
    description: "I created a dynamic, mobile-first website for my DJ brand Stackpackers using Next.js and Tailwind CSS, with a focus on performance, smooth user experience, and visual identity. The site features custom animations (like particle and lightning overlays), embedded music players, and responsive sections for shows and contact. I experimented with SEO best practices using Open Graph, JSON-LD, and server-side rendering, and overcame technical hurdles like navigation issues caused by next/image. This project sharpened my frontend skills and gave me hands-on experience with metadata, visual polish, and debugging in a real-world context.",
    stack: "Next.js, Tailwind CSS",
    website: "https://stackpackers.com/",
    github: "https://github.com/saradomincroft/stackpackers-website",
    youtube: "",
    dev: "https://dev.to/saradomincroft/building-stackpackers-website-dnb-dj-and-production-duo-5dfm",  
  },
  {
    imgSrc: "/img/sara-profile-image.jpg",
    title: "RaveSync Mobile App",
    description: "Description of project 1",
    stack: "React Native, TypeScript, Clerk, Convex",
    website: "https://example.com/project2",
    github: "https://github.com/your-repo",
    youtube: "",
    dev: "",
  },
  {
    imgSrc: "/img/sara-profile-image.jpg",
    title: "Python Image Resizer",
    description: "Description of project 2",
    stack: "Python",
    website: "https://example.com/project2",
    github: "https://github.com/your-repo",
    youtube: "",
    dev: "",  
  },
  {
    imgSrc: "/img/sara-profile-image.jpg",
    title: "DJ DataBass",
    description: "Description of project 1",
    stack: "React, Python, Flask, SQLAlchemy",
    website: "https://example.com/project2",
    github: "https://github.com/your-repo",
    youtube: "",
    dev: "",  
  },
  {
    imgSrc: "/img/sara-profile-image.jpg",
    title: "Pokedex App",
    description: "Description of project 2",
    stack: "HTML, CSS, JavaScript",
    website: "https://pokedex-mu-bay.vercel.app/",
    github: "https://github.com/saradomincroft/pokedex",
    youtube: "",
    dev: "https://dev.to/saradomincroft/pokedex-project-using-pokeapi-29ab",
    },
  {
    imgSrc: "/img/sara-profile-image.jpg",
    title: "Python Image Resizer",
    description: "Description of project 2",
    stack: "Next.js, Tailwind CSS",
    website: "https://example.com/project2",
    github: "https://github.com/your-repo",
    youtube: "",
    dev: "",
    },
  {
    imgSrc: "/img/sara-profile-image.jpg",
    title: "DJ DataBass",
    description: "Description of project 1",
    stack: "React, TypeScript",
    website: "https://example.com/project2",
    github: "https://github.com/your-repo",
    youtube: "",
    dev: "",
    },
  {
    imgSrc: "/img/sara-profile-image.jpg",
    title: "Pokedex App",
    description: "Description of project 2",
    stack: "Next.js, Tailwind CSS",
    website: "https://example.com/project2",
    github: "https://github.com/your-repo",
    youtube: "",
    dev: "",
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
      id="projects-section"
      ref={sectionRef}
      className="min-h-screen pt-16 px-4 text-[#F1F1F1]"
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
                <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-center py-3">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <h4 className="text-sm">{project.stack}</h4>
                </div>
              </div>

              {/* Back */}
              <div className="absolute inset-0 [backface-visibility:hidden] rotate-y-180 bg-gradient-to-r from-[#4B9F8C] to-[#4A3C73] rounded-xl p-4 flex flex-col justify-between cursor-pointer">
                <div className="p-4 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-[#00FFFF]/60 scrollbar-track-transparent">
                  <p className="text-sm">{project.description}</p>
                </div>
                {(project.website || project.github || project.youtube || project.dev) && (
                  <div className="flex justify-around items-center gap-3 p-3 border-t border-[#00FFFF]/30 bg-black/20 backdrop-blur-sm">
                    {project.website && (
                      <a href={project.website} target="_blank" rel="noopener noreferrer">
                        <Image src="/img/icons/website-icon.svg" alt="Website" width={24} height={24} />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Image src="/img/icons/github-icon.svg" alt="GitHub" width={24} height={24} />
                      </a>
                    )}
                    {project.youtube && (
                      <a href={project.youtube} target="_blank" rel="noopener noreferrer">
                        <Image src="/icons/youtube-icon.svg" alt="YouTube" width={24} height={24} />
                      </a>
                    )}
                    {project.dev && (
                      <a href={project.dev} target="_blank" rel="noopener noreferrer">
                        <Image src="/img/icons/dev-icon.svg" alt="Dev.to" width={24} height={24} />
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