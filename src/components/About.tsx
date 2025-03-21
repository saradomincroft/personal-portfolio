import Image from "next/image";

const About = () => {

    return (
        <div id="about-section" className="flex" style={{height: "100vh" }}>
            <h2>About</h2>
                  <div className="flex flex-col items-center pt-16">
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
                  </div>
                  <div className="relative flex items-center">
                  <div className="relative w-[48px] h-[48px] sm:w-[64px] sm:h-[64px] cursor-pointer ml-4">
                      <Image
                        src="/img/github-icon.svg"
                        alt="Profile picture"
                        width={150}
                        height={150}
                        priority
                        className="object-contain drop-shadow-lg"
                      />
                  </div>
                  <div className="relative w-[48px] h-[48px] sm:w-[64px] sm:h-[64px] cursor-pointer ml-4">
                      <Image
                        src="/img/linkedin-icon.png"
                        alt="Profile picture"
                        width={150}
                        height={150}
                        priority
                        className="object-contain drop-shadow-lg"
                      />
                    </div>
                  </div>
        </div>
    );
};

export default About;