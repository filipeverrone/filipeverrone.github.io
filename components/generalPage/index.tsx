import Head from "next/head";
import React from "react";
import styles from "./styles.module.css";

interface Props {
  title: any;
  description: any;
  children?: React.ReactNode;
}
// archi = Princípio

const GeneralPage: React.FC<Props> = ({ children, title, description }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Archi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>

        <p className={styles.description}>{description}</p>
        {children}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/filipevlima/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by{" Filipe Verrone de Lima"}
        </a>
      </footer>
    </div>
  );
};

export default GeneralPage;
