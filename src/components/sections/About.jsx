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
                className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm font-medium hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
            >
                {tech}
            </span>
        ));

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-[#0a0a0a]">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4 text-center">
                {/* Heading */}
                <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    About Me
                </h2>

                {/* Description Box */}
                <div className="rounded-xl p-8 border border-white/10 bg-black/40 backdrop-blur-md shadow-lg hover:-translate-y-1 transition-transform duration-300">
                    <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                        I'm Aditya Kulkarni, a third-year CSE student passionate about solving real-world problems through technology.
                        I build powerful web apps, real-time collaborative tools, ML-powered platforms, and secure systems.
                        <br /><br />
                        I'm also highly focused on DSA using C++, solving 400+ problems across platforms to prepare for FAANG-level interviews.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        {/* DSA */}
                        <div className="md:col-span-2">
                            <h3 className="text-xl font-semibold text-white mb-4">DSA & Problem Solving</h3>
                            <div className="flex flex-wrap gap-3">{renderSkills(dsaSkills)}</div>

                        </div>
                        {/* Frontend */}
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4">Frontend Development</h3>
                            <div className="flex flex-wrap gap-3">{renderSkills(frontendSkills)}</div>
                        </div>

                        {/* Backend */}
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4">Backend & Databases</h3>
                            <div className="flex flex-wrap gap-3">{renderSkills(backendSkills)}</div>
                        </div>

                        {/* AI/ML */}
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4">AI / Machine Learning</h3>
                            <div className="flex flex-wrap gap-3">{renderSkills(mlSkills)}</div>
                        </div>

                        {/* Tools */}
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4">Tools & Platforms</h3>
                            <div className="flex flex-wrap gap-3">{renderSkills(toolsSkills)}</div>
                        </div>
                    </div>
                    {/* Education & Experience */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                        {/* Education */}
                        <div className="p-6 rounded-xl border border-white/10 bg-black/30 backdrop-blur-md shadow-md transition hover:-translate-y-1">
                            <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                                🎓 Education
                            </h3>
                            <div className="space-y-4 text-left">
                                <div className="border-l-4 border-blue-500 pl-4">
                                    <p className="text-gray-100 font-semibold">B.Tech in Computer Science</p>
                                    <p className="text-gray-400 text-sm">MGM's College of Engineering, Nanded</p>
                                    <p className="text-gray-500 text-sm">2022 – Present</p>
                                </div>
                                <div className="border-l-4 border-green-500 pl-4">
                                    <p className="text-gray-100 font-semibold">Higher Secondary (HSC)</p>
                                    <p className="text-gray-400 text-sm">NSB College, Nanded</p>
                                    <p className="text-gray-500 text-sm">2020 – 2022</p>
                                </div>
                                <div className="border-l-4 border-yellow-500 pl-4">
                                    <p className="text-gray-100 font-semibold">Secondary (SSC)</p>
                                    <p className="text-gray-400 text-sm">Gujarati High School</p>
                                    <p className="text-gray-500 text-sm">2020</p>
                                </div>
                            </div>
                        </div>

                        {/* Experience */}
                        <div className="p-6 rounded-xl border border-white/10 bg-black/30 backdrop-blur-md shadow-md transition hover:-translate-y-1">
                            <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                                💼 Experience
                            </h3>
                            <div className="space-y-4 text-left">
                                <div className="border-l-4 border-purple-500 pl-4">
                                    <p className="text-gray-100 font-semibold">Microsoft Learn Student Ambassador (Beta)</p>
                                    <p className="text-gray-400 text-sm">Microsoft | Remote</p>
                                    <p className="text-gray-500 text-sm">Sep 2023 – Present</p>
                                    <p className="text-gray-400 text-sm mt-1">
                                        Conducted workshops, mentored peers, and promoted tech learning via events and open-source contributions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};