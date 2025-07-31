import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    // Close menu on ESC key press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setMenuOpen(false);
            }
        };
        if (menuOpen) {
            document.addEventListener("keydown", handleKeyDown);
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [menuOpen, setMenuOpen]);

    return (
        <div
            className={`fixed top-0 right-0 w-full h-full bg-[rgba(10,10,10,0.95)] backdrop-blur-xl shadow-xl z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out transform ${
                menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
        >
            {/* Close button */}
            <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-white text-4xl focus:outline-none cursor-pointer hover:text-blue-400 transition-colors duration-300 hover:rotate-90 transform"
                aria-label="Close Menu"
            >
                &times;
            </button>

            {/* Navigation Links with Staggered Animation */}
            <div className="flex flex-col items-center space-y-8">
                {[
                    { href: "#home", text: "Home", delay: "delay-100" },
                    { href: "#about", text: "About", delay: "delay-200" },
                    { href: "#projects", text: "Projects", delay: "delay-300" },
                    { href: "#contact", text: "Contact", delay: "delay-400" }
                ].map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        className={`text-3xl font-semibold text-white transform transition-all duration-500 ${
                            menuOpen ? `opacity-100 translate-y-0 ${item.delay}` : "opacity-0 translate-y-8"
                        } hover:text-blue-400 hover:scale-110 focus:outline-none relative group`}
                        onClick={() => setMenuOpen(false)}
                    >
                        {item.text}
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-400"></div>
                </div>
            </div>
        </div>
    );
};