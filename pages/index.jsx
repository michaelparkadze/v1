import Head from "next/head";
import Layout from "../components/Layout";
import Button from "../components/Button";
import ProjectCard from "../components/ProjectCard";
import ArticleCard from "../components/ArticleCard";
import { getAllPosts } from "../lib/data";
import readTime from "../lib/readTime";
import projects from "../content/projects";
import styles from "../styles/home.module.scss";

export default function Home(props) {
  const { posts } = props;
  return (
    <>
      <Head>
        <title>Michael Parkadze</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.container}>
          <section className={styles.welcome}>
            <a className={styles.anchor} id="welcome"></a>
            <h1>
              Hello I am Michael. <br /> A software engineer.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit dapibus
              porta lorem morbi hendrerit. Maecenas et, at quis purus.
            </p>
            <Button>Contact me</Button>
            <div className={styles.illustration}>
              <div className={styles.background}></div>
              <div className={styles.person}></div>
              <div className={styles.note1}></div>
              <div className={styles.note2}></div>
            </div>
          </section>
          <hr />
          <section className={styles.about}>
            <a className={styles.anchor} id="about"></a>
            <h2>About me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              tempor, malesuada adipiscing congue diam. Quis orci amet porttitor
              blandit amet nullam sit. Elit, purus blandit non ut non quam
              curabitur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              tempor, malesuada adipiscing congue diam. Quis orci amet porttitor
              blandit amet nullam sit. Elit, purus blandit non ut non quam
              curabitur.
            </p>
            <Button>More about me</Button>
          </section>
          <hr />
          <section className={styles.projects}>
            <a className={styles.anchor} id="projects"></a>
            <h2>Projects</h2>
            <ul>
              {projects.map((item, index) => {
                return (
                  <ProjectCard
                    key={index}
                    type={item.type}
                    name={item.name}
                    description={item.description}
                    gradient1={item.gradient1}
                    gradient2={item.gradient2}
                    iconBg={item.iconBg}
                    liveLink={item.liveLink}
                    codeLink={item.codeLink}
                  />
                );
              })}
            </ul>
          </section>
          <hr />
          <section className={styles.article}>
            <a className={styles.anchor} id="articles"></a>
            <h2>Articles</h2>
            <ul>
              {posts.map((item, index) => {
                return (
                  <ArticleCard
                    key={index}
                    last={index === posts.length - 1}
                    title={item.title}
                    description={item.description}
                    topic={item.topic}
                    date={item.date}
                    slug={item.slug}
                    readTime={readTime(item.content)}
                  />
                );
              })}
            </ul>
          </section>
          <hr />
          <section className={styles.contact}>
            <a className={styles.anchor} id="contact"></a>
            <h2>Contact me</h2>
            <p>
              Although I'm not currently looking for any new opportunities, my
              inbox is always open. Whether you have a question or just want to
              say hi, I'll try my best to get back to you!
            </p>
            <a
              href="mailto:michaelparkadze@icloud.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Say hello</Button>
            </a>
          </section>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data,
        date: data.date.toISOString(),
        content,
        slug,
      })),
    },
  };
}
