import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SolPocket</title>
        <meta name="description" content="Simple yet powerful wallet for tokens running on Solana chain" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>SolPocket</h1>
      </main>

      <footer className={styles.footer}>Copyright &copy; 2021 All rights reserved</footer>
    </div>
  );
}
