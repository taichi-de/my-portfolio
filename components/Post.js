import Link from "next/link";
export default function Post({ post }) {
  return (
    <div className="m-2">
      <span>{post.id}</span>
      {" : "}
      <Link href={`/posts/${post.id}`}>
        <span className="text-blue-500 border-b border-blue-500 cursor-pointer hover:bg-gray-200">
          {post.title}
        </span>
      </Link>
    </div>
  );
}
