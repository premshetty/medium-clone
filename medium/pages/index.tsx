import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import { sanityClient } from '../sanity'
import { Post } from '../typings.d';
interface Props {
  Posts: [Post]
}
export default function Home({ Posts }: Props) {
  console.log(Posts);
  console.log("hbb");

  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className='flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0'>
        <div className='px-10 space-y-5'>
          <h1 className='text-6xl max-w-xl font-serif'> <span className='underline decoration-black decoration-4'> Medium </span> is a place to Writre ,read and connect</h1>
          <h2>
            It's easy and free to post your thinking on any topic and connect with
            millions of readers.
          </h2>
        </div>
        <img className='hidden md:inline-flex h-32 lg:h-full' src="https://cdn-icons-png.flaticon.com/512/2111/2111543.png" alt="" />
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type=="post"]{
  _id,
  title,
  mainImage,
  slug,
  description,
  author -> {
  name,
  image
}
}`;
  const post = await sanityClient.fetch(query);
  return {
    props: {
      post,
    },
  };
}
