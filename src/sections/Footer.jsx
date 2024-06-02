import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

function Footer() {
  return (
    <footer className="p-[3rem] bg-[#2d2e32]">
      <div className="container max-w-[120rem] mx-0 px-0 text-white flex flex-col gap-10 text-center lg:flex-row lg:justify-between items-center">
        <p className="copyright text-3xl font-bold">
         
          Copyright &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
        <div className="footer-icon flex gap-8 justify-center">
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
