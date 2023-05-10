'use client';
import { Category } from '@component/constants/nav-link-items';
import Link from 'next/link';
import { FC } from 'react';

interface NavLinkProps {
  category: Category;
}

const NavLink: FC<NavLinkProps> = ({ category }) => {
  return (
    <Link
      href={category.href}
      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-emerald-100 md:hover:bg-transparent md:hover:text-emerald-200
      md:active:text-emerald-300 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 active:bg-emerald-300
      "
    >
      {category.text}
    </Link>
  );
};

export default NavLink;
