import Layout from "../components/Layout";
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
        <div className="flex items-center justify-center w-full text-center social-icons">
          <a href="https://twitter.com/4_edkeils" target="_blank">
            <FaTwitterSquare className="mr-3 text-gray-300 w-7 h-7 hover:text-blue-400" />
          </a>
          <a href="https://github.com/taichi-de" target="_blank">
            <FaGithubSquare className="mr-3 text-gray-300 w-7 h-7 hover:text-gray-600" />
          </a>
          <a
            href="https://www.linkedin.com/in/taichi-tomioka-746241191/"
            target="_blank"
          >
            <FaLinkedin className="text-gray-300 w-7 h-7 hover:text-blue-700" />
          </a>
        </div>
      </div>
    </Layout>
  );
}
