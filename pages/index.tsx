import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Franz Sinaga</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex bg-black w-full h-full flex-1 flex-col items-center justify-center bg-gradient-to-r from-amber-400 via-rose-600 to-amber-400 animate-gradient-x">
        <h1 className="text-6xl text-gray-100 font-bold ">
          Under {' '}
          <span className="text-green-600">
          Construction
          </span>
        </h1>

        <p className="mt-3 text-gray-50 text-2xl">
          Check back soon {' '} 😅
          {/* <code className="rounded-md bg-green-600 p-3 font-mono text-lg">
            :)
          </code> */}
        </p>
      </main>

      {/* <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer> */}
    </div>
  )
}

export default Home
