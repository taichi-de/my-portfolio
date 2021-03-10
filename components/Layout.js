import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../pages/Navbar";
import Dropdown from "../pages/Dropdown";

export default function Layout({ children, title = "Portfolio by Nextjs" }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-mono text-sm text-gray-600">
      <Head>
        <title>{title}</title>
      </Head>
      {/* <Navbar toggle={toggle}/> */}
      {/* <>...</>
      </Navbar> */}
      {/* <Dropdown isOpen={isOpen} toggle={toggle}></Dropdown> */}
      <header className="absolute top-0 z-20">
        <nav
          className="flex items-center justify-between w-screen h-16 font-mono text-gray-500 bg-black shadow-sm"
          role="navigation"
        >
          <Link href="/" className="pl-8">
            <a className="py-2 pl-8 font-serif text-lg font-bold text-gray-300">
              TAIZEN
            </a>
          </Link>
          <div className="pr-8">
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
            <Link href="/Contact">
              <a className="px-3 py-2 text-gray-300 rounded hover:bg-gray-700">
                Contact
              </a>
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 w-screen">
        <div
          className="relative z-10 flex flex-col items-center justify-center w-full h-screen text-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url(/birdBg.jpg)",
          }}
        >
          {children}
        </div>
      </main>
      <footer className="absolute bottom-0 z-20 flex items-center justify-center w-full h-12 bg-black">
        <p className="text-xs text-center text-gray-500">
          Copyright © 2021 Taichi Tomioka | All rights reserved
        </p>
      </footer>
    </div>
  );
}
