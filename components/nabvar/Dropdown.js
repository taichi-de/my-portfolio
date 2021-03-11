import Link from "next/link";

export const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "fixed top-14 grid grid-rows-4 text-center items-center bg-black z-30 w-screen p-4 "
          : "hidden"
      }
    >
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
  );
};
