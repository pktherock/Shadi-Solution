import { CATEGORIES } from '@component/constants/nav-link-items';
import { FC } from 'react';
import NavLink from './nav-link';

interface NavLinksProps {}

const NavLinks: FC<NavLinksProps> = () => {
  return (
    <nav className="flex justify-around items-center list-none">
      {CATEGORIES.map((category, index) => (
        <NavLink key={index} category={category} />
      ))}
    </nav>
  );
};

export default NavLinks;
