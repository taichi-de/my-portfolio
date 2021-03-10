import React from "react";
import Link from "next/link";

export default function Navbar({ toggle }) {
  return (
    <div className="absolute top-0 z-20">
      <nav
        className="relative flex items-center justify-between h-16 font-mono bg-gray-100 shadow-sm text-black-500"
        role="navigation"
      >
        <Link href="/" className="pl-8">
          EGG
        </Link>
        <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
        <div className="hidden pr-8 md:block">
          <Link className="p-4" href="/about">
            {" "}
            About{" "}
          </Link>
          <Link className="p-4" href="/resume">
            {" "}
            Resume{" "}
          </Link>
          <Link className="p-4" href="/portfolio">
            {" "}
            Portfolio{" "}
          </Link>
          <Link className="p-4" href="/contact">
            {" "}
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}
