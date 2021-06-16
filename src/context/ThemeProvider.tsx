import { useState, useEffect } from 'react';
import ThemeContext from './themeContext';

type ThemeProps = {
  children: React.ReactNode;
};

const getInitialTheme = (): string => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme ? JSON.parse(savedTheme) : 'Light';
};

const ThemeProvider = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const changeTheme = () => {
    setTheme(theme === 'Light' ? 'Dark' : 'Light');
  };
  const appTheme = {
    theme,
    changeTheme
  };

  return (
    <ThemeContext.Provider value={appTheme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
