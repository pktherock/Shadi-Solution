import { FC } from 'react';

interface NavLinkProps {
  category: string;
}

const NavLink: FC<NavLinkProps> = ({ category }) => {
  return (
    <>
      <li className="bg-red-500 p-1 border-2 rounded hover:cursor-pointer border-yellow-400">
        {category}
      </li>
    </>
  );
};

export default NavLink;
