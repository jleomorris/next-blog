import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import '../styles/globals.css';
import Image from 'next/image';
import profilePic from '../public/images/profile.jpg';
import nextJsLogo from '../public/images/nextJs.svg';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className='w-screen min-h-screen flex justify-center items-center'>
        <main className='text-center w-screen min-h-screen flex flex-col lg:flex-row'>
          <section className='shadow-lg xl:min-h-screen xl:w-1/4'>
            <div className='flex items-center p-3 mb-10'>
              <p className='mr-2'>Built with</p>
              <Image src={nextJsLogo} alt='next js' height={50} width={75} />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <Image
                src={profilePic}
                alt='profile pic'
                className='rounded-full'
                height={200}
                width={200}
              />
            </div>
            <div className='px-10'>
              <h1 className='mt-6 text-4xl font-extrabold'>James Morris</h1>
              <h2 className='text-2xl'>
                React Developer at IronmongeryDirect, Essex
              </h2>
              <div className='my-10 text-xl flex flex-col'>
                <Link href='https://www.jamesleomorris.com'>
                  <a target='_blank'>Portfolio</a>
                </Link>
                <Link href='https://github.com/jleomorris'>
                  <a target='_blank'>Github</a>
                </Link>
              </div>
            </div>
          </section>
          <section className='bg-gray-100 text-left p-10 sm:p-20 xl:min-h-screen xl:w-3/4'>
            <Component {...pageProps} />
          </section>
        </main>
      </div>
    </Provider>
  );
}

export default MyApp;
