import { FC } from 'react';
import Branding from './branding';
import Mode from './mode';
import NavLinks from './nav-links';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header className="grid grid-cols-3 items-center p-4 bg-sky-500">
      <Branding />
      <NavLinks />
      <Mode />
    </header>
  );
};

export default Header;
