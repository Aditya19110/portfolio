import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    const projects = [
        {
            title: "Echo Code",
            description: "A real-time collaborative code editor that enables multiple developers to write, edit, and debug code simultaneously with WebSocket-powered live sync and activity tracking.",
            tech: ["React", "Node.js", "WebSocket", "Express", "MongoDB"],
            color: "from-blue-500 to-purple-600",
            github: "https://github.com/Aditya19110/Real-Time-Collaborative-Code-Editor",
            live: "https://real-time-collaborative-code-editor-nine.vercel.app/",
        },
        {
            title: "Silent Scan",
            description: "A static malware analysis platform for `.exe` files. Extracts PE metadata, hashes, and integrates VirusTotal API to provide deep security insights.",
            tech: ["Python", "Flask", "pefile", "Render", "Vercel"],
            color: "from-red-500 to-yellow-500",
            github: "https://github.com/Aditya19110/Static-Analyzer",
            live: "https://static-analyzer.vercel.app/",
        },
        {
            title: "CalAnalyst",
            description: "A cancer care support chatbot powered by NLP. Helps users understand symptoms, get guidance, and find resources to manage early cancer detection.",
            tech: ["Python", "NLP", "Flask", "OpenAI API"],
            color: "from-pink-500 to-red-600",
            github: "https://github.com/Aditya19110/Team_sentinels_Unnati-2024",
            live: "",
        },
        {
            title: "LogMyBite",
            description: "A calorie tracker mobile app built using Flutter. Helps users log daily meals, count calories, and stay fit with smart suggestions and nutrition tracking.",
            tech: ["Flutter", "Firebase", "Dart", "GCP"],
            color: "from-green-400 to-blue-500",
            github: "https://github.com/Aditya19110/logmybite",
            live: "",
        }
    ];

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-[#0a0a0a]">
            <div className="max-w-6xl mx-auto px-4">
                <RevealOnScroll>
                    <motion.h2
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center"
                    >
                        🚀 Featured Projects
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                className="group rounded-2xl p-8 border border-white/10 bg-black/40 backdrop-blur-md shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-500 hover:border-blue-500/30 relative overflow-hidden"
                            >
                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                                
                                <div className="relative z-10">
                                    <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${project.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 mb-6 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-4 mb-6">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="bg-blue-500/10 text-blue-400 py-2 px-4 rounded-full text-xs font-medium hover:bg-blue-500/20 hover:scale-105 transition-all duration-300 border border-blue-500/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-all duration-300 group/link hover:scale-105"
                                            >
                                                <FaGithub className="group-hover/link:rotate-12 transition-transform duration-300" /> 
                                                GitHub
                                            </a>
                                        )}
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm text-gray-300 hover:text-green-400 transition-all duration-300 group/link hover:scale-105"
                                            >
                                                <FaExternalLinkAlt className="group-hover/link:rotate-12 transition-transform duration-300" /> 
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Corner Accent */}
                                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${project.color} opacity-10 rounded-bl-full`}></div>
                            </motion.div>
                        ))}
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};