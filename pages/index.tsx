import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AnimatedBgHero from "../components/Hero/AnimatedBgHero";
import ProjectCards from "../components/Cards/ProjectCards";
import Timeline from "../components/Timeline/Timeline";

import { GithubIcon, LinkedinIcon, EnvelopeIcon } from "../Icons/SocialIcons";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Franz Sinaga</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="title" content="Franz Sinaga" />
        <meta
          name="description"
          content="Franz Sinaga is a software engineer who specializes in Frontend-focused Web Developer"
        />
      </Head>

      <AnimatedBgHero>
        <div className="flex flex-col lg:ml-36 md:ml-10 ml-4 text-dark dark:text-white">
          {/* <p className="text-xl font-thin font-mono">
            Hi, My Name is
          </p> */}
          <h1 className="md:text-6xl text-4xl font-extrabold mt-3">
            Franz Sinaga
          </h1>
          <h1 className="md:text-6xl text-4xl font-extrabold mt-3">
            Frontend Developer
          </h1>
          <p className="mt-12 max-w-2xl text-xl mr-3 md:mr-1 font-light leading-relaxed">
            I am a Frontend-focused Web Developer. I build Frontend Websites and
            Web Apps that lead to product success.
          </p>

          <div className="m-3 flex items-center mt-10 gap-7">
            <a href="https://github.com/FranzSinaga" target="_BLANK">
              <GithubIcon className="w-8 h-8 fill-black hover:fill-blue-400 dark:fill-white dark:hover:fill-blue-400" />
            </a>
            <a href="https://id.linkedin.com/in/franz-sinaga" target="_BLANK">
              <LinkedinIcon className="w-8 h-8 fill-black hover:fill-blue-400 dark:fill-white dark:hover:fill-blue-400" />
            </a>
            <a href="mailto:sinagafranz12@gmail.com">
              <EnvelopeIcon className="w-8 h-8 fill-black hover:fill-blue-400 dark:fill-white dark:hover:fill-blue-400" />
            </a>
          </div>
        </div>
      </AnimatedBgHero>

      <div
        id="about"
        className="flex flex-col items-center justify-center bg-white dark:bg-gray-900"
      >
        <div className="px-4 pt-24 md:pt-60 ">
          <div className="mx-auto text-center">
            <h1 className="max-w-4xl mb-10 md:mb-24 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Get to know me!
            </h1>
          </div>
        </div>
        <div className="container flex flex wrap items-center justify-center">
          <div className="text-center">
            <p className="max-w-4xl m-2 md:m-0 mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
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

      <div className="pt-10 md:pt-40 bg-white dark:bg-gray-900 " id="projects">
        <div className="pt-10 md:pt-10" id="projects"></div>
        <div className="container mx-auto flex flex-col">
          <div className="mx-14">
            <h1 className="max-w-4xl mb-12 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Projects
            </h1>
            <div className="flex flex-row md:justify-center lg:justify-center xl:justify-start flex-wrap gap-5 sm:gap-5 md:gap-4 lg:gap-2">
              <div className=" md:basis-72 lg:basis-auto">
                <ProjectCards
                  title="Indonesia Covid Data"
                  detail="Build a website to display the number of corona virus cases that occurred in Indonesia"
                  tech={["React JS", "Bootstrap", "Rest API"]}
                  Link="https://franzsinaga.github.io/SimpleIndonesiaCoronavirus/"
                  GithubLink="https://github.com/FranzSinaga/SimpleIndonesiaCoronavirus"
                />
              </div>
              <div className=" md:basis-72 lg:basis-auto">
                <ProjectCards
                  title="Simple Todo List"
                  detail="Building a simple Todo web app to organize the activities you want to do"
                  tech={["React JS", "Redux", "Tailwind CSS"]}
                  Link="https://franzsinaga.github.io/r_todolist/"
                  GithubLink="https://github.com/FranzSinaga/r_todolist"
                />
              </div>
              <div className=" md:basis-72 lg:basis-auto">
                <ProjectCards
                  title="Premier League Table"
                  detail="Website to display the current standings for the English league"
                  tech={["HTML", "CSS", "JS", "Workbox", "PWA"]}
                  Link="https://fir-hosting-a2698.web.app/"
                  GithubLink="https://github.com/FranzSinaga/pwa-premier-league-table"
                />
              </div>
            </div>
          </div>
          <div className="px-4 mt-10">
            <div className="mx-auto text-center">
              <a
                href="https://github.com/FranzSinaga?tab=repositories"
                type="button"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                target="_BLANK"
              >
                <span className="relative px-8 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Other Project 💻
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-0 md:pt-56 bg-white dark:bg-gray-900">
        <div id="experience" className="mb-10 md:mb-24"></div>
        <div className=" container mx-auto flex flex-col">
          <div className="ml-2 mr-2 md:mr-0 md:ml-14">
            <h1 className="text-center max-w-4xl my-12 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Where I’ve Worked
            </h1>
            <div className="flex flex-row justify-center flex-wrap">
              <Timeline></Timeline>
            </div>
          </div>
        </div>
      </div>

      <div
        id="contact"
        className="pt-10 md:pt-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 "
      >
        <div className="px-4 py-14 md:py-60 md:mt-24 lg:py-40 xl:py-60">
          <div className="mx-auto text-center">
            <h1 className="max-w-4xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Get In Touch
            </h1>
            <p className="max-w-4xl mx-2 md:mx-0 mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Whether you have a question or just want to say hi, I’ll try my
              best to get back to you! Say Hello
            </p>
            <a
              href="mailto:sinagafranz12@gmail.com"
              type="button"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <span className="relative px-8 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Say Hello 👋
              </span>
            </a>
          </div>
        </div>
      </div>

      <footer className="flex flex-col h-36 w-full bg-white dark:bg-gray-900 items-center justify-center">
        <div className="m-3 flex items-center justify-center gap-7">
          <a href="https://github.com/FranzSinaga" target="_BLANK">
            <GithubIcon className="w-8 h-8 fill-gray-400 hover:fill-blue-400" />
          </a>
          <a href="https://id.linkedin.com/in/franz-sinaga" target="_BLANK">
            <LinkedinIcon className="w-8 h-8 fill-gray-400 hover:fill-blue-400" />
          </a>
          <a href="mailto:sinagafranz12@gmail.com">
            <EnvelopeIcon className="w-8 h-8 fill-gray-400 hover:fill-blue-400" />
          </a>
        </div>
        <div>
          <p className="text-black dark:text-gray-400 font-light text-lg">
            &#169; 2022 Franz Aditya Natanael Sinaga
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
