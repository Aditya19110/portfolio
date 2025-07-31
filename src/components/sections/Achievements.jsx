import { RevealOnScroll } from '../RevealOnScroll';
import { FaStar, FaTrophy, FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Achievements = () => {
  const achievements = [
    {
      title: "400+ DSA Problems Solved",
      description: "Consistently solving data structures and algorithms problems across multiple platforms",
      icon: "🧠",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Microsoft Learn Student Ambassador",
      description: "Selected as a Beta Microsoft Learn Student Ambassador, conducting workshops and tech events",
      icon: "🏆",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Full-Stack Projects",
      description: "Built and deployed multiple production-ready applications using modern tech stack",
      icon: "🚀",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Open Source Contributor",
      description: "Active contributor to open-source projects and community-driven development",
      icon: "💻",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const stats = [
    { number: "20+", label: "Projects Completed", icon: "📊" },
    { number: "400+", label: "DSA Problems", icon: "🧮" },
    { number: "3+", label: "Years Learning", icon: "📚" },
    { number: "100%", label: "Dedication", icon: "💪" }
  ];

  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/6 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <h2 className="text-5xl font-bold mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent text-center">
            🏆 Achievements & Stats
          </h2>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{achievement.icon}</div>
                    <h3 className={`text-xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                      {achievement.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
