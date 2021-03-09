import Layout from "../components/Layout";
import Image from "next/image";

export default function Contact() {
  return (
    <Layout title="Contact">
      <div className="p-8 text-center rounded shadow-xl from-yellow-300 to-red-300 bg-gradient-to-b w-80">
        <div className="mt-4">
          <p className="font-bold">Contant info</p>
        </div>
        <div className="flex justify-center mt-4">
          <Image
            className="rounded-full"
            src="/avatar.jpg"
            width={60}
            height={60}
            alt="Avatar"
          />
        </div>
        <div className="mt-4 text-gray-500">
          <p className="font-bold">Address:</p>
          <p className="mt-2 text-xs ">Augsburg</p>
          <p className="mt-3 font-bold">E-mail:</p>
          <p className="mt-2 text-xs ">hello@gmail.com</p>
          <p className="mt-3 font-bold">Phone:</p>
          <p className="mt-2 text-xs ">000-123-456</p>
        </div>
        <div className="flex justify-around mt-6">
          <div>
            <a
              href="https://nerdcave.com/tailwind-cheat-sheet"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
          <div>
            <a
              href="https://nerdcave.com/tailwind-cheat-sheet"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
          <div>
            <a
              href="https://nerdcave.com/tailwind-cheat-sheet"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
