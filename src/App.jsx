import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-[#0a0c12] min-h-screen">
      <Navbar />
      {/* Rest of your sections will go here */}
      <div className="pt-32 text-center text-white">
        <h1 className="text-5xl font-bold">Hi, I'm <span className="text-[#8b9dff]">Huzaifa</span></h1>
        <p className="text-[#cdd9ff] mt-4">MERN Stack Developer</p>
      </div>
    </div>
  );
}

export default App;