/* eslint-disable react/react-in-jsx-scope */
import Layout from '../components/Layout';
import Link from 'next/link';
import { FaWordpressSimple, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

export default function Linktree() {
  return (
    <Layout title="Linktree">
      <div className="w-full p-8 overflow-y-scroll leading-loose text-center text-white overscroll-y-auto">
        <p className="mb-8 font-mono text-lg text-bold">Linktree</p>
        <div className="flex-col justify-center max-w-xs m-4 mx-auto text-center">
          <Link href="https://taizen.blog/">
            <a className="flex justify-center px-8 py-3 m-4 text-lg text-yellow-500 align-middle bg-transparent border border-yellow-500 border-solid rounded outline-none hover:bg-white focus:outline-none">
              <FaWordpressSimple className="w-5 h-5 mt-1 mr-3" />
              Blog
            </a>
          </Link>
          <Link href="https://twitter.com/4_edkeils">
            <a className="flex justify-center px-8 py-3 m-4 text-lg text-blue-500 align-middle bg-transparent border border-blue-500 border-solid rounded outline-none hover:bg-white focus:outline-none">
              <FaTwitter className="w-5 h-5 mt-1 mr-3" />
              Twitter
            </a>
          </Link>
          <Link href="https://www.instagram.com/taichi_tomi/">
            <a className="flex justify-center px-8 py-3 m-4 text-lg text-pink-500 align-middle bg-transparent border border-pink-500 border-solid rounded outline-none hover:bg-white focus:outline-none">
              <FaInstagram className="w-5 h-5 mt-1 mr-3" />
              Instagram
            </a>
          </Link>
          <Link href="https://www.pinterest.jp/taizitomi">
            <a className="flex justify-center px-8 py-3 m-4 text-lg text-red-500 align-middle bg-transparent border border-red-500 border-solid rounded outline-none hover:bg-white focus:outline-none">
              <FaPinterest className="w-5 h-5 mt-1 mr-3" />
              Pinterest
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
