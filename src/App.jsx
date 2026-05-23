import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";

function App() {
  return (
    <div className="bg-[#0a0c12] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Projects />
      <Achievements />
      <Footer />
      
    </div>
  );
}

export default App;