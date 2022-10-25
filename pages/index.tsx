import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AnimatedBgHero from "../components/Hero/AnimatedBgHero";
import Cards from "../components/Cards/Cards";
import Timeline from "../components/Timeline/Timeline";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Franz Sinaga</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatedBgHero>
        <div className="flex flex-col ml-36">
          <p className="text-white text-xl">Hi, my name is</p>
          <h1 className="text-6xl text-white font-bold leading-tight">
            Franz Sinaga
            <br /> I build things for the web.
          </h1>
          <p className="mt-12 text-white max-w-2xl text-xl">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at Upstatement.
          </p>
        </div>
      </AnimatedBgHero>

      <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 border-gray-900">
        <div className="px-4 py-14 md:py-60 lg:py-40 xl:py-60">
          <div className="mx-auto text-center">
            <h1 className="max-w-4xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              I am a Software Engineering
            </h1>
            <p className="max-w-4xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              graduate who has a curiosity about technology in the field of
              software development. Have experience in building a software to
              solve a problem. looking for opportunities to apply my knowledge
              and skills in a work environment
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 border-gray-900">
        <div className="container mx-auto flex flex-col">
          <div className="mx-14">
            <h1 className="max-w-4xl mb-12 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Projects
            </h1>
            <div className="flex flex-row md:justify-center lg:justify-center xl:justify-start flex-wrap gap-5 sm:gap-5 md:gap-4 lg:gap-2">
              <div className=" md:basis-72 lg:basis-auto">
                <Cards />
              </div>
              <div className=" md:basis-72 lg:basis-auto">
                <Cards />
              </div>
              <div className=" md:basis-72 lg:basis-auto">
                <Cards />
              </div>
              <div className=" md:basis-72 lg:basis-auto">
                <Cards />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 border-gray-900">
        <div className="container mx-auto flex flex-col">
          <div className="mx-14">
            <h1 className="max-w-4xl my-12 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Where I’ve Worked
            </h1>
            <div className="flex flex-row justify-center flex-wrap gap-5">
              <Timeline></Timeline>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 border-gray-900">
        <div className="px-4 py-14 md:py-60 lg:py-40 xl:py-60">
          <div className="mx-auto text-center">
            <h1 className="max-w-4xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Get In Touch
            </h1>
            <p className="max-w-4xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Although I’m not currently looking for any new opportunities, my
              inbox is always open. Whether you have a question or just want to
              say hi, I’ll try my best to get back to you! Say Hello
            </p>
            <button
              type="button"
              className="text-white text-lg bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Say Hello
            </button>
          </div>
        </div>
      </div>

      <footer className="flex h-24 w-full bg-gray-900 border-gray-900 items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2 text-white font-bold"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Vercel
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
