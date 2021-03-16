import { useState } from "react";
import Layout from "../components/Layout";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FaTwitterSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "Contact",
    honeypot: "",
    message: "",
    replyTo: "@",
    accessKey: process.env.access_key,
  });

  const [response, setResponse] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: JSON.stringify(contact),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (json.success) {
        setResponse({
          type: "success",
          message: "Thank you for reaching out to me.",
        });
      } else {
        setResponse({
          type: "error",
          message: json.message,
        });
      }
    } catch (e) {
      console.log("An error occurred", e);
      setResponse({
        type: "error",
        message: "An error occured while submitting the form",
      });
    }
  };
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
            <FaGithubSquare className="mr-3 text-gray-500 w-7 h-7 hover:text-gray-700" />
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
        <div>
          <p>{response.message}</p>
          <form
            action="https://api.staticforms.xyz/submit"
            method="post"
            onSubmit={handleSubmit}
            className="text-left"
          >
            <label className="block field">
              <span className="block mb-2 text-sm font-bold text-gray-700">
                Name
              </span>
              <div>
                <input
                  className="w-full px-4 py-2 text-sm leading-tight text-gray-700 bg-white border-gray-200 rounded appearance-none border-1 focus:outline-none focus:border-purple-500"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  onChange={handleChange}
                  required
                />
              </div>
            </label>
            <label className="block my-2">
              <span className="block mb-2 text-sm font-bold text-gray-700">
                Email
              </span>
              <input
                type="email"
                className="w-full px-4 py-2 text-sm leading-tight text-gray-700 bg-white border-gray-200 rounded appearance-none border-1 focus:outline-none focus:border-purple-500"
                placeholder="hello@example.com"
                name="email"
                onChange={handleChange}
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
                placeholder="Your message."
                onChange={handleChange}
                required
              />
            </label>
            <input type="text" name="honeypot" style={{ display: "none" }} />
            <input
              className="px-4 py-2 mt-2 text-white bg-gray-500 rounded hover:bg-green-700 font-sm focus:outline-none focus:shadow-outline"
              type="submit"
              value="Submit"
              id="contact-submit"
            />
          </form>
        </div>
      </div>
    </Layout>
  );
}
