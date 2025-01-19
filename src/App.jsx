import { useEffect, useState } from "react";
import About from "./components/About";
import Certficate from "./components/Certficate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

const App = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("Home");
      if (homeSection) {
        const homeBottom = homeSection.offsetHeight;
        const currentScroll = window.scrollY;

        // Show button if scrolled past Home section, otherwise hide it
        setShowButton(currentScroll > homeBottom - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <section
        id="Home"
        className="bg-gradient-to-tr from-[#373B44] to-[#4286f4]"
      >
        <Navbar onNavigate={scrollToSection} />

        <Hero />
      </section>
      <section id="About" className=" md:container pt-10">
        <About />
      </section>
      <section id="Projects" className=" md:container pt-10">
        <Project />
      </section>
      <section id="Certifications" className="md:container pt-10">
        <Certficate />
      </section>
      <section
        id="Contact"
        className=" bg-blue-300 pt-12"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <Contact />
        <section className="bg-gray-100 pt-4">
          <Footer onNavigate={scrollToSection} />
        </section>
      </section>
      {showButton && (
        <button
          data-aos="fade-down"
          data-aos-duration="2000"
          onClick={() => scrollToSection("Home")}
          className="fixed bottom-6 right-6 z-50 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 animate-float"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
            className="hover:animate-bounce-slight"
          >
            <path d="M440-727 256-544l-56-56 280-280 280 280-56 57-184-184v287h-80v-287Zm0 487v-120h80v120h-80Zm0 160v-80h80v80h-80Z" />
          </svg>{" "}
        </button>
      )}
    </div>
  );
};

export default App;
