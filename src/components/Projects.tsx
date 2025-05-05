import React from "react";
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
];

const Projects = () => {
    return (
      <div
        id="projects-section"
        className="min-h-screen pt-16 px-4 text-white"
      >
        <h2 className="text-4xl font-bold mb-8 border-b-2">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          
          {projects.map((projects, index) => (
            <div
              key={index}
              className="group perspective"
            >
              <div className="relative w-full h-60 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180 rounded-xl border border-[#FF6A00] shadow-[0_0_30px_#FF6A00]">
              
              {/* Front of Card */}
              <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden">
                <Image
                  src={projects.imgSrc}
                  alt={projects.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
                <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-center py-3">
                  <h3 className="text-lg font-semibold">{projects.title}</h3>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    )
}

export default Projects;