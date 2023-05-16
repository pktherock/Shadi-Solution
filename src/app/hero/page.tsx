import Link from 'next/link';
import { FC } from 'react';

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <section
      id="home"
      className="bg-center bg-no-repeat bg-[url('/assets/img/brand/brand_logo_lg.jpeg')] bg-gray-500 bg-blend-multiply bg-cover"
    >
      <div className="px-4 mx-auto max-w-screen-2xl text-center py-4 lg:py-56">
        <h1 className="mb-4 text-2xl font-bold tracking-tight leading-none text-slate-300 md:text-5xl lg:text-6xl">
          Helping you to plan all your events without any hassle!
        </h1>

        <p className="mb-8 text-lg font-bold text-gray-400 lg:text-xl sm:px-16 lg:px-48">
          ( Powered by{' '}
          <span className="bg-yellow-300 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-1 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
            Gupta Chats & Sweets
          </span>
          )
        </p>
        <p className="mb-8 text-lg font-bold text-gray-400 lg:text-xl sm:px-16 lg:px-48">
          We are providing the best solution for all kind of events like shadi,
          Birthday, etc.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            href="#contact"
            className="inline-flex justify-center items-center py-3 px-20 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Plan Now
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <Link
            href="#services"
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Explore Features
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
