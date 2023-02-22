import { useEffect, useState } from 'react';

import Head from 'next/head';

import { Dropdown } from './nabvar/Dropdown';
import { Navbar } from './nabvar/Navbar';

export default function Layout({ children, title = 'Portfolio by Nextjs' }) {
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
    window.addEventListener('resize', hideMenu);
    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <div className="flex flex-col items-center justify-center max-h-screen font-mono text-sm text-gray-600">
      <Head>
        <title>{title}</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@4_edkeils" />
        <meta name="twitter:title" content="TAIZEN-DEV.com" />
        <meta
          name="twitter:description"
          content="A web developer, studied in Akita, based in Germany."
        />
        <meta name="twitter:image" content="https://taizen-dev.com/taizen-dev.png" />
      </Head>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <main className="flex flex-col items-center justify-center flex-1 w-screen">
        <div
          className="relative z-10 flex flex-col items-center justify-center w-full h-screen text-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: 'url(/birdBg.jpg)',
          }}
        >
          {children}
        </div>
      </main>
      <footer className="fixed bottom-0 z-20 flex items-center justify-center w-full h-10 bg-black">
        <p className="text-xs text-center text-gray-500">
          Copyright © 2023 TAIZEN | All rights reserved
        </p>
      </footer>
    </div>
  );
}
