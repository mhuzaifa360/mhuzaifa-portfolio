import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-10 py-16">

      {/* Left Side */}
      <div className="md:w-1/2 space-y-6">

        <h2 className="text-4xl md:text-6xl font-bold">
          Muhammad <br />
          <span className="text-gold">Huzaifa</span>
        </h2>

        <p className="text-gray-400">
          Full Stack Developer skilled in React.js, Node.js & Tailwind CSS.
        </p>

        <button className="bg-gold text-black px-6 py-3 rounded-full font-semibold">
          Download CV
        </button>

      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <div className="relative">
          
          {/* glowing effect */}
          <div className="absolute -inset-4 bg-gold blur-3xl opacity-20 rounded-full"></div>

          <img
            src="/profile.png"
            className="w-[300px] md:w-[380px] rounded-2xl relative z-10 border-4 border-gold"
          />
        </div>
      </div>

    </div>
  );
}