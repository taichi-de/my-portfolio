import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, title = "Portfolio by Nextjs" }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-mono text-sm text-gray-600">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="w-screen bg-black">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link href="/">
                <a className="px-3 py-2 text-gray-300 rounded hover:bg-gray-700">
                  Home
                </a>
              </Link>
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
              <Link href="/contact">
                <a className="px-3 py-2 text-gray-300 rounded hover:bg-gray-700">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 w-screen">
        <div
          className="flex flex-col items-center justify-center w-full max-h-screen text-center"
          style={{
            backgroundImage: "url(/birdBg.jpg)",
            backgroundSize: "cover",
            height: "87vh",
          }}
        >
          {children}
        </div>
      </main>
      <footer className="flex items-center justify-center w-full h-12 bg-black">
        <p className="text-xs text-center text-gray-500">
          Copyright © 2021 Taichi Tomioka | All rights reserved
        </p>
      </footer>
    </div>
  );
}
