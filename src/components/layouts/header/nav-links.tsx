import { NAVIGATION_LISTS } from '@component/constants/nav-link-items';
import { FC } from 'react';
import NavLink from './nav-link';

interface NavLinksProps {
  isNavOpen: boolean;
}

const NavLinks: FC<NavLinksProps> = ({ isNavOpen }) => {
  return (
    <nav
      className={`items-center justify-between ${
        !isNavOpen ? 'hidden' : ''
      } w-full md:flex md:w-auto md:order-1`}
      id="navbar-sticky"
    >
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {NAVIGATION_LISTS.map((navList, index) => (
          <NavLink key={index} category={navList} />
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
