import { useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import { 
  SiReact, SiNodedotjs, SiMongodb, SiPython, SiJavascript, 
  SiTailwindcss, SiGit, SiDocker, SiPostgresql, SiTypescript,
  SiFigma, SiVercel, SiNetlify, SiFirebase, SiExpress,
  SiFlutter, SiDart, SiTensorflow, SiOpencv, SiFlask
} from 'react-icons/si';
import { FaAws, FaGithub } from 'react-icons/fa';

export const SkillsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: [
      { name: 'React', icon: SiReact, color: 'text-blue-400', level: 90 },
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', level: 85 },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600', level: 80 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400', level: 90 },
      { name: 'HTML/CSS', icon: null, color: 'text-orange-400', level: 95 },
    ],
    backend: [
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-400', level: 85 },
      { name: 'Express.js', icon: SiExpress, color: 'text-gray-400', level: 80 },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', level: 85 },
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400', level: 75 },
      { name: 'Python', icon: SiPython, color: 'text-yellow-300', level: 90 },
      { name: 'Flask', icon: SiFlask, color: 'text-gray-300', level: 80 },
    ],
    mobile: [
      { name: 'Flutter', icon: SiFlutter, color: 'text-blue-400', level: 85 },
      { name: 'Dart', icon: SiDart, color: 'text-blue-600', level: 80 },
      { name: 'Firebase', icon: SiFirebase, color: 'text-orange-400', level: 75 },
    ],
    ai: [
      { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-500', level: 75 },
      { name: 'OpenCV', icon: SiOpencv, color: 'text-green-400', level: 70 },
      { name: 'Python ML', icon: SiPython, color: 'text-yellow-300', level: 85 },
    ],
    tools: [
      { name: 'Git', icon: SiGit, color: 'text-orange-600', level: 90 },
      { name: 'GitHub', icon: FaGithub, color: 'text-gray-300', level: 90 },
      { name: 'Docker', icon: SiDocker, color: 'text-blue-500', level: 70 },
      { name: 'AWS', icon: FaAws, color: 'text-orange-400', level: 65 },
      { name: 'Vercel', icon: SiVercel, color: 'text-white', level: 85 },
      { name: 'Figma', icon: SiFigma, color: 'text-purple-400', level: 75 },
    ]
  };

  const categories = [
    { id: 'frontend', name: 'Frontend', emoji: '🎨' },
    { id: 'backend', name: 'Backend', emoji: '⚙️' },
    { id: 'mobile', name: 'Mobile', emoji: '📱' },
    { id: 'ai', name: 'AI/ML', emoji: '🤖' },
    { id: 'tools', name: 'Tools', emoji: '🛠️' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-5xl font-bold mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent text-center">
            💻 Technical Skills
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span className="mr-2">{category.emoji}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories[activeCategory].map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group glass rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {IconComponent && <IconComponent className={`text-2xl ${skill.color}`} />}
                      <h3 className="text-white font-semibold">{skill.name}</h3>
                    </div>
                    <span className="text-gray-400 text-sm font-medium">{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
