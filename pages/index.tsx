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
        <div className="flex flex-col ml-36 text-white">
          <p className="text-xl">My Name is</p>
          <h1 className="text-6xl font-bold leading-tight">
            Franz Sinaga
            <br /> Frontend Developer
          </h1>
          <p className="mt-12 max-w-2xl text-xl">
            I am a Frontend-focused Web Developer. I build Frontend Websites and
            Web Apps that lead to product success.
          </p>
        </div>
      </AnimatedBgHero>

      <div
        id="about"
        className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 border-gray-900"
      >
        <div className="px-4 pt-14 md:pt-60 lg:pt-40 xl:pt-60">
          <div className="mx-auto text-center">
            <h1 className="max-w-4xl mb-24 text-4xl border-white font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Get to know me!
            </h1>
          </div>
        </div>
        <div className="container flex flex wrap items-center justify-center">
          <div className="text-center">
            <p className="max-w-4xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              I am a <span className="font-bold">Front-End Developer</span>{" "}
              located in Jakarta, Indonesia. Currently working in one of the
              biggest banks in Indonesia to build a product that meets the user
              need.
              <br />
              <br />I enjoy creating things that come to live on the internet.
              Interested in <span className="font-bold">
                web development
              </span>{" "}
              and curiosity about technology in the web development field. Have
              experience in building applications to solve a problem and can
              meet product needs.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="bg-white dark:bg-gray-900 border-gray-900">
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
      </div> */}

      {/* <div className="bg-white dark:bg-gray-900 border-gray-900">
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
      </div> */}

      <div
        id="contact"
        className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 border-gray-900"
      >
        <div className="px-4 py-14 md:py-60 lg:py-40 xl:py-60">
          <div className="mx-auto text-center">
            <h1 className="max-w-4xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Get In Touch
            </h1>
            <p className="max-w-4xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Whether you have a question or just want to say hi, I’ll try my
              best to get back to you! Say Hello
            </p>
            <a
              href="mailto:sinagafranz12@gmail.com"
              type="button"
              className="text-white text-lg bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-6 py-3 text-center mr-2 mb-2"
            >
              Say Hello 👋
            </a>
          </div>
        </div>
      </div>

      <footer className="flex flex-col h-36 w-full bg-gray-900 border-gray-900 items-center justify-center border-t">
        <div className="m-3 flex items-center justify-center gap-7">
          <a
            href="https://github.com/FranzSinaga"
            className="text-gray-400 hover:text-white"
            target="_BLANK"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            href="https://id.linkedin.com/in/franz-sinaga"
            className="text-gray-400 hover:text-white"
            target="_BLANK"
          >
            <i className="fab fa-linkedin fa-2x "></i>
          </a>
          <a
            href="mailto:sinagafranz12@gmail.com"
            className="text-gray-400 hover:text-white"
          >
            <i className="far fa-envelope fa-2x"></i>
          </a>
        </div>
        <div>
          <p className="text-gray-400 font-light text-lg">
            &#169; 2022 Franz Aditya Natanael Sinaga
          </p>
        </div>
        {/* <a
          className="flex items-center justify-center gap-2 text-white font-bold"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        > */}
        {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
        {/* </a> */}
      </footer>
    </div>
  );
};

export default Home;
