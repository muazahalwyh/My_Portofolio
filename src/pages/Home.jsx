import Hero from "../component/Hero";
import About from "./About";
import Interest from "./Interest";
import Skills from "./Skills";
import Experience from "./Experience";
import Awards from "./Awards";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    // Scroll ke bagian yang sesuai berdasarkan pathname
    const path = location.pathname.replace("/", ""); // Mengambil path tanpa '/'
    if (path === "about") {
      document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    } else if (path === "interest") {
      document.getElementById("interest").scrollIntoView({ behavior: "smooth" });
    } else if (path === "skills") {
      document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
    } else if (path === "experience") {
      document.getElementById("experience").scrollIntoView({ behavior: "smooth" });
    } else if (path === "awards") {
      document.getElementById("awards").scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="interest">
        <Interest />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="awards">
        <Awards />
      </section>       
    </>
  )
}