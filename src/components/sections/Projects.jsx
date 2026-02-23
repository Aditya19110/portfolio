/* eslint-disable no-unused-vars */
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    const projects = [
        {
            title: "Echo Code",
            description: "A real-time collaborative code editor that enables multiple developers to write, edit, and debug code simultaneously.",
            accomplishments: [
                "WebSocket-powered live sync and activity tracking",
                "Multi-language support and direct code execution",
            ],
            tech: ["React", "Node.js", "WebSocket", "Express", "MongoDB"],
            color: "from-blue-500 to-purple-600",
            github: "https://github.com/Aditya19110/Real-Time-Collaborative-Code-Editor",
            live: "https://code-together-ak.vercel.app/",
        },
        {
            title: "CollabSync",
            description: "A modern, real-time Kanban board application featuring a premium glassmorphism UI.",
            accomplishments: [
                "Comprehensive task management and seamless live collaboration",
                "Secure authentication and data persistence",
            ],
            tech: ["MERN Stack", "Socket.IO", "Glassmorphism", "JWT"],
            color: "from-teal-400 to-cyan-500",
            github: "https://github.com/Aditya19110/collabsync",
            live: "https://collabsync-ak.vercel.app/login",
        },
        {
            title: "Silent Scan — Static Malware Analyzer",
            description: "A web platform that analyzes Windows executables and outputs detailed static analysis results.",
            accomplishments: [
                "Uploaded files get scanned with hash + VirusTotal info",
                "Displays PE header, entropy, sections",
            ],
            tech: ["React", "Node.js", "pefile", "Render", "Vercel"],
            color: "from-red-500 to-yellow-500",
            github: "https://github.com/Aditya19110/Static-Analyzer",
            live: "https://static-analyzer.vercel.app/",
        },
        {
            title: "Calanalyst",
            description: "A privacy-first, CPU-optimized AI chatbot for cancer-related inquiries.",
            accomplishments: [
                "Features RAG technology and a modern Glassmorphism UI",
                "Powered by Intel's Neural Chat LLM",
            ],
            tech: ["Python", "RAG", "Intel OpenVINO", "LangChain"],
            color: "from-pink-500 to-rose-600",
            github: "https://github.com/Aditya19110/Calanalyst",
        },
        {
            title: "Agro Hub",
            description: "A comprehensive web platform connecting farmers with technology for buying, selling, and education.",
            accomplishments: [
                "Includes marketplace and crop disease detection features",
                "Platform for farmers to sell their products directly",
            ],
            tech: ["HTML", "CSS", "JavaScript", "Flask", "ML"],
            color: "from-green-500 to-lime-500",
            github: "https://github.com/Aditya19110/Agro_Hub",
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
                                className="group rounded-2xl p-8 glass hover:bg-black/50 transition-all duration-500 hover:border-blue-500/30 relative overflow-hidden"
                            >
                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                <div className="relative z-10">
                                    <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${project.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 mb-4 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 font-medium">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="bg-blue-500/10 text-blue-400 py-1.5 px-3 rounded-full text-xs font-semibold hover:bg-blue-500/20 transition-all duration-300 border border-blue-500/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <ul className="mb-6 space-y-2 text-sm text-gray-400 list-none">
                                        {project.accomplishments?.map((acc, i) => (
                                            <li key={i} className="flex gap-2 items-start">
                                                <span className="text-green-400 font-bold">✔</span>
                                                <span>{acc}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex gap-4 border-t border-white/10 pt-4 mt-auto">
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