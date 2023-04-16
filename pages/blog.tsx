import { GetStaticProps, NextPage } from 'next';
import { client } from '../libs/client';
import { MicroCMSListResponse } from 'microcms-js-sdk';
import Link from 'next/link';
import BlogLayout from '../components/BlogLayout';
import RightSidebar from '../components/blog/RightSidebar';
import { ComponentProps, useState } from 'react';

export type Blog = {
  id: string;
  title: string;
  body: string;
};

type Props = MicroCMSListResponse<Blog>;

const Blog: NextPage<Props> = (props) => {
  const [search, setSearch] = useState<Props>();

  const handleSubmit: ComponentProps<'form'>['onSubmit'] = async (e) => {
    e.preventDefault();
    const q = e.currentTarget.query.value;
    const data = await fetch('/api/search', {
      body: JSON.stringify({ q }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });
    const json = await data.json();
    setSearch(json);
  };

  const handleClick: ComponentProps<'button'>['onClick'] = async (e) => {
    setSearch(undefined);
  };

  const contents = search ? search.contents : props.contents;
  const totalCount = search ? search.totalCount : props.totalCount;

  return (
    <BlogLayout>
      <div className="grid grid-cols-12 gap-4 w-4/5 h-4/5 text-left">
        <div className="lg:col-span-8 col-span-12 bg-gray-200 scrollbar-hide overflow-auto px-2">
          <h1 className="text-center text-xl text-bold italic my-8">Archives</h1>
          <div className="flex justify-between items-center px-4">
            <p className="text-gray-400">{`${
              search ? '検索結果' : '記事の総数'
            }: ${totalCount}件`}</p>
            <form className="flex gap-x-2" onSubmit={handleSubmit}>
              <input type="text" name="query" className="border rounded-md border-gray-300 p-1" />
              <button className="rounded-md px-1 text-gray-100 bg-cyan-500">Search</button>
              <button
                type="reset"
                className="rounded-md px-1 text-gray-100 bg-cyan-500"
                onClick={handleClick}
              >
                Reset
              </button>
            </form>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {contents.map((content) => {
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
        <div className="col-span-4 hidden lg:block h-screen bg-sky-300 lg:bg-transparent">
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
