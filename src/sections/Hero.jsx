import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

function Hero() {
  return (
    <section
      id="hero"
      className="section-hero bg-[#f9f9f9] pt-[4.8rem] pr-0 pl-0 pb-[9.6rem] font-poppins"
    >
      <div className="hero">
        <div className="hero-main flex flex-col lg:flex-row gap-12 lg:gap-[9.6rem] px-[1rem] lg:px-[9.2rem]  mx-auto justify-centeritems-center ">
          <div className="hero-description flex flex-col text-center lg:text-start relative">
            <h1 className="text-6xl lg:text-8xl text-[#2d2e32] mt-8 mb-8 font-medium">
              Front-End React Developer
            </h1>
            <img
              src="./image/waving.png"
              className="h-[4.5rem] w-[4.5rem] lg:h-[6rem] lg:w-[6rem] absolute right-[3.25rem] top-[5.25rem]  lg:top-[8.25rem] lg:right-[14.25rem]"
              alt="waving hand"
            />
            <p className="text-3xl font-mulish font-medium text-[#555] leading-relaxed">
              Hi, I'm Adoyi Owoicho. A passionate Front-end React Developer
              based in Abuja, Nigeria. 📍
            </p>
            <span className="m-auto lg:m-[2.5rem] flex gap-5">
              <a
                aria-label="linkedIn"
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/owoicho-emmanuel/"
              >
                <IoLogoLinkedin className="text-6xl" />
              </a>
              <a
                aria-label="github"
                rel="noreferrer"
                target="_blank"
                href="https://github.com/adoyi106"
              >
                <IoLogoGithub className="text-6xl" />
              </a>
            </span>
          </div>

          <div className="hero-image mx-auto animate-ane border-4 border-[#2d2e32] border-solid transition-all duration-[1s] ease-in-out bg-[url('../image/adoyi.png')] h-[35rem] bg-no-repeat bg-cover bg-center w-[31rem] sm:w-[35rem] lg:w-[58rem] lg:h-[40rem] order-first lg:order-last "></div>
        </div>
        <div className="stack flex flex-col lg:flex-row flex-wrap text-3xl items-center gap-12 text-[#2d2e32]">
          <p className=" border-b-[2px] lg:border-b-0 lg:border-r-[2px] font-mulish pb-[2rem] lg:pb-0c lg:pr-[2rem] border-solid border-[#2d2e32]">
            Tech Stack
          </p>
          <div className="skills-icons flex flex-wrap items-center justify-center gap-12">
            <img src="https://skillicons.dev/icons?i=html,css" alt="icon" />
            <img
              src="https://skillicons.dev/icons?i=tailwind,styledcomponents"
              alt="icon"
            />
            <img
              src="https://skillicons.dev/icons?i=react,supabase"
              alt="icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
