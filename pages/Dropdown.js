import React from "react";
import Link from "next/link";

export default function Dropdown({ isOpen, toggle }) {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center bg-yellow-500"
          : "hidden"
      }
    >
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
  );
}
