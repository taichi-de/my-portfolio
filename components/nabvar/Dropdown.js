import Link from "next/link";

export const Dropdown = ({ isOpen }) => {
  return (
    <div
      className={
        isOpen
          ? "fixed top-14 grid grid-rows-4 text-center items-center bg-black z-30 w-screen p-4 "
          : "hidden"
      }
    >
      <Link href="/about">
        <a className="px-3 py-2 text-gray-300 rounded hover:bg-gray-700">
          About
        </a>
      </Link>
      <Link href="/resume">
        <a className="px-3 py-2 text-gray-300 rounded hover:bg-gray-700">
          Resume
        </a>
      </Link>
      <Link href="/works">
        <a className="px-3 py-2 text-gray-300 rounded hover:bg-gray-700">
          Works
        </a>
      </Link>
      {/* <Link href="/blog">
        <a className="px-3 py-2 text-gray-300 rounded hover:bg-gray-700">
          Blog
        </a>
      </Link> */}
      <Link href="/contact">
        <a className="px-3 py-2 text-gray-300 rounded hover:bg-gray-700">
          Contact
        </a>
      </Link>
    </div>
  );
};
