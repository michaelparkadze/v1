import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Button from "../components/Button";
import ProjectCard from "../components/ProjectCard";
import styles from "../styles/home.module.scss";

export default function Home() {
  const projects = [
    {
      name: "Whutsapp",
      description: `This is a messaging web application based on popular apps like WhatsApp and Telegram, Built with React, Typescript, Firebase, and Sass`,
      type: "WEB MESSENGER",
      iconBg: "#fff",
      gradient1: "#090979",
      gradient2: "#00d4ff",
      liveLink: "https://react-typescript-chat-ap-d6740.web.app/",
      codeLink: "https://github.com/michaelparkadze/react-typescript-chat-app",
    },
    {
      name: "Eccom",
      description: `This is an e-commerce web application based on other popular e-commerce platforms. Built with Angular, Node.js, and MySQL`,
      type: "E-COMMERCE",
      iconBg: "#fff",
      gradient1: "#ff9a9e",
      gradient2: "#ba77ff",
      liveLink: "",
      codeLink: "https://github.com/michaelparkadze/angular-ecommerce-app",
    },
    {
      name: "Trullo",
      description: `This is a kanban type application based on Trello, built with React and Firebase.`,
      type: "KANBAN ORGANIZER",
      iconBg: "#fff",
      gradient1: "#00ffbd",
      gradient2: "#c100ff",
      liveLink: "https://react-trello-clone-42c7f.web.app/",
      codeLink: "https://github.com/michaelparkadze/react-trello-clone",
    },
    {
      name: "Michael Parkadze",
      description: `This is the first iteration of my personal website built with Next.js and Sass`,
      type: "PERSONAL WEBSITE",
      iconBg: "#fff",
      gradient1: "#dcdcdc",
      gradient2: "#484848",
      liveLink: "",
      codeLink: "https://github.com/michaelparkadze/v1",
    },
  ];
  return (
    <>
      <Head>
        <title>Michael Parkadze</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.container}>
          <section className={styles.welcome}>
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
        </div>
      </Layout>
    </>
  );
}
