import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-20 right-4 z-50 p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
      aria-label="Toggle theme"
    >
      {isDark ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
    </button>
  );
};
