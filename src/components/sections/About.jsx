import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = ["React", "HTML", "CSS", "TailwindCSS", "JavaScript"];
    const backendSkills = ["Node.js", "Express.js", "MongoDB", "Python", "Firebase"];
    const mlSkills = ["TensorFlow", "PyTorch", "Flask", "OpenCV"];
    const toolsSkills = ["Git", "GitHub", "Render", "Vercel", "GCP", "Figma"];
    const dsaSkills = ["C++", "LeetCode", "Data Structures", "Algorithms", "Problem Solving"];

    const renderSkills = (skills) =>
        skills.map((tech, index) => (
            <span
                key={index}
                className="bg-blue-500/10 text-blue-400 py-2 px-4 rounded-full text-sm font-medium hover:bg-blue-500/20 hover:shadow-[0_4px_12px_rgba(59,130,246,0.3)] hover:scale-105 transition-all duration-300 border border-blue-500/20 cursor-default"
            >
                {tech}
            </span>
        ));

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]">
            <RevealOnScroll>
                <div className="max-w-6xl mx-auto px-4 text-center">
                    {/* Heading */}
                    <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                        About Me
                    </h2>

                    {/* Description Box */}
                    <div className="rounded-3xl p-8 md:p-12 glass hover:shadow-blue-500/10 transition-all duration-500 mb-12 text-left relative overflow-hidden group">
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700 pointer-events-none"></div>

                        <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
                            {/* Personal Details Left */}
                            <div className="flex-1 space-y-8 w-full">
                                <div>
                                    <p className="text-gray-400 text-lg mb-2 font-medium">Hello, I'm</p>
                                    <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent pb-2">
                                        Aditya Kulkarni
                                    </h2>
                                </div>
                                
                                <div className="space-y-6">
                                    <div className="flex items-center gap-5">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 flex items-center justify-center text-3xl border border-blue-500/20 shadow-lg shadow-blue-500/5">
                                            👨‍💻
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Role</p>
                                            <p className="font-semibold text-gray-100 text-lg">Full Stack Developer | Team Lead</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-5">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 flex items-center justify-center text-3xl border border-purple-500/20 shadow-lg shadow-purple-500/5">
                                            💼
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Current</p>
                                            <p className="font-semibold text-gray-100 text-lg">Leading at Softcadd Tech</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-5">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/10 flex items-center justify-center text-3xl border border-green-500/20 shadow-lg shadow-green-500/5">
                                            📍
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Location</p>
                                            <p className="font-semibold text-gray-100 text-lg">India</p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Passion Tags */}
                                <div className="flex flex-wrap gap-2 pt-2">
                                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300">🚀 Scalable Web Apps</span>
                                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300">✨ Modern UI/UX</span>
                                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300">👥 Team Leadership</span>
                                </div>
                            </div>
                            
                            {/* Impact Card Right */}
                            <div className="flex-1 w-full">
                                <div className="relative group/card">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-2xl blur opacity-20 group-hover/card:opacity-40 transition duration-500"></div>
                                    
                                    <div className="relative p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 h-full hover:border-blue-500/30 transition-colors">
                                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 pb-4 border-b border-white/5">
                                            <span className="text-3xl drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">🚀</span> Impact & Leadership
                                        </h3>
                                        <ul className="space-y-6 text-gray-200">
                                            <li className="flex items-start gap-4">
                                                <div className="mt-1 flex-shrink-0 w-7 h-7 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 text-sm border border-green-500/30 shadow-[0_0_10px_rgba(74,222,128,0.2)]">✔</div>
                                                <span className="leading-relaxed text-lg text-gray-300 group-hover/card:text-gray-100 transition-colors">Successfully leading and managing a cross-functional team of developers</span>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <div className="mt-1 flex-shrink-0 w-7 h-7 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 text-sm border border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.2)]">✔</div>
                                                <span className="leading-relaxed text-lg text-gray-300 group-hover/card:text-gray-100 transition-colors">Architected and shipped scalable, production-ready features</span>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <div className="mt-1 flex-shrink-0 w-7 h-7 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 text-sm border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]">✔</div>
                                                <span className="leading-relaxed text-lg text-gray-300 group-hover/card:text-gray-100 transition-colors">Optimized development systems to reduce bugs and accelerate velocity</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-12">
                            {/* DSA */}
                            <div className="md:col-span-2 bg-gradient-to-r from-blue-500/5 to-purple-500/5 p-6 rounded-xl border border-blue-500/20">
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="text-2xl">🧠</span> DSA & Problem Solving
                                </h3>
                                <div className="flex flex-wrap gap-3">{renderSkills(dsaSkills)}</div>
                            </div>

                            {/* Frontend */}
                            <div className="bg-gradient-to-br from-green-500/5 to-blue-500/5 p-6 rounded-xl border border-green-500/20">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="text-xl">💻</span> Frontend Development
                                </h3>
                                <div className="flex flex-wrap gap-3">{renderSkills(frontendSkills)}</div>
                            </div>

                            {/* Backend */}
                            <div className="bg-gradient-to-br from-orange-500/5 to-red-500/5 p-6 rounded-xl border border-orange-500/20">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="text-xl">⚙️</span> Backend & Databases
                                </h3>
                                <div className="flex flex-wrap gap-3">{renderSkills(backendSkills)}</div>
                            </div>

                            {/* AI/ML */}
                            <div className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 p-6 rounded-xl border border-purple-500/20">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="text-xl">🤖</span> AI / Machine Learning
                                </h3>
                                <div className="flex flex-wrap gap-3">{renderSkills(mlSkills)}</div>
                            </div>

                            {/* Tools */}
                            <div className="bg-gradient-to-br from-yellow-500/5 to-orange-500/5 p-6 rounded-xl border border-yellow-500/20">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="text-xl">🛠️</span> Tools & Platforms
                                </h3>
                                <div className="flex flex-wrap gap-3">{renderSkills(toolsSkills)}</div>
                            </div>
                        </div>

                    {/* Education & Experience */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Education */}
                        <div className="p-8 rounded-2xl glass hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1">
                            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                                🎓 Education
                            </h3>
                            <div className="space-y-6 text-left">
                                <div className="border-l-4 border-blue-500 pl-6 hover:bg-blue-500/5 p-4 rounded-r-lg transition-colors duration-300">
                                    <p className="text-gray-100 font-semibold text-lg">B.Tech in Computer Science</p>
                                    <p className="text-gray-400">MGM's College of Engineering, Nanded</p>
                                    <p className="text-gray-500 text-sm">2022 – Present</p>
                                </div>
                                <div className="border-l-4 border-green-500 pl-6 hover:bg-green-500/5 p-4 rounded-r-lg transition-colors duration-300">
                                    <p className="text-gray-100 font-semibold text-lg">Higher Secondary (HSC)</p>
                                    <p className="text-gray-400">NSB College, Nanded</p>
                                    <p className="text-gray-500 text-sm">2020 – 2022</p>
                                </div>
                                <div className="border-l-4 border-yellow-500 pl-6 hover:bg-yellow-500/5 p-4 rounded-r-lg transition-colors duration-300">
                                    <p className="text-gray-100 font-semibold text-lg">Secondary (SSC)</p>
                                    <p className="text-gray-400">Gujarati High School</p>
                                    <p className="text-gray-500 text-sm">2020</p>
                                </div>
                            </div>
                        </div>

                        {/* Experience */}
                        <div className="p-8 rounded-2xl glass hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-1">
                            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                                💼 Experience
                            </h3>
                            <div className="space-y-6 text-left">
                                {/* SoftCadd Team Lead */}
                                <div className="border-l-4 border-purple-500 pl-6 hover:bg-purple-500/5 p-4 rounded-r-lg transition-colors duration-300">
                                    <p className="text-gray-100 font-semibold text-lg">Team Lead Intern</p>
                                    <p className="text-purple-400 font-medium">Softcadd Technologies | Remote</p>
                                    <p className="text-gray-500 text-sm mb-3">January 2026 – Present</p>
                                    <ul className="space-y-1 text-gray-400 text-sm leading-relaxed list-none">
                                        <li>✔ Leading development tasks</li>
                                        <li>✔ Assigned team responsibilities</li>
                                        <li>✔ Mentoring juniors</li>
                                        <li>✔ Shipping features</li>
                                    </ul>
                                </div>

                                {/* SoftCadd Dev Intern */}
                                <div className="border-l-4 border-blue-500 pl-6 hover:bg-blue-500/5 p-4 rounded-r-lg transition-colors duration-300">
                                    <p className="text-gray-100 font-semibold text-lg">Developer Intern</p>
                                    <p className="text-blue-400 font-medium">Softcadd Technologies | Remote</p>
                                    <p className="text-gray-500 text-sm mb-3">November 2025 – January 2026</p>
                                    <ul className="space-y-1 text-gray-400 text-sm leading-relaxed list-none">
                                        <li>✔ Built core functional modules</li>
                                        <li>✔ Worked with React + backend</li>
                                        <li>✔ Agile sprints</li>
                                    </ul>
                                </div>

                            {/* LearnApart Internship */}
                            <div className="border-l-4 border-green-500 pl-6 hover:bg-green-500/5 p-4 rounded-r-lg transition-colors duration-300">
                                <p className="text-gray-100 font-semibold text-lg">Product Engineer Intern</p>
                                <p className="text-green-400 font-medium">LearnApart Pvt. Ltd. | Remote</p>
                                <p className="text-gray-500 text-sm mb-3">Aug 2025 – Oct 2025</p>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    Contributed to scalable web and mobile application development. Engineered and deployed a full-scale Gym ERP Admin Panel.
                                </p>
                                <ul className="list-disc list-inside text-gray-400 text-sm leading-relaxed">
                                    <li>Architected robust RESTful APIs using MERN Stack.</li>
                                    <li>Collaborated with Flutter team for seamless backend integration.</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};