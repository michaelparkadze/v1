import React from "react";
import Layout from "../components/Layout";
import Article from "../components/Article";
import { getArticleSlugs, getArticleBySlug } from "../lib/data";

export default function ArticlePage(props) {
  const { title, content, date, previousArticle, nextArticle } = props;

  return (
    <Layout>
      <Article
        title={title}
        content={content}
        date={date}
        previousArticle={previousArticle}
        nextArticle={nextArticle}
      />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const doc = getArticleBySlug(params.slug);
  const { frontmatter, content, slug } = doc;

  // Undefined will result in error, so update to null.
  if (!doc.previousArticle) doc.previousArticle = null;
  if (!doc.nextArticle) doc.nextArticle = null;

  return {
    props: {
      ...frontmatter,
      slug,
      content,
      previousArticle: doc.previousArticle,
      nextArticle: doc.nextArticle,
    },
  };
}

export async function getStaticPaths() {
  const paths = getArticleSlugs();

  return {
    paths,
    fallback: false,
  };
}
