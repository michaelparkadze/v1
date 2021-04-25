import Head from "next/head";
import Layout from "../components/Layout";
import Button from "../components/Button";
import ProjectCard from "../components/ProjectCard";
import ArticleCard from "../components/ArticleCard";
import { getAllPosts } from "../lib/data";
import readTime from "../lib/readTime";
import projects from "../content/projects";
import { motion, useAnimation } from "framer-motion";
import styles from "../styles/home.module.scss";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Home(props) {
  const animation = useAnimation();
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    rootMargin: "-75px",
  });
  // const [projectsRef, projectsInView] = useInView({
  //   triggerOnce: true,
  //   rootMargin: "0px",
  // });
  // const [articles, inView] = useInView({
  //   triggerOnce: true,
  //   rootMargin: "0px",
  // });
  // const [aboutRef, inView] = useInView({
  //   triggerOnce: true,
  //   rootMargin: "0px",
  // });

  // About InView
  useEffect(() => {
    if (aboutInView) {
      animation.start("visible");
      console.log("about is visible");
    }
  }, [animation, aboutInView]);

  // About InView
  // useEffect(() => {
  //   if (inView) {
  //     animation.start("visible");
  //     console.log("about is visible");
  //   }
  // }, [animation, inView]);

  // About InView
  // useEffect(() => {
  //   if (inView) {
  //     animation.start("visible");
  //     console.log("about is visible");
  //   }
  // }, [animation, inView]);

  // About InView
  // useEffect(() => {
  //   if (inView) {
  //     animation.start("visible");
  //     console.log("about is visible");
  //   }
  // }, [animation, inView]);

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: { opacity: 0, y: 72 },
  };

  const { posts } = props;
  return (
    <>
      <Head>
        <title>Michael Parkadze</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.container} id="welcome">
          <section className={styles.welcome}>
            <div className={styles.left}>
              <motion.h1
                animate="visible"
                initial="hidden"
                variants={variants}
                transition={{
                  duration: 0.8,
                  ease: [0.6, 0.05, -0.01, 0.9],
                  delay: 0.45,
                }}
              >
                Hello I am Michael. <br /> A software engineer.
              </motion.h1>
              <motion.p
                animate="visible"
                initial="hidden"
                variants={variants}
                transition={{
                  duration: 0.8,
                  ease: [0.6, 0.05, -0.01, 0.9],
                  delay: 0.6,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit dapibus
                porta lorem morbi hendrerit. Maecenas et, at quis purus.
              </motion.p>
              <motion.div
                animate="visible"
                initial="hidden"
                variants={variants}
                transition={{
                  duration: 0.8,
                  ease: [0.6, 0.05, -0.01, 0.9],
                  delay: 0.75,
                }}
              >
                <Button>Contact me</Button>
              </motion.div>
            </div>
            <motion.div
              className={styles.illustration}
              animate="visible"
              initial="hidden"
              variants={variants}
              transition={{
                duration: 0.8,
                ease: [0.6, 0.05, -0.01, 0.9],
                delay: 0.9,
              }}
            >
              <div className={styles.background}></div>
              <div className={styles.person}></div>
              <div className={styles.note1}></div>
              <div className={styles.note2}></div>
            </motion.div>
          </section>
          <hr />
          <section className={styles.about}>
            <a className={styles.anchor} id="about"></a>
            <motion.h2
              ref={aboutRef}
              animate={animation}
              initial="hidden"
              variants={variants}
              transition={{
                duration: 0.8,
                ease: [0.6, 0.05, -0.01, 0.9],
                delay: 0,
              }}
            >
              About me
            </motion.h2>
            <div>
              <motion.p
                animate={animation}
                initial="hidden"
                variants={variants}
                transition={{
                  duration: 0.8,
                  ease: [0.6, 0.05, -0.01, 0.9],
                  delay: 0.15,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                tempor, malesuada adipiscing congue diam. Quis orci amet
                porttitor blandit amet nullam sit. Elit, purus blandit non ut
                non quam curabitur.
              </motion.p>
              <motion.p
                animate={animation}
                initial="hidden"
                variants={variants}
                transition={{
                  duration: 0.8,
                  ease: [0.6, 0.05, -0.01, 0.9],
                  delay: 0.3,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                tempor, malesuada adipiscing congue diam. Quis orci amet
                porttitor blandit amet nullam sit. Elit, purus blandit non ut
                non quam curabitur.
              </motion.p>
            </div>
            <motion.div
              animate={animation}
              initial="hidden"
              variants={variants}
              transition={{
                duration: 0.8,
                ease: [0.6, 0.05, -0.01, 0.9],
                delay: 0.35,
              }}
            >
              <Button>More about me</Button>
            </motion.div>
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
          <section className={styles.articles}>
            <a className={styles.anchor} id="articles"></a>
            <div>
              <h2>Articles</h2>
            </div>
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
