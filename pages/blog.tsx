import { GetStaticProps, NextPage } from 'next';
import { client } from '../libs/client';
import { MicroCMSListResponse } from 'microcms-js-sdk';
import Link from 'next/link';
import BlogLayout from '../components/BlogLayout';
import RightSidebar from '../components/blog/RightSidebar';

export type Blog = {
  id: string;
  title: string;
  body: string;
};

type Props = MicroCMSListResponse<Blog>;

const Blog: NextPage<Props> = (props) => {
  return (
    <BlogLayout>
      <div className="grid grid-cols-12 gap-4 p-8 w-4/5 h-4/5 text-left">
        <div className="lg:col-span-8 col-span-12 bg-gray-200 scrollbar-hide overflow-auto px-2">
          <h1 className="text-center text-xl text-bold italic my-8">Archives</h1>
          {/* <p className="text-gray-400">{`Articles amount: ${props.totalCount}`}</p> */}
          <div className="grid grid-cols-2 gap-2">
            {props.contents.map((content) => {
              return (
                <div
                  className="md:col-span-1 col-span-2 border border-lime-600 m-4 md:mb-0 p-4"
                  key={content.id}
                >
                  <div className="mx-auto text-sky-500 bg-gray-100 w-full h-40" />
                  <Link
                    className="text-base hover:text-blue-600 hover:underline"
                    href={`/blog/${content.id}`}
                  >
                    <p className="my-4">{content.title}</p>
                  </Link>
                  <p className="text-sm m-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti
                    laboriosam recusandae sint praesentium, reprehenderit odio dolores.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-4 hidden lg:block h-screen overflow-y-scroll scrollbar-hide bg-sky-300 lg:bg-transparent">
          <RightSidebar />
        </div>
      </div>
    </BlogLayout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({ endpoint: 'blog' });
  return {
    props: data,
  };
};

export default Blog;
