import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { ParticleBackground } from './ParticleBackground';

export const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Aditya19110',
      icon: FaGithub,
      color: 'hover:text-white hover:shadow-white/20'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/Aditya191103',
      icon: FaLinkedin,
      color: 'hover:text-blue-400 hover:shadow-blue-400/20'
    },
    {
      name: 'Email',
      url: 'mailto:aditya.kulkarnicse@gmail.com',
      icon: FaEnvelope,
      color: 'hover:text-purple-400 hover:shadow-purple-400/20'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Aditya_191103/',
      icon: SiLeetcode,
      color: 'hover:text-yellow-400 hover:shadow-yellow-400/20'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] border-t border-white/10 overflow-hidden">
      {/* Particle Background */}
      <div className="opacity-30">
        <ParticleBackground />
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 mb-8 md:mb-12">
          
          {/* Brand Section */}
          <div className="md:col-span-2 text-center md:text-left">
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                  Aditya Kulkarni
                </span>
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                Full-Stack Developer & AI Enthusiast passionate about creating innovative solutions 
                that make a difference in the world.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-3 md:space-x-4 mb-6">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-2.5 md:p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-gray-400 ${link.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    aria-label={link.name}
                  >
                    <IconComponent className="text-lg md:text-xl group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>

            {/* Contact Info Pills */}
            <div className="space-y-3 flex flex-col items-center md:items-start">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-3 md:px-4 py-2 text-gray-300 max-w-full">
                <FaEnvelope className="text-blue-400 flex-shrink-0" />
                <span className="text-xs md:text-sm break-all">aditya.kulkarnicse@gmail.com</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-3 md:px-4 py-2 text-gray-300">
                <FaMapMarkerAlt className="text-purple-400 flex-shrink-0" />
                <span className="text-xs md:text-sm">Nanded, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left mt-8 md:mt-0">
            <h4 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 flex items-center justify-center md:justify-start gap-2">
              <span className="text-blue-400">🔗</span> Quick Links
            </h4>
            <div className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 md:hover:translate-x-2 hover:scale-105 relative group py-1"
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute inset-0 bg-blue-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-6 md:mb-8"></div>

        {/* Bottom Section */}
        <div className="text-center">
          <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-blue-500/30 transition-all duration-500">
            <p className="text-gray-300 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mb-2 text-sm md:text-base">
              <span>© 2025 Aditya Kulkarni. Crafted with</span>
              <span className="flex items-center gap-1">
                <FaHeart className="text-red-500 animate-pulse" /> using React & Tailwind CSS
              </span>
            </p>
            <p className="text-gray-400 text-xs md:text-sm">
              Thanks for visiting! Let's build something <span className="text-blue-400 font-semibold">amazing</span> together. 🚀
            </p>
            
            {/* Decorative Elements */}
            <div className="flex justify-center items-center gap-2 mt-3 md:mt-4">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-400 rounded-full animate-pulse delay-200"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400 rounded-full animate-pulse delay-400"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
