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

    // Shared nav link classes
    const navLinkClass = `text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
        menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    } hover:text-blue-500 focus:outline-none`;

    return (
        <div
            className={`fixed top-0 right-0 w-full h-full bg-[rgba(10,10,10,0.85)] backdrop-blur-md shadow-xl z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out transform ${
                menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            {/* Close button */}
            <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-white text-4xl focus:outline-none cursor-pointer"
                aria-label="Close Menu"
            >
                &times;
            </button>

            {/* Navigation Links */}
            <a href="#home" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                Home
            </a>
            <a href="#about" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                About
            </a>
            <a href="#projects" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                Projects
            </a>
            <a href="#contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                Contact
            </a>
        </div>
    );
};