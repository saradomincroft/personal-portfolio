"use client";

import React, { useState } from "react";
import Image from "next/image";

const certificates = [
  { imgSrc: "/img/certificates/academyxi.jpg", title: "Academy Xi - Software Engineering" },
  { imgSrc: "/img/certificates/holmesglen-prog.jpg", title: "Holmesglen - Cert IV Programming" },
  { imgSrc: "/img/certificates/aws-intro-genai.jpg", title: "AWS - Introduction to Generative AI" },
];

const Certificates = () => {
  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <div 
      id="certificates"
      className="min-h-screen pt-20 px-8 text-[#F1F1F1]"
    >
      <h2 className="text-4xl font-bold mb-8 border-b-2 drop-shadow-[0_0_20px_#6A1B9A]">
        Certificates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="w-full cursor-pointer border border-[#64b0db] shadow-[0_0_20px_#64b0db] rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
            onClick={() => setModalImg(cert.imgSrc)}
          >
            <div className="aspect-square relative">
              <Image
                src={cert.imgSrc}
                alt={cert.title}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute bottom-0 w-full bg-gradient-to-r from-[#4B9F8C] to-[#4A3C73] bg-opacity-70 text-center py-2 px-2 rounded-b-xl">
                <h3 className="text-sm font-medium">{cert.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalImg && (
        <div className="fixed inset-0 bg-gradient-to-r from-[#4B9F8C] to-[#4A3C73] bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl aspect-square">
            <button
              className="absolute right-4 text-white text-3xl z-10 cursor-pointer"
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
