import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Button from "../components/Button";
import styles from "../styles/home.module.scss";

export default function Home() {
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
        </div>
      </Layout>
    </>
  );
}
