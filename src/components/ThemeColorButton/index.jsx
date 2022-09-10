import { useEffect, useState } from 'react';
import { svg } from '../../data/svgList';

export const ThemeColorButton = () => {
  const [ themeColor, setThemeColor ] = useState(localStorage.getItem('themeMode'));

  useEffect(() => {
    if (themeColor === null) {
      localStorage.setItem('themeMode', 'dark');
      setThemeColor('dark');
      document.documentElement.classList.add('dark')
    } else document.documentElement.classList.add(themeColor);
  }, [themeColor]);

  const handleModeButton = () => {
    if (themeColor === 'dark') {
      localStorage.setItem('themeMode', 'light');
      setThemeColor('light');
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark')
    } else {
      localStorage.setItem('themeMode', 'dark');
      setThemeColor('dark');
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }
  
  return (
    <button
      className='text-kashmirBlue dark:text-white flex items-center text-base md:text-xl uppercase font-bold pt-2 pb-2 pl-2'
      onClick={handleModeButton}
    >
      {(themeColor === 'dark')
        ? <>light {svg.icon.sun}</>
        : <>dark {svg.icon.moon}</>
      }
    </button>
  );
}

