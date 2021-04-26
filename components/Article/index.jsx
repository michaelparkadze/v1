import React from "react";
import Link from "next/link";
import { parseISO, format } from "date-fns";
import ReactMarkdown from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import codeStyle from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";
import styles from "./styles.module.scss";

export default function Article(props) {
  const { title, date, content, previousArticle, nextArticle } = props;

  return (
    <div className={styles.container}>
      {/* Article Header */}
      <header className={styles.header}>
        <h1>
          {title}
          <p> {format(parseISO(date), "MMMM do, uuu")}</p>
        </h1>
      </header>
      {/* Article Content */}
      <article>
        <section>
          <ReactMarkdown
            escapeHtml={false}
            source={content}
            renderers={{ code: CodeBlock }}
          />
        </section>
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
