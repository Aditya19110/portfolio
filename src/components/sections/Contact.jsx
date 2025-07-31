import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { ParticleBackground } from "../ParticleBackground";
import emailjs from "emailjs-com";
import { FaLinkedin } from "react-icons/fa";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
            .then(() => {
                alert("Message Sent!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => {
                alert("Message Failed. Please try again later.");
            });
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-24 px-4 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] text-white relative overflow-hidden">
            {/* Particle Background */}
            <ParticleBackground />
            
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>
            
            <RevealOnScroll>
                <div className="w-full max-w-2xl bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-12 relative z-10 hover:shadow-blue-500/10 transition-all duration-500">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent text-center">
                        📬 Let's Connect
                    </h2>
                    <form className="space-y-8" onSubmit={handleSubmit}>
                        <div className="relative group">
                            <label htmlFor="name" className="block text-sm text-gray-400 mb-2 font-medium">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                placeholder="John Doe"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all duration-300 group-hover:border-white/20"
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="relative group">
                            <label htmlFor="email" className="block text-sm text-gray-400 mb-2 font-medium">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                placeholder="john@example.com"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all duration-300 group-hover:border-white/20"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="relative group">
                            <label htmlFor="message" className="block text-sm text-gray-400 mb-2 font-medium">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                rows={6}
                                placeholder="Your message..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all duration-300 group-hover:border-white/20 resize-none"
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 pt-6">
                            <button
                                type="submit"
                                className="group w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 font-semibold rounded-xl hover:scale-105 shadow-lg hover:shadow-blue-500/30 transition-all duration-300 relative overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    ✉️ Send Message
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </button>
                            <a
                                href="https://www.linkedin.com/in/Aditya191103"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-full flex items-center justify-center gap-3 py-4 px-8 font-semibold rounded-xl bg-gradient-to-r from-[#0072b1] to-[#00a0dc] text-white hover:scale-105 shadow-lg hover:shadow-blue-600/30 transition-all duration-300 relative overflow-hidden"
                            >
                                <FaLinkedin className="text-xl relative z-10" />
                                <span className="relative z-10">Connect on LinkedIn</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#005582] to-[#0078a0] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </a>
                            <a
                                href="https://drive.google.com/file/d/19m2Yed6bo3c1jtj8V7Ril8_JIy-JqUPI/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-full flex items-center justify-center gap-3 py-4 px-8 font-semibold rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-105 shadow-lg hover:shadow-green-500/30 transition-all duration-300 relative overflow-hidden"
                            >
                                <span className="text-xl relative z-10">📄</span>
                                <span className="relative z-10">View Resume</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </a>
                        </div>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};