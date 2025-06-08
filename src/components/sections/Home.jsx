import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black relative px-6"
    >
      <RevealOnScroll>
        <div className="text-center z-10 max-w-4xl mx-auto">
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
            Hi, I'm Aditya Kulkarni
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            I’m a passionate developer focused on crafting clean and
            user-friendly experiences. Let’s build something amazing together.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="#projects"
              className="bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/50"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-600 text-blue-600 py-3 px-8 rounded-lg font-semibold transition-transform duration-300 hover:-translate-y-1 hover:bg-blue-600/10 hover:shadow-md hover:shadow-blue-600/30"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};