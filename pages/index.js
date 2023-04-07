import Head from "next/head";
import Image from "next/image";
import DragAndDrop from "../components/DragAndDrop";
import styles from "../styles/Home.module.css";
import HomePage from "./HomePage";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Veryfi Receipt Visualiser</title>
        <meta
          name="description"
          content="App build to showcase veryfi API visualisation"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomePage />
      </main>

      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
}
