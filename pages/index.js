import Layout from "../components/Layout";
export default function Home() {
  return (
    <Layout title="Home">
      <div
        className="flex flex-col items-center justify-center w-full max-h-screen text-center"
        style={{
          backgroundImage: "url(/bg-image4.jpg)",
          backgroundSize: "cover",
          height: "87vh"
        }}
      >
        <p className="font-serif font-black text-white text-7xl">
          Welcome to Next.js
        </p>
      </div>
    </Layout>
  );
}
