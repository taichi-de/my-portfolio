import Layout from "../components/Layout";
import Icons from "../components/Icons";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="welcome-text">
        <h1 className="font-serif text-5xl font-black text-gray-300">
          Hello, I'm Taichi
        </h1>
        <p className="mt-5 font-serif font-black text-gray-300 text-md">
          A web developer, studied in Akita, based in Germany.
        </p>
        <Icons />
      </div>
    </Layout>
  );
}
