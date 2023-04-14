import { GetStaticProps, NextPage } from 'next';
import { client } from '../libs/client';
import { MicroCMSListResponse } from 'microcms-js-sdk';
import Link from 'next/link';

export type Blog = {
  id: string;
  title: string;
  body: string;
};

type Props = MicroCMSListResponse<Blog>;

const BlogPage: NextPage<Props> = (props) => {
  console.log(props);
  return (
    <div>
      <p>{`Articles amount: ${props.totalCount}`}</p>
      <ul>
        {props.contents.map((content) => {
          return (
            <li key={content.id}>
              <Link href={content.id}>
                <p>{content.title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({ endpoint: 'blog' });
  return {
    props: data,
  };
};

export default BlogPage;
