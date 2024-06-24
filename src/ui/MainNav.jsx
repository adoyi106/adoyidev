import { useEffect } from "preact/hooks";
import { Link } from "react-router-dom";

function MainNav({ isOpen }) {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section === "home") {
      console.log("hello");
    }
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(function () {
    const sectionHeroEl = document.getElementById("hero");
    const obs = new IntersectionObserver(function (entries) {
      const ent = entries[0];
      if (ent.isIntersecting) {
        document.body.classList.add("sticky");
      }
    });
    obs.observe(sectionHeroEl);
  }, []);
  return (
    <nav>
      {/* <ui className="list-none hidden lg:flex  gap-16 items-center"> */}
      {/* <ui className={`list-none flex lg:flex-col gap-16 items-center ${!isOpen ? `flex-row bg-[rgba(255, 255, 255, 0.97)] h-[100vh] w-full ` : ``}`}> */}
      <ui
        className={`list-none flex flex-col  gap-16 items-center justify-center ${
          isOpen
            ? "block  h-[100vh] w-full absolute top-0 left-0 bg-[#fffffff6]"
            : "hidden"
        } lg:flex lg:flex-row `}
      >
        <li>
          <Link
            className="nav-link"
            to="#"
            onClick={() => scrollToSection("home")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="#about"
            className="nav-link"
            onClick={() => scrollToSection("about")}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="#projects"
            className="nav-link"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="#contact"
            className="nav-link"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </Link>
        </li>
      </ui>
    </nav>
  );
}

export default MainNav;
