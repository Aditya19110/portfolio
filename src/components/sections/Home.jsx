import { RevealOnScroll } from "../RevealOnScroll";
import { ParticleBackground } from "../ParticleBackground";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black relative px-6 overflow-hidden"
    >
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <RevealOnScroll>
        <div className="text-center z-10 max-w-4xl mx-auto relative">
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent leading-tight animate-gradient bg-300%">
            Hi, I'm Aditya Kulkarni
          </h1>

          {/* Enhanced Description */}
          <div className="flex flex-col items-center justify-center gap-6 mb-12">
            <p className="text-gray-300 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
              I build <span className="text-blue-400 font-bold">production-ready web apps</span> and lead developer teams.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-5 py-2.5 rounded-full text-sm md:text-base font-medium shadow-lg shadow-purple-500/5">
                💼 Intern &rarr; Team Lead @ Softcadd
              </span>
              <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-5 py-2.5 rounded-full text-sm md:text-base font-medium shadow-lg shadow-blue-500/5">
                ⚡ React, Node, Python
              </span>
            </div>
          </div>

          {/* Enhanced Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-10">
            <a
              href="#projects"
              className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 md:px-10 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transform hover:-translate-y-1 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">View Work <span className="text-xl">🚀</span></span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            <a
              href="https://drive.google.com/file/d/1lpTIBiQebK1jeZC13uF7I-Jkr4oqw7O5/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-blue-500/50 text-blue-400 py-4 px-8 md:px-10 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:bg-blue-500/10 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transform hover:-translate-y-1 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">View Resume <span className="text-xl">📄</span></span>
              <div className="absolute inset-0 bg-blue-500/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a href="https://www.linkedin.com/in/Aditya191103" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://github.com/Aditya19110" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full animate-pulse mt-2"></div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};