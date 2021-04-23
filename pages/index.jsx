import Head from "next/head";
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
          <section>
            <h1>
              Hello I am Michael. <br /> A software engineer.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit dapibus
              porta lorem morbi hendrerit. Maecenas et, at quis purus.
            </p>
            <Button>Contact me</Button>
          </section>
        </div>
      </Layout>
    </>
  );
}
