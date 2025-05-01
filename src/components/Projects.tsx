import React from "react";
import Image from "next/image";

const Projects = () => {

const project = [
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
    return (
      <div
        id="projects-section"
        className="flex flex-col items-center text-center pt-16 px-4 min-h-screen"
      >
        <h2 className="text-4xl font-bold mb-8 border-b-2">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.map((project, index) => (
            <div
              key={index}
              className="p-[2px] rounded-2xl bg-[conic-gradient(at_top_left,_#00f0ff,_#ff007f)]"
            >
              <div className="bg-[#B0BEC5] rounded-2xl flex flex-row gap-4 h-full">
                <Image
                  src={project.imgSrc}
                  alt="Project image"
                  className="rounded-md object-cover w-[45%] h-auto max-h-[180px] sm:max-h-[220px] md:max-h-[260px]"
                  width={500}
                  height={300}
                />
                <div className="flex flex-col justify-between w-[55%] text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-200 mb-3">{project.description}</p>
                  <p className="text-xs text-gray-400 mb-2">{project.stack}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline text-cyan-300 hover:text-pink-400 transition"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}

export default Projects;