import React from "react";
import Head from "next/head";
import Link from "next/link";
import { getAllArticles } from "../../src/utils/mdx";
import dayjs from "dayjs";
export default function BlogPage({ posts }) {
  return (
    <div className="flex min-h-screen flex-col pt-80">
      <Head>
        <title>My Blog</title>
      </Head>
      <div>
        {posts.map((frontMatter) => {
          return (
            <Link href={`/blog/${frontMatter.slug}`} passHref>
              <div>
                <h1 className="title">{frontMatter.title}</h1>
                <p className="summary">{frontMatter.excerpt}</p>
                <p className="date">
                  {dayjs(frontMatter.publishedAt).format("MMMM D, YYYY")}{" "}
                  &mdash; {frontMatter.readingTime}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const articles = await getAllArticles();
  console.log(getAllArticles());
  articles
    .map((article) => article.data)
    .sort((a, b) => {
      if (a.data.publishedAt > b.data.publishedAt) return 1;
      if (a.data.publishedAt < b.data.publishedAt) return -1;

      return 0;
    });

  return {
    props: {
      posts: articles.reverse(),
    },
  };
}
