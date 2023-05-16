'use client';
import { FC, useState } from 'react';
import Branding from './branding';
import Mode from './mode';
import NavLinks from './nav-links';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>('light');

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <header className="bg-white dark:bg-gray-900 w-full sticky z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Branding />
        <Mode
          toggleMenu={toggleMenu}
          toggleTheme={toggleTheme}
          isNavOpen={isNavOpen}
          theme={theme}
        />
        <NavLinks isNavOpen={isNavOpen} />
      </div>
    </header>
  );
};

export default Header;
