import Layout from "../components/Layout";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FaTwitterSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <Layout title="Contact">
      <div className="p-6 text-center bg-gray-200 shadow-xl rounded-xl w-80">
        <div className="mb-4">
          <p className="font-bold">Contant info</p>
        </div>
        <div className="text-left">
          <div className="mt-2 text-xs">
            <div className="flex">
              <MdLocationOn className="w-4 h-4 mr-1 text-gray-500 hover:text-blue-400" />
              Address: Augsburg,Germany
            </div>
          </div>
          <div className="mt-2 text-xs">
            <div className="flex">
              <MdEmail className="w-4 h-4 mr-1 text-gray-500 hover:text-blue-400" />
              Email: taichi_tomioka@icloud.com
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-4 text-center">
          <a href="https://twitter.com/4_edkeils" target="_blank">
            <FaTwitterSquare className="mr-3 text-gray-500 w-7 h-7 hover:text-blue-400" />
          </a>
          <a href="https://github.com/taichi-de" target="_blank">
            <FaGithubSquare className="mr-3 text-gray-500 w-7 h-7 hover:text-gray-600" />
          </a>
          <a
            href="https://www.linkedin.com/in/taichi-tomioka-746241191/"
            target="_blank"
          >
            <FaLinkedin className="text-gray-500 w-7 h-7 hover:text-blue-700" />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center p-6 text-center bg-gray-200 border-t-2 border-gray-400 border-dashed shadow-xl rounded-xl w-80">
        <form className="text-left" action="contact.php" method="post">
          <label className="block">
            <span className="block mb-2 text-sm font-bold text-gray-700">
              Name
            </span>
            <input
              className="w-full px-4 py-2 text-sm leading-tight text-gray-700 bg-white border-gray-200 rounded appearance-none border-1 focus:outline-none focus:border-purple-500"
              type="text"
              name="name"
              placeholder="name"
              id="name"
              required
            />
          </label>
          <label className="block my-2">
            <span className="block mb-2 text-sm font-bold text-gray-700">
              Email
            </span>
            <input
              type="email"
              className="w-full px-4 py-2 text-sm leading-tight text-gray-700 bg-white border-gray-200 rounded appearance-none border-1 focus:outline-none focus:border-purple-500"
              placeholder="john@example.com"
              name="email"
              id="email"
              required
            />
          </label>
          <label className="block">
            <span className="block mb-2 text-sm font-bold text-gray-700">
              Content
            </span>
            <textarea
              className="w-full px-4 py-2 text-sm leading-tight text-gray-700 bg-white border-gray-200 rounded appearance-none border-1 focus:outline-none focus:border-purple-500"
              rows="3"
              placeholder="Enter some long form content."
              id="message"
              required
            />
          </label>
          <input
            className="px-4 py-2 mt-2 text-white bg-gray-500 rounded hover:bg-green-700 font-sm focus:outline-none focus:shadow-outline"
            type="submit"
            value="Submit"
            id="contact-submit"
          />
          <div className="result"></div>
        </form>
      </div>
    </Layout>
  );
}
