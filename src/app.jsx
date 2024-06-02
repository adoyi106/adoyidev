import { BrowserRouter, Route, Routes } from "react-router-dom";

// import AppLayout from "./ui/AppLayout";
// import MainNav from "./ui/MainNav";
import About from "./sections/About";

import Home from "./sections/Home";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Header from "./sections/Header";
export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

// export default App;
