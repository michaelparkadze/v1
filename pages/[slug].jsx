import React, { useEffect } from "react";
import Link from "next/link";
import { getAllDocs, getDocBySlug } from "../lib/docs";
import { parseISO, format } from "date-fns";
import styles from "../styles/article.module.scss";
import ReactMarkdown from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function BlogPost(props) {
  const { title, content, date } = props;

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
    </div>
  );
}

const CodeBlock = ({ language, value }) => {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
};

export async function getStaticProps({ params }) {
  const doc = getDocBySlug(params.slug);
  const { data, content } = doc;
  // const test = await renderToString(content);
  // console.log(test);

  return {
    props: {
      ...data,
      date: data.date.toISOString(),
      content: content,
    },
  };
}

export async function getStaticPaths() {
  const docs = getAllDocs();

  return {
    paths: docs.map((doc) => {
      return {
        params: {
          slug: doc.slug,
        },
      };
    }),
    fallback: false,
  };
}

// export async function getStaticProps(context) {
//   const { params } = context;
//   const allPosts = getAllPosts();
//   const { data, content } = allPosts.find((item) => item.slug === params.slug);
//   console.log(allPosts);
//   const mdxSource = await markdownToHtml(content);

//   return {
//     props: {
//       ...data,
//       date: data.date.toISOString(),
//       content: mdxSource,
//     },
//   };
// }

// export async function getStaticPaths() {
//   return {
//     paths: getAllPosts().map((post) => ({
//       params: {
//         slug: post.slug,
//       },
//     })),
//     fallback: false,
//   };
// }
