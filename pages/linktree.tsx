import Link from 'next/link';
import { links } from '../components/linktree/LinktreeData';
import Layout from '../components/Layout';

export default function Linktree() {
  return (
    <Layout title="Linktree">
      <div className="w-full p-4 leading-loose text-center">
        <p className="text-lg text-gray-200">Linktree</p>
        <div className="flex-col justify-center max-w-xs mt-4 mx-auto text-center">
          {links.map((link) => {
            return (
              <Link
                href={link.href}
                className={`flex justify-center px-8 py-3 m-4 text-lg ${link.txtColor} bg-transparent border bg-gray-100 ${link.color} hover:bg-gray-300 border-solid rounded outline-none focus:outline-none`}
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
