import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AnimatedBgHero from '../components/Hero/AnimatedBgHero';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Franz Sinaga</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatedBgHero>
        <div className="flex flex-col items-center">
          <h1 className="bloc text-6xl text-white font-bold ">
          👋 Hero {' '}
            <span className="text-green-600">
            Here
            </span>
          </h1>

          <p className="mt-3 text-gray-50 text-2xl">
            Check back soon {' '} 😅
          </p>
        </div>
      </AnimatedBgHero>

      <footer className="flex h-24 w-full bg-gray-900 border-gray-900 items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2 text-white font-bold"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '} Vercel
          {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
        </a>
      </footer>
    </div>
  )
}

export default Home
