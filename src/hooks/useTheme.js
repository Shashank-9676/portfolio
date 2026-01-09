import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme ? savedTheme === 'dark' : prefersDark;
  });
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    if (!isLoaded) return;
    
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark, isLoaded]);

  const toggleTheme = () => setIsDark(!isDark);

  return { isDark, toggleTheme, isLoaded };
};
