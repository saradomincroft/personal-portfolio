import Image from "next/image";

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      id="contact"
      className="min-h-screen pt-20 px-4 text-[#F1F1F1] relative" 
    >
      <h2 className="text-4xl font-bold mb-8 border-b-2 drop-shadow-[0_0_20px_#6A1B9A]">
        Contact
      </h2>
      <div className="text-1xl sm:text-2xl md:text-3xl leading-relaxed text-left max-w-3xl mx-0 drop-shadow-[0_0_10px_#6A1B9A]">
        You can contact me at{" "}
        <span className="underline">
          saracatalanodev@gmail.com
        </span>{" "}
        <br />
        or message me directly on{" "}
        <a
          href="https://www.linkedin.com/in/catalanos"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00ffff] hover:text-[var(--light-steel)] transition-colors"
        >
          LinkedIn
        </a>
        .
      </div>
      <div
          id="astronaut"
          className="absolute top-80 right-4"
        >          
          <Image
            src="/img/astronaut-contact.png"
            alt="Astroanut"
            width={240}
            height={240}
            className="w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] object-contain drop-shadow-[0_0_20px_#64b0db]"
          />

        </div>

      <footer className="absolute bottom-0 left-0 w-full py-4 border-t-2 border-[#F1F1F1]">
      <div className="flex justify-end items-center gap-4 mt-2 text-[#F1F1F1] mr-4">
      {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/catalanos"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Image
                src="/img/icons/linkedin-icon.png"
                alt="LinkedIn"
                width={24}
                height={24}
                className="transition-all group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_#0d6efd]"
              />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/saradomincroft"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Image
                src="/img/icons/github-icon.svg"
                alt="GitHub"
                width={24}
                height={24}
                className="transition-all group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_#0d6efd]"
              />
            </a>

            {/* Dev.to */}
            <a
              href="https://dev.to/saradomincroft"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Image
                src="/img/icons/dev-icon.svg"
                alt="Dev.to"
                width={24}
                height={24}
                className="transition-all group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_#0d6efd]"
              />
            </a>
            <p className="text-l md:text-xl">© {currentYear} Sara Catalano</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
