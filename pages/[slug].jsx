import React, { useEffect } from "react";
import Link from "next/link";
import { getArticleSlugs, getArticleBySlug } from "../lib/data";
import { parseISO, format } from "date-fns";
import styles from "../styles/article.module.scss";
import ReactMarkdown from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";

export default function BlogPost(props) {
  const { title, content, date, previousArticle, nextArticle } = props;

  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.back}>
        <Link href="/">Home</Link>
      </div>
      <article>
        <header>
          <h1>
            {title}
            <p> {format(parseISO(date), "MMMM do, uuu")}</p>
          </h1>
        </header>
        <section>
          <ReactMarkdown
            escapeHtml={false}
            source={content}
            renderers={{ code: CodeBlock }}
          />
        </section>
      </article>
      <nav>
        {previousArticle ? (
          <Link href={"/[slug]"} as={`/${previousArticle.slug}`}>
            <a className="text-lg font-bold">
              ← {previousArticle.frontmatter.title}
            </a>
          </Link>
        ) : (
          <div />
        )}
        {nextArticle ? (
          <Link href={"/[slug]"} as={`/${nextArticle.slug}`}>
            <a className="text-lg font-bold">
              {nextArticle.frontmatter.title} →
            </a>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </div>
  );
}

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={style}>
      {value}
    </SyntaxHighlighter>
  );
};

export async function getStaticProps({ params }) {
  const doc = getArticleBySlug(params.slug);
  console.log(doc);
  const { frontmatter, content, slug } = doc;

  if (!doc.previousArticle) {
    doc.previousArticle = null;
  }

  if (!doc.nextArticle) {
    doc.nextArticle = null;
  }

  return {
    props: {
      ...frontmatter,
      slug,
      content,
      previousArticle: doc.previousArticle,
      nextArticleL: doc.nextArticle,
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
