import Head from "next/head";
import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Michael Parkadze</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h2>Hello World!</h2>
        <Button />
      </div>
    </>
  );
}
