"use client";

import React, { useState } from "react";
import Image from "next/image";

const certificates = [
  { imgSrc: "/img/certificates/academyxi.jpg", title: "Academy Xi - Software Engineering Transform" },
  { imgSrc: "/img/certificates/holmesglen-prog.jpg", title: "Holmesglen - Cert IV Programming" },
  { imgSrc: "/img/certificates/aws-intro-genai.jpg", title: "UX Design Principles" },
];

const Certificates = () => {
  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <div 
        id="certificates-section"
        className="pt-16 px-4 text-[#F1F1F1]">
      <h2 className="text-4xl font-bold mb-8 border-b-2 drop-shadow-[0_0_20px_#6A1B9A]">
        Certificates
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="w-full aspect-square cursor-pointer relative group"
            onClick={() => setModalImg(cert.imgSrc)}
          >
            <div className="w-full h-full clip-hexagon overflow-hidden border border-[#64b0db] shadow-[0_0_20px_#64b0db]">
              <Image
                src={cert.imgSrc}
                alt={cert.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalImg && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl aspect-square">
            <button
              className="absolute top-4 right-4 text-white text-3xl z-10"
              onClick={() => setModalImg(null)}
            >
              &times;
            </button>
            <Image
              src={modalImg}
              alt="Certificate"
              layout="fill"
              objectFit="contain"
              className="rounded"
            />
          </div>
        </div>
      )}


    </div>
  );
};

export default Certificates;
