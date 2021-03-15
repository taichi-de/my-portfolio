import Layout from "../components/Layout";
import Link from "next/link";

export default function Blog({ blog }) {
  return (
    <Layout title="Blog">
      <div className="w-3/4 p-6 m-6 text-center bg-gray-200 shadow-xl rounded-xl">
        <div className="mb-4">
          <p className="font-bold">Achieve</p>
        </div>
        <div className="text-left">
          <ul>
            {blog.map((blog) => (
              <li key={blog.id}>
                <Link href={`blog/${blog.id}`}>
                  <a>{blog.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const data = await fetch("https://taizen-dev.microcms.io/api/v1/blog", key)
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data.contents,
    },
  };
};
