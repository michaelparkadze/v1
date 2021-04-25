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
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function Home(props) {
  const { width } = useWindowDimensions();
  const isMobile = width <= 768;
  const welcomeAnimation = useAnimation();
  const aboutAnimation = useAnimation();
  const projectsAnimation = useAnimation();
  const articlesAnimation = useAnimation();
  const contactAnimation = useAnimation();

  const [welcomeRef, welcomeInView] = useInView({
    triggerOnce: true,
    rootMargin: isMobile ? "-50px" : "-100px",
  });
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    rootMargin: isMobile ? "-75px" : "-100px",
  });
  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    rootMargin: isMobile ? "-100px" : "-300px",
  });
  const [articlesRef, articlesInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });
  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  // Welcome InView
  useEffect(() => {
    if (welcomeInView) {
      welcomeAnimation.start("visible");
      console.log("welcome is visible");
    }
  }, [welcomeAnimation, welcomeInView]);

  // About InView
  useEffect(() => {
    if (aboutInView) {
      aboutAnimation.start("visible");
      console.log("about is visible");
    }
  }, [aboutAnimation, aboutInView]);

  // Projects InView
  useEffect(() => {
    if (projectsInView) {
      projectsAnimation.start("visible");
      console.log("projects is visible");
    }
  }, [projectsAnimation, projectsInView]);

  // Articles InView
  useEffect(() => {
    if (articlesInView) {
      articlesAnimation.start("visible");
      console.log("articles is visible");
    }
  }, [articlesAnimation, articlesInView]);

  // Contact InView
  useEffect(() => {
    if (contactInView) {
      contactAnimation.start("visible");
      console.log("contact is visible");
    }
  }, [contactAnimation, contactInView]);

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
          <section className={styles.welcome} ref={welcomeRef}>
            <div className={styles.left}>
              <motion.h1
                animate={welcomeAnimation}
                initial="hidden"
                variants={variants}
                transition={{
                  duration: 0.8,
                  ease: [0.6, 0.05, -0.01, 0.9],
                  delay: 0.45,
                }}
              >
                Hello, I am Michael. <br /> A software engineer.
              </motion.h1>
              <motion.p
                animate={welcomeAnimation}
                initial="hidden"
                variants={variants}
                transition={{
                  duration: 0.8,
                  ease: [0.6, 0.05, -0.01, 0.9],
                  delay: 0.6,
                }}
              >
                I'm a full-stack software engineer based in{" "}
                <a
                  href="https://www.google.com/maps/search/hafia"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Haifa, Israel
                </a>{" "}
                who specializes in building (and occasionally designing)
                remarkable digital experiences.
              </motion.p>
              <motion.div
                animate={welcomeAnimation}
                initial="hidden"
                variants={variants}
                transition={{
                  duration: 0.8,
                  ease: [0.6, 0.05, -0.01, 0.9],
                  delay: 0.75,
                }}
              >
                <a
                  href="mailto:michaelparkadze@icloud.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>Contact me</Button>
                </a>
              </motion.div>
            </div>
            <motion.div
              className={styles.illustration}
              animate={welcomeAnimation}
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
              animate={aboutAnimation}
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
            <div className={styles.grid}>
              <motion.p
                animate={aboutAnimation}
                initial="hidden"
                variants={variants}
                transition={{
                  duration: 0.8,
                  ease: [0.6, 0.05, -0.01, 0.9],
                  delay: 0.15,
                }}
              >
                Hello! My name is Michael and I enjoy solving difficult
                problems. My interest in web development started back in the 8th
                grade when I decided to try building a website with HTML & CSS —
                turns out you can learn a lot from watching youtube tutorials!
              </motion.p>
              <motion.p
                animate={aboutAnimation}
                initial="hidden"
                variants={variants}
                transition={{
                  duration: 0.8,
                  ease: [0.6, 0.05, -0.01, 0.9],
                  delay: 0.3,
                }}
              >
                Fast-forward to today, I have over 2 years of experience in
                designing and developing products and digital experiences. My
                main focus today is expanding my knowledge about system
                architecture design.
              </motion.p>
            </div>
            <motion.div
              animate={aboutAnimation}
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
          <section className={styles.projects} ref={projectsRef}>
            <a className={styles.anchor} id="projects"></a>
            <motion.h2
              animate={projectsAnimation}
              initial="hidden"
              variants={variants}
              transition={{
                duration: 0.8,
                ease: [0.6, 0.05, -0.01, 0.9],
                delay: 0,
              }}
            >
              Projects
            </motion.h2>
            <motion.ul
              animate={projectsAnimation}
              initial="hidden"
              variants={variants}
              transition={{
                duration: 0.8,
                ease: [0.6, 0.05, -0.01, 0.9],
                delay: 0.15,
              }}
            >
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
            </motion.ul>
          </section>
          <hr />
          <section className={styles.articles}>
            <a className={styles.anchor} id="articles"></a>
            <motion.div
              ref={articlesRef}
              animate={articlesAnimation}
              initial="hidden"
              variants={variants}
              transition={{
                duration: 0.8,
                ease: [0.6, 0.05, -0.01, 0.9],
                delay: 0,
              }}
            >
              <h2>Articles</h2>
            </motion.div>
            <motion.ul
              animate={articlesAnimation}
              initial="hidden"
              variants={variants}
              transition={{
                duration: 0.8,
                ease: [0.6, 0.05, -0.01, 0.9],
                delay: 0.15,
              }}
            >
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
            </motion.ul>
          </section>
          <hr />
          <section className={styles.contact}>
            <a className={styles.anchor} id="contact"></a>
            <motion.h2
              ref={contactRef}
              animate={contactAnimation}
              initial="hidden"
              variants={variants}
              transition={{
                duration: 0.8,
                ease: [0.6, 0.05, -0.01, 0.9],
                delay: 0,
              }}
            >
              Contact me
            </motion.h2>
            <motion.p
              animate={contactAnimation}
              initial="hidden"
              variants={variants}
              transition={{
                duration: 0.8,
                ease: [0.6, 0.05, -0.01, 0.9],
                delay: 0.15,
              }}
            >
              Although I'm not currently looking for any new opportunities, my
              inbox is always open. Whether you have a question or just want to
              say hi, I'll try my best to get back to you!
            </motion.p>
            <motion.div
              animate={contactAnimation}
              initial="hidden"
              variants={variants}
              transition={{
                duration: 0.8,
                ease: [0.6, 0.05, -0.01, 0.9],
                delay: 0.3,
              }}
            >
              <a
                href="mailto:michaelparkadze@icloud.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Say hello</Button>
              </a>
            </motion.div>
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
