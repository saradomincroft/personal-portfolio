"use client";
import React, {useState, useRef} from "react";
import Image from "next/image";

const projects = [
  {
    imgSrc: "/img/sara-profile-image.jpg",
    title: "TBA",
    description: "Description of project 1",
    stack: "React, TypeScript",
    link: "https://example.com/project1",
  },
  {
    imgSrc: "/img/sara-profile-image.jpg",
    title: "Professional DJ Website",
    description: "Description of project 2",
    stack: "Next.js, Tailwind CSS",
    link: "https://example.com/project2",
  },
  {
    imgSrc: "/img/sara-profile-image.jpg",
    title: "Social Media Mobile App",
    description: "Description of project 1",
    stack: "React, TypeScript",
    link: "https://example.com/project1",
  },
  {
    imgSrc: "/img/sara-profile-image.jpg",
    title: "Python Image Resizer",
    description: "Description of project 2",
    stack: "Next.js, Tailwind CSS",
    link: "https://example.com/project2",
  },
  {
    imgSrc: "/img/sara-profile-image.jpg",
    title: "DJ DataBass",
    description: "Description of project 1",
    stack: "React, TypeScript",
    link: "https://example.com/project1",
  },
  {
    imgSrc: "/img/sara-profile-image.jpg",
    title: "Pokedex App",
    description: "Description of project 2",
    stack: "Next.js, Tailwind CSS",
    link: "https://example.com/project2",
  },
  {
    imgSrc: "/img/sara-profile-image.jpg",
    title: "Python Image Resizer",
    description: "Description of project 2",
    stack: "Next.js, Tailwind CSS",
    link: "https://example.com/project2",
  },
  {
    imgSrc: "/img/sara-profile-image.jpg",
    title: "DJ DataBass",
    description: "Description of project 1",
    stack: "React, TypeScript",
    link: "https://example.com/project1",
  },
  {
    imgSrc: "/img/sara-profile-image.jpg",
    title: "Pokedex App",
    description: "Description of project 2",
    stack: "Next.js, Tailwind CSS",
    link: "https://example.com/project2",
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
      <h2 className="text-4xl font-bold mb-8 border-b-2">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
        {displayedProjects.map((project, index) => (
          <div key={index} className="group [perspective:1000px]">
            <div className="relative w-full h-60 transition-transform duration-700 [transform-style:preserve-3d] group-hover:rotate-y-180 rounded-xl border border-[#FF6A00] shadow-[0_0_30px_#FF6A00]">
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
              <div className="absolute inset-0 [backface-visibility:hidden] rotate-y-180 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] rounded-xl p-4 flex flex-col justify-between cursor-pointer">
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
          ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-[#FF6A00]'} 
          border-[#FF6A00] shadow-[0_0_30px_#FF6A00]`}
      >
        Prev
      </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`w-10 h-10 rounded-md border border-[#FF6A00] shadow-[0_0_30px_#FF6A00] ${
              currentPage === i + 1 ? 'bg-[#FF6A00] font-bold' : 'text-white'
            } hover:bg-[#FF6A00] transition`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
          className={`px-4 py-1 border rounded-md text-white 
            ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-[#FF6A00]'}
            border-[#FF6A00] shadow-[0_0_30px_#FF6A00]`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Projects;