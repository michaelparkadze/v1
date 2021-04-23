import Head from "next/head";
import Button from "../components/Button";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Michael Parkadze</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h2>Hello World!</h2>
        <Button />
      </div>
    </Layout>
  );
}
