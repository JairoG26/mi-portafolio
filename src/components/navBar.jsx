import {useState} from "react";
import { Link } from "react-scroll";

import clsx from 'clsx';

const sections = ['about', 'projects', 'skills', 'contact'];

export const NavBar = () => {
  const [active, setActive] = useState('about');

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">Portfolio</div>
        <nav className="space-x-5">
          {sections.map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={() => setActive(section)}
              className={clsx(
                'cursor-pointer hover:text-blue-600',
                active === section
                  ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
                  : 'text-gray-700'
              )}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
