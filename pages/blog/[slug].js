import dayjs from "dayjs";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import rehypeSlug from "rehype-slug";
import { MDXRemote } from "next-mdx-remote";
import rehypeHighlight from "rehype-highlight";
import rehypeCodeTitles from "rehype-code-titles";
import { serialize } from "next-mdx-remote/serialize";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { getSlug, getArticleFromSlug } from "../../src/utils/mdx";
// import { SectionTitle, Text } from "../../data/components/mdx-components";

const components = {
  h1: (props) => <h1 style={{ color: "red" }}>{props.children}</h1>,
  p: (props) => <p style={{ color: "green" }}>{props.children}</p>,
};

export default function Blog({ post: { source, frontmatter } }) {
  return (
    <div className="pt-28">
      <Head>
        <title>{frontmatter.title} | My blog</title>
      </Head>
      <div className="article-container">
        <h1 className="article-title">{frontmatter.title}</h1>
        <p className="article-title">{frontmatter.cover_image}</p>
        <img src={frontmatter.cover_image} />
        <p className="publish-date">
          {dayjs(frontmatter.publishedAt).format("MMMM D, YYYY")} &mdash;{" "}
          {frontmatter.readingTime}
        </p>
        <div className="content">
          <MDXRemote {...source} components={components}/>
        </div>
      </div>
    </div>
  );
}

// dynamically generate the slugs for each article(s)
export async function getStaticPaths() {
  // getting all paths of each article as an array of
  // objects with their unique slugs
  const paths = (await getSlug()).map((slug) => ({ params: { slug } }));

  return {
    paths,
    // in situations where you try to access a path
    // that does not exist. it'll return a 404 page
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  //fetch the particular file based on the slug
  const { slug } = params;
  const { content, frontmatter } = await getArticleFromSlug(slug);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ["anchor"] },
          },
          { behaviour: "wrap" },
        ],
        rehypeHighlight,
        rehypeCodeTitles,
      ],
    },
  });

  return {
    props: {
      post: {
        source: mdxSource,
        frontmatter,
      },
    },
  };
}
