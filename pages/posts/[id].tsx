import Head from 'next/head';
import Link from 'next/link';
// import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import { GetStaticPaths, GetStaticProps } from 'next';

interface IProps {
  postData: {
    contentHtml: string;
    title: string;
    date: string;
  };
}

// type Params = {
//   params: {
//     id: string;
//   };
// };

const Post: React.FC<IProps> = ({ postData }) => {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className='font-bold text-6xl'>{postData.title}</h1>
        <div className='text-xl text-gray-500 my-2'>
          <Date dateString={postData.date} />
        </div>
        <div
          className='my-5 text-2xl'
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
      <Link href={`/`}>
        <a className='text-blue-600 text-2xl'>&#8592; Return to home</a>
      </Link>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params!.id as string);

  console.log('[id].params', params);

  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export default Post;
