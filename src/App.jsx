import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <div className="bg-[#0a0c12] min-h-screen">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;