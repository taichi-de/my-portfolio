import { useState } from 'react';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import Icons from '../components/Icons';
import Layout from '../components/Layout';

export default function Contact() {
  const [contact, setContact] = useState({
    name: '',
    accessKey: process.env.access_key,
    email: '',
    honeypot: '',
    message: '',
    replyTo: 'gciuzi52@gmail.com',
    subject: 'Contact',
  });

  const [response, setResponse] = useState({
    message: '',
    type: '',
  });

  const handleChange = (e: { target: { name: string; value: string } }) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      });

      const json = await res.json();

      if (json.success) {
        setResponse({
          message: 'Thank you for reaching out to me.',
          type: 'success',
        });
      } else {
        setResponse({
          message: json.message,
          type: 'error',
        });
      }
    } catch (e: unknown) {
      setResponse({
        message: 'An error occured while submitting the form',
        type: 'error',
      });
    }
  };
  return (
    <Layout title="Contact">
      <div className="p-6 text-center bg-gray-200 shadow-xl rounded-xl w-80">
        <div className="mb-4">
          <p className="font-bold">Contact info</p>
        </div>
        <div className="text-left">
          <div className="mt-2 text-xs">
            <div className="flex">
              <MdLocationOn className="w-4 h-4 mr-1" />
              Location: Augsburg, Germany
            </div>
          </div>
          <div className="mt-2 text-xs">
            <div className="flex">
              <MdEmail className="w-4 h-4 mr-1" />
              Email: taichi_tomioka@icloud.com
            </div>
          </div>
        </div>
        <Icons />
      </div>
      <div className="flex items-center justify-center py-6 px-2 text-center bg-gray-200 border-t-2 border-gray-400 border-dashed shadow-xl rounded-xl w-80">
        <div>
          <form
            action="https://api.staticforms.xyz/submit"
            method="post"
            onSubmit={handleSubmit}
            className="text-left w-[260px]"
          >
            <label className="block field">
              <span className="block mb-2 text-sm text-gray-700">Name</span>
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
              <span className="block mb-2 text-sm text-gray-700">Email</span>
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
              <span className="block mb-2 text-sm text-gray-700">Content</span>
              <textarea
                className="w-full px-4 py-2 text-sm leading-tight text-gray-700 bg-white border-gray-200 rounded appearance-none border-1 focus:outline-none focus:border-purple-500"
                rows={3}
                placeholder="Your message."
                onChange={handleChange}
                required
              />
            </label>
            <input type="text" name="honeypot" style={{ display: 'none' }} />
            <p className="p-1 text-blue-500">{response.message}</p>
            <input
              className="px-4 py-2 mt-2 text-white bg-gray-500 rounded cursor-pointer hover:bg-green-700 font-sm focus:outline-none focus:shadow-outline"
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
