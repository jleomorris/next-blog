import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

const Post: React.FC = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className='font-bold text-4xl'>{postData.title}</h1>
        <div className='text-xl text-gray-500 my-2'>
          <Date dateString={postData.date} />
        </div>
        <div
          className='my-5'
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
      <Link href={`/`}>
        <a className='text-blue-300 font-thin'>&#8592; Return to home</a>
      </Link>
    </Layout>
  );
};

export default Post;
