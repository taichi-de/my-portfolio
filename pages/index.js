import Layout from "../components/Layout";
import Link from "next/link";
import { FaTwitterSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="welcome-text">
        <h1 className="font-serif text-5xl font-black text-gray-300">
          I'm Taichi Tomioka
        </h1>
        <p className="m-5 font-serif font-black text-gray-300 text-md">
          A web developer, studied in Akita, based in Germany.
        </p>
        <div className="flex items-center justify-center w-full text-center">
          <Link href="https://twitter.com/4_edkeils">
            <FaTwitterSquare className="mr-3 text-gray-300 w-7 h-7 hover:text-blue-400" />
          </Link>
          <Link href="https://github.com/taichi-de">
            <FaGithubSquare className="mr-3 text-gray-300 w-7 h-7 hover:text-gray-600" />
          </Link>
          <Link href="https://www.linkedin.com/in/taichi-tomioka-746241191/">
            <FaLinkedin className="text-gray-300 w-7 h-7 hover:text-blue-700" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
