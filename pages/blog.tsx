import { GetStaticProps, NextPage } from 'next';
import { client } from '../libs/client';
import { MicroCMSListResponse } from 'microcms-js-sdk';
import Link from 'next/link';
import BlogLayout from '../components/BlogLayout';
import RightSidebar from '../components/blog/RightSidebar';
import { ComponentProps, useState } from 'react';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

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
          <div className="grid grid-cols-2 gap-2 m-4">
            {contents.map((content) => {
              return (
                <Link
                  className="hover: hover:pointer"
                  href={`/blog/${content.id}`}
                  key={content.id}
                >
                  <Card shadow="sm" padding="lg" radius="md" withBorder className="">
                    <Card.Section>
                      {/* TODO: change images dinamically */}
                      <Image
                        src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                        height={160}
                        alt="thumbnail"
                      />
                    </Card.Section>

                    <Group position="apart" mt="md" mb="xs">
                      <Text weight={500}>{content.title}</Text>
                    </Group>

                    <Text size="sm" color="dimmed">
                      {/* TODO: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ...' */}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti
                      laboriosam recusandae sint praesentium, reprehenderit odio dolores.
                    </Text>

                    <Badge color="green" variant="light">
                      {/* TODO: add tags */}
                      #React
                    </Badge>
                  </Card>
                </Link>
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