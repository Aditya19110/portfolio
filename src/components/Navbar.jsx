import { useEffect } from "react"

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);
    return <nav className="fixed top-0 w-full z-50 bg-[rgba(10,10,10,0.85)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-xl font-bold text-white hover:text-blue-400 transition-colors">
                    Aditya <span className="text-blue-500">Kulkarni</span>
                </a>
            
            {/* Enhanced Mobile Menu Button */}
            <div 
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer relative z-50 group" 
                onClick={() => setMenuOpen((prev) => !prev)}
            >
                <div className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''} group-hover:bg-blue-400`}></div>
                <div className={`w-6 h-0.5 bg-white rounded transition-all duration-300 my-1 ${menuOpen ? 'opacity-0' : ''} group-hover:bg-blue-400`}></div>
                <div className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''} group-hover:bg-blue-400`}></div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
                <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group">
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group">
                    About
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group">
                    Projects
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group">
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
            </div>
            </div>
            </div>
    </nav>
}