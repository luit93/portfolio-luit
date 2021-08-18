import { Hero } from "./components/hero/Hero";
import { Skills } from "./components/sections/skills/Skills";
import { Projects } from "./components/sections/projects/Projects";
import { About } from "./components/sections/about/About";
import { Footer } from "./components/sections/footer/Footer";
import { Contact } from "./components/contact/Contact";
import "./App.css";

function App() {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
