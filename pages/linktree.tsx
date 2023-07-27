import Link from 'next/link';
import { FaReadme, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import { links } from '../components/linktree/LinktreeData';

import Layout from '../components/Layout';

export default function Linktree() {
  return (
    <Layout title="Linktree">
      <div className="w-full p-8 scrollbar-hide overflow-auto leading-loose text-center">
        <p className="mb-8 text-gray-300 text-xl">Linktree</p>
        <div className="flex-col justify-center max-w-xs m-4 mx-auto text-center">
          {links.map((link) => {
            return (
              <Link
                href={link.href}
                className={`flex justify-center px-8 py-3 m-4 text-lg ${link.txtColor} align-middle bg-transparent border bg-gray-200 ${link.color} hover:bg-gray-300 border-solid rounded outline-none focus:outline-none`}
                key={link.label}
              >
                <link.icon className="w-5 h-5 mt-1 mr-3" />
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
