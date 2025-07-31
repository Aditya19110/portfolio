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
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent leading-tight animate-gradient bg-300% bg-gradient-to-r">
            Hi, I'm Aditya Kulkarni
          </h1>

          {/* Enhanced Description */}
          <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm a <span className="text-blue-400 font-semibold">passionate developer</span> focused on crafting clean and
            user-friendly experiences. Let's build something{" "}
            <span className="text-purple-400 font-semibold">amazing</span> together.
          </p>

          {/* Enhanced Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="#projects"
              className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-10 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1 relative overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            <a
              href="#contact"
              className="group border-2 border-blue-500 text-blue-400 py-4 px-10 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-500/10 hover:shadow-md hover:shadow-blue-600/30 transform hover:-translate-y-1 relative overflow-hidden"
            >
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-blue-500/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
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