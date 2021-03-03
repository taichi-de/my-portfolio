import Layout from "../components/Layout";
import Post from "../components/Post";
import { getAllPostsData } from "../lib/posts";

export default function Blog({ posts }) {
  return (
    <Layout title="Blog">
      <div
        className="overflow-y-scroll"
        style={{
          maxHeight: "80vh"
        }}
      >
        <ul>
          {posts && posts.map(post => <Post key={post.id} post={post} />)}
        </ul>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts }
  };
}
