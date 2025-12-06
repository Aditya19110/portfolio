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
                    <div className="rounded-2xl p-8 md:p-14 glass hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500 mb-8 text-left">
                        <p className="text-gray-300 mb-10 text-xl leading-relaxed">
                            I'm <span className="text-blue-400 font-semibold">Aditya Kulkarni</span>, a Final Year CSE student passionate about solving real-world problems through technology.
                            I build powerful web apps, real-time collaborative tools, ML-powered platforms, and secure systems.
                            <br /><br />
                            I'm also highly focused on <span className="text-purple-400 font-semibold">DSA using C++</span>, solving 400+ problems across platforms to prepare for FAANG-level interviews.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
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
                                {/* SoftCadd Internship */}
                            <div className="border-l-4 border-blue-500 pl-6 hover:bg-blue-500/5 p-4 rounded-r-lg transition-colors duration-300">
                                <p className="text-gray-100 font-semibold text-lg">Software Developer Intern</p>
                                <p className="text-blue-400 font-medium">SoftCadd Technologies | Remote</p>
                                <p className="text-gray-500 text-sm mb-3">Nov 2025 – Present</p>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    Leading development of AI-powered professional search platform. Spearheading end-to-end engineering and leading a team of developers.
                                </p>
                                <ul className="list-disc list-inside text-gray-400 text-sm leading-relaxed">
                                    <li>Implemented robust backend architecture using Java, Spring Boot, React, and Supabase.</li>
                                    <li>Mentoring interns and managing task pipelines using agile workflows.</li>
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

                            <div className="border-l-4 border-purple-500 pl-6 hover:bg-purple-500/5 p-4 rounded-r-lg transition-colors duration-300">
                                    <p className="text-gray-100 font-semibold text-lg">Microsoft Learn Student Ambassador (Beta)</p>
                                    <p className="text-purple-400 font-medium">Microsoft | Remote</p>
                                    <p className="text-gray-500 text-sm mb-3">Sep 2023 – Present</p>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Conducted workshops, mentored peers, and promoted tech learning via events and open-source contributions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};