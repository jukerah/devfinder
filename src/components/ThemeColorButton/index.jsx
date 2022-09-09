import { useEffect, useState } from 'react';

export const ThemeColorButton = () => {
  const [ themeColor, setThemeColor ] = useState(localStorage.getItem("themeMode"));

  useEffect(() => {
    if (themeColor === null) {
      localStorage.setItem("themeMode", "dark");
      setThemeColor('dark');
      document.documentElement.classList.add('dark')
    }
  }, [themeColor]);

  const handleModeButton = () => {
    if (themeColor === 'dark') {
      localStorage.setItem("themeMode", "light");
      setThemeColor('light');
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark')
    } else {
      localStorage.setItem("themeMode", "dark");
      setThemeColor('dark');
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }
  
  return <button onClick={handleModeButton}>{(themeColor === 'dark') ? 'light' : 'dark' }</button>;
}

