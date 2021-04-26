import React from "react";
import Link from "next/link";
import { parseISO, format } from "date-fns";
import ReactMarkdown from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import codeStyle from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

export default function Article(props) {
  const { title, date, content, previousArticle, nextArticle } = props;

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: { opacity: 0, y: 72 },
  };

  const variants2 = {
    visible: {
      opacity: 1,
    },
    hidden: { opacity: 0 },
  };

  return (
    <div className={styles.container}>
      {/* Article Header */}
      <header className={styles.header}>
        <motion.div
          animate="visible"
          initial="hidden"
          variants={variants}
          transition={{
            duration: 0.8,
            ease: [0.6, 0.05, -0.01, 0.9],
            delay: 0.45,
          }}
        >
          <h1>
            {title}
            <p> {format(parseISO(date), "MMMM do, uuu")}</p>
          </h1>
        </motion.div>
      </header>
      {/* Article Content */}
      <article className={styles.article}>
        <motion.section
          animate="visible"
          initial="hidden"
          variants={variants}
          transition={{
            duration: 0.8,
            ease: [0.6, 0.05, -0.01, 0.9],
            delay: 0.65,
          }}
        >
          <ReactMarkdown
            escapeHtml={false}
            source={content}
            renderers={{ code: CodeBlock }}
          />
        </motion.section>
      </article>
      {/* Navigation */}
      <nav className={styles.nav}>
        <h2>Read next</h2>
        <div className={styles.grid}>
          <div>
            {previousArticle && (
              <Link href={"/[slug]"} as={`/${previousArticle.slug}`}>
                <a>
                  <div className={styles.leftarrow}>←</div>{" "}
                  {previousArticle.frontmatter.title}
                </a>
              </Link>
            )}
          </div>
          <div>
            {nextArticle && (
              <Link href={"/[slug]"} as={`/${nextArticle.slug}`}>
                <a>
                  {nextArticle.frontmatter.title}{" "}
                  <div className={styles.rightarrow}>→</div>
                </a>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={codeStyle}>
      {value}
    </SyntaxHighlighter>
  );
};
