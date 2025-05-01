import Image from "next/image";

type Tech = {
  title: string;
  imgSrc: string;
};

const techStack: Tech[] = [
  { title: "Java", imgSrc: "/img/icons/java.svg" },
  { title: "Java", imgSrc: "/img/icons/java.svg" },
  { title: "Java", imgSrc: "/img/icons/java.svg" },
  { title: "Java", imgSrc: "/img/icons/java.svg" },
  { title: "Java", imgSrc: "/img/icons/java.svg" },
  { title: "Java", imgSrc: "/img/icons/java.svg" },
  { title: "Java", imgSrc: "/img/icons/java.svg" },
  { title: "Java", imgSrc: "/img/icons/java.svg" },
  { title: "Java", imgSrc: "/img/icons/java.svg" },
  { title: "Java", imgSrc: "/img/icons/java.svg" },
];

const columns: Tech[][] = [[], [], []];
techStack.forEach((item, index) => {
  const colIndex = [1, 0, 2][index % 3];
  columns[colIndex].push(item);
});

const About = () => {
  return (
    <div
      id="about-section"
      className="flex flex-col items-center text-center pt-16 px-4 min-h-screen"
    >
      <h2 className="text-3xl font-bold mb-8">About</h2>

      {/* Main Flex Container */}
      <div className="flex flex-col items-center justify-center gap-12 w-full max-w-4xl px-6">
        
        {/* Left Column: Image + Bio */}
        <div className="flex flex-col items-center text-center md:text-left md:items-start max-w-sm">
          <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-full overflow-hidden mb-4">
            <Image
              src="/img/sara-profile-image.jpg"
              alt="Profile picture"
              width={300}
              height={300}
              priority
              className="object-contain drop-shadow-lg"
            />
          </div>
          <p className="text-white text-sm">
            Bio TBA
          </p>
        </div>

        {/* Right Column: Tech Stack */}
        <div className="flex gap-6 justify-center items-start">
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
                  className="p-[2px] rounded-xl bg-[conic-gradient(at_top_left,_#00f0ff,_#ff007f)]"
                >
                  <div
                    className="flex flex-col items-center justify-center w-24 h-16 p-3 rounded-xl"
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
