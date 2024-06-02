//eslint-disable-next-line
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Footer from "./Footer";

function Home() {
  return (
    <main id="home">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default Home;
