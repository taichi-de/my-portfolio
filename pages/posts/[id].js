import Head from "next/head";

const headers = { "X-API-KEY": process.env.CMS_API_KEY };

export const getStaticPaths = async () => {
  const response = await fetch(process.env.CMS_API_URL, { headers });
  const { contents: posts } = await response.json();

  return {
    paths: posts.map((post) => `/posts/${post.id}`),
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const blogPostUrl = [process.env.CMS_API_URL, params.id].join("/");
  const response = await fetch(blogPostUrl, { headers });
  const { title } = await response.json();
  const baseUrl = {
    production: "https://taizen-dev.com",
    development: "http://localhost:3000",
  }[process.env.NODE_ENV];

  return {
    props: {
      title,
      ogImageUrl: `${baseUrl}/api/ogp?title=${title}`,
    },
  };
}

export default function BlogPost(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta property="og:image" content={props.ogImageUrl} />
      </Head>

      {/* ... */}
    </div>
  );
}
