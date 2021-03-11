import Link from "next/link";

export const Navbar = ({ toggle }) => {
  return (
    <div className="absolute top-0 z-20">
      <nav
        className="relative flex items-center justify-between w-screen h-16 p-2 font-mono text-gray-500 bg-black shadow-sm"
        role="navigation"
      >
        <Link href="/">
          <a className="pl-8 font-serif text-lg font-bold text-gray-300 ">
            TAIZEN
          </a>
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
          <Link href="/About">
            <a className="px-3 py-2 text-gray-300 rounded hover:bg-gray-700">
              About
            </a>
          </Link>
          <Link href="/Resume">
            <a className="px-3 py-2 text-gray-300 rounded hover:bg-gray-700">
              Resume
            </a>
          </Link>
          <Link href="/Works">
            <a className="px-3 py-2 text-gray-300 rounded hover:bg-gray-700">
              Works
            </a>
          </Link>
          <Link href="/Contact">
            <a className="px-3 py-2 text-gray-300 rounded hover:bg-gray-700">
              Contact
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
};
