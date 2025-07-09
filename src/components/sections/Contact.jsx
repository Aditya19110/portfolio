import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
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
        <section id="contact" className="min-h-screen flex items-center justify-center py-24 px-4 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] text-white">
            <RevealOnScroll>
                <div className="w-full max-w-2xl bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg p-8 md:p-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                        📬 Let's Connect
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <label htmlFor="name" className="block text-sm text-gray-400 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                placeholder="John Doe"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition"
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="relative">
                            <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                placeholder="john@example.com"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="relative">
                            <label htmlFor="message" className="block text-sm text-gray-400 mb-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                rows={5}
                                placeholder="Your message..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition"
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 pt-4">
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 font-semibold rounded-xl hover:scale-105 shadow-md transition-transform duration-300"
                            >
                                ✉️ Send Message
                            </button>
                            <a
                                href="https://www.linkedin.com/in/Aditya191103"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-3 py-3 px-6 font-semibold rounded-xl bg-gradient-to-r from-[#0072b1] to-[#00a0dc] text-white hover:scale-105 shadow-md transition-transform duration-300"
                            >
                                <FaLinkedin className="text-xl" />
                                Connect on LinkedIn
                            </a>
                            <a
                                href="https://drive.google.com/file/d/19m2Yed6bo3c1jtj8V7Ril8_JIy-JqUPI/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-3 py-3 px-6 font-semibold rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-105 shadow-md transition-transform duration-300"
                            >
                                📄 View Resume
                            </a>
                        </div>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};