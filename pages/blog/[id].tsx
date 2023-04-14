import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { client } from '../../libs/client';
import { Blog } from '../blogpage';
import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk';

type Props = Blog & MicroCMSContentId & MicroCMSDate;

const BlogId: NextPage<Props> = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <time>{props.publishedAt}</time>
      <div dangerouslySetInnerHTML={{ __html: props.body }} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.get({ endpoint: 'blog' });
  const ids = data.contents.map((content: { id: string }) => `/blog/${content.id}`);
  return {
    fallback: false,
    paths: ids,
  };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (ctx) => {
  if (!ctx.params) return { notFound: true };
  const data = await client.getListDetail<Blog>({ contentId: ctx.params.id, endpoint: 'blog' });

  return { props: data };
};

export default BlogId;
