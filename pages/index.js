import Layout from "../components/Layout";
import Icons from "../components/Icons";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="welcome-text">
        <h1 className="font-serif text-5xl font-black text-gray-300">
          I'm&nbsp;
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block">
            <span className="relative text-white">Taichi Tomioka</span>
          </span>
        </h1>
        <p className="mt-5 font-serif font-black text-gray-300 text-md">
          A web developer, studied in Akita, based in Germany.
        </p>
        <Icons />
      </div>
    </Layout>
  );
}
