import { darkTheme, lightTheme } from '@/src/data';
import { useIsomorphicEffect } from '@/src/hooks';
import { useState } from 'react';
import { createContainer } from 'unstated-next';

function useTheme() {
  useIsomorphicEffect(() => {
    const storedTheme = window.localStorage.getItem('theme');

    !storedTheme &&
      window.matchMedia('(prefers-color-scheme:dark)').matches &&
      setCurrentTheme('dark');

    storedTheme && setCurrentTheme(storedTheme);
  }, []);

  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleTheme = () => {
    setCurrentTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';

      if (typeof window !== undefined) {
        window.localStorage.setItem('theme', newTheme);
      }

      return newTheme;
    });
  };

  let theme;

  switch (currentTheme) {
    case 'light':
      theme = lightTheme;
      break;
    case 'dark':
      theme = darkTheme;
      break;

    default:
      theme = lightTheme;
  }

  return {
    theme,
    toggleTheme,
  };
}

export const Theme = createContainer(useTheme);
