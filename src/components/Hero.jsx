// src/components/Hero.jsx
import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0a0c12] pt-10 overflow-hidden" id="hero">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* LEFT SIDE - Text Content */}
          <div className={`flex-1 text-center lg:text-left transition-all duration-1000 transform ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
          }`}>
            {/* Small Greeting */}
            <div className="inline-block mb-4">
              <span className="text-[#9aa9ff] font-medium tracking-wide text-sm md:text-base bg-[#1e243e]/50 px-4 py-1.5 rounded-full border border-[#2a3150]">
                ✨ Welcome to my portfolio
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-white via-[#8b9dff] to-[#5f7cff] bg-clip-text text-transparent animate-gradient">
                Muhammad Huzaifa
              </span>
            </h1>

            {/* Role Badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-5">
              <span className="px-4 py-2 bg-[#1a1f36] rounded-full text-[#7e8eff] font-semibold text-sm border border-[#2a3150] backdrop-blur-sm">
                🚀 MERN Stack Developer
              </span>
              <span className="px-4 py-2 bg-[#1a1f36] rounded-full text-[#7e8eff] font-semibold text-sm border border-[#2a3150] backdrop-blur-sm">
                💻 Full Stack Expert
              </span>
            </div>

            {/* Tech Badges - React, MongoDB */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
              <span className="px-4 py-1.5 bg-[#0f1222] rounded-full text-[#5f7cff] font-medium text-sm border border-[#3b4eff]/30 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#5f7cff] rounded-full animate-pulse"></span>
                React
              </span>
              <span className="px-4 py-1.5 bg-[#0f1222] rounded-full text-[#5f7cff] font-medium text-sm border border-[#3b4eff]/30 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#5f7cff] rounded-full animate-pulse"></span>
                MongoDB
              </span>
              <span className="px-4 py-1.5 bg-[#0f1222] rounded-full text-[#5f7cff] font-medium text-sm border border-[#3b4eff]/30 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#5f7cff] rounded-full animate-pulse"></span>
                Express.js
              </span>
              <span className="px-4 py-1.5 bg-[#0f1222] rounded-full text-[#5f7cff] font-medium text-sm border border-[#3b4eff]/30 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#5f7cff] rounded-full animate-pulse"></span>
                Node.js
              </span>
            </div>

            {/* Description */}
            <p className="text-[#b9c3e6] text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              I build modern, responsive and user-friendly web applications 
              that deliver exceptional experiences. Turning ideas into reality 
              with clean code and beautiful design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-[#3b4eff] to-[#5f72ee] text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#3b4eff]/30">
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#2c3fe0] to-[#4a5de0] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              
              <button className="px-8 py-3.5 rounded-full border-2 border-[#5f72ee] text-[#cddcff] font-semibold hover:bg-[#5f72ee]/10 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Me
              </button>
            </div>

            {/* Stats / Social Icons */}
            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start mt-10 pt-6 border-t border-[#1e243e]">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-white">2+</span>
                <span className="text-[#b9c3e6] text-sm">Years Experience</span>
              </div>
              <div className="w-px h-8 bg-[#1e243e]"></div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-white">15+</span>
                <span className="text-[#b9c3e6] text-sm">Projects Completed</span>
              </div>
              <div className="w-px h-8 bg-[#1e243e] hidden sm:block"></div>
              <div className="flex gap-4 ml-auto lg:ml-0">
                {/* GitHub */}
                <a href="https://github.com/huzaifa" target="_blank" rel="noopener noreferrer" className="text-[#cdd9ff] hover:text-[#5f7cff] transition-all hover:scale-110 transform duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="https://linkedin.com/in/huzaifa" target="_blank" rel="noopener noreferrer" className="text-[#cdd9ff] hover:text-[#5f7cff] transition-all hover:scale-110 transform duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                {/* Twitter */}
                <a href="https://twitter.com/huzaifa" target="_blank" rel="noopener noreferrer" className="text-[#cdd9ff] hover:text-[#5f7cff] transition-all hover:scale-110 transform duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.968-11.87c0-.213-.005-.426-.015-.637a9.987 9.987 0 002.457-2.539l-.002-.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Animated Illustration */}
          <div className={`flex-1 flex justify-center items-center transition-all duration-1000 delay-300 transform ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}>
            <div className="relative">
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#3b4eff]/20 to-[#5f72ee]/20 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-[#0f1222] to-[#0a0c12] rounded-3xl p-8 border border-[#262b44] shadow-2xl backdrop-blur-sm w-72 md:w-96 animate-float">
                {/* Decorative Elements */}
                <div className="absolute -top-3 -right-3 w-20 h-20 bg-[#3b4eff]/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-[#5f72ee]/10 rounded-full blur-xl"></div>
                
                {/* Code Icon */}
                <div className="text-center mb-6">
                  <div className="inline-block p-4 bg-[#1a1f36] rounded-2xl border border-[#3b4eff]/30">
                    <svg className="w-16 h-16 text-[#5f7cff] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>

                {/* Tech Stack Icons */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3 bg-[#1a1f36]/50 p-3 rounded-xl border border-[#2a3150]">
                    <span className="text-2xl">⚛️</span>
                    <span className="text-sm text-[#cdd9ff]">React</span>
                  </div>
                  <div className="flex items-center gap-3 bg-[#1a1f36]/50 p-3 rounded-xl border border-[#2a3150]">
                    <span className="text-2xl">🍃</span>
                    <span className="text-sm text-[#cdd9ff]">MongoDB</span>
                  </div>
                  <div className="flex items-center gap-3 bg-[#1a1f36]/50 p-3 rounded-xl border border-[#2a3150]">
                    <span className="text-2xl">🚀</span>
                    <span className="text-sm text-[#cdd9ff]">Express</span>
                  </div>
                  <div className="flex items-center gap-3 bg-[#1a1f36]/50 p-3 rounded-xl border border-[#2a3150]">
                    <span className="text-2xl">💚</span>
                    <span className="text-sm text-[#cdd9ff]">Node.js</span>
                  </div>
                </div>

                {/* Quote */}
                <div className="text-center">
                  <p className="text-[#b9c3e6] text-sm italic">"Code. Build. Deploy. Repeat."</p>
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-xs text-[#7e8eff]">Available for work</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-10 -left-10 w-16 h-16 bg-[#3b4eff]/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#5f72ee]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles - Add to index.css */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;