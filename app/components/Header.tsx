"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute w-full top-0 z-10 ">
      {/* Overlay with Shade */}
      <div className="bg-footerCyan bg-opacity-80 absolute inset-0"></div>

      {/* Header Content */}
      <div className="relative flex justify-between items-center px-12 py-6">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-white">connectED</h1>
        </div>
        <nav>
          <ul className="flex space-x-8 items-center">
            <li>
              <Link href="/opportunities" className="text-white hover:text-blue-300">
                Opportunities
              </Link>
            </li>
            <li>
              <Link href="/stories" className="text-white hover:text-blue-300">
                Stories
              </Link>
            </li>
            <li>
              <Link href="/team" className="text-white hover:text-blue-300">
                Team
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="text-white hover:text-blue-300">
                Reviews
              </Link>
            </li>
          </ul>
        </nav>
        <Link href="/signin" className="text-white hover:text-blue-300">
          Sign In / Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Header;