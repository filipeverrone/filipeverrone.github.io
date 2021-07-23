import Head from "next/head";
import React from "react";
import styles from "./styles.module.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Grid from "@material-ui/core/Grid";

interface Props {
  title: any;
  description: any;
  children?: React.ReactNode;
}
// archi = Princípio

const PerfilPage: React.FC<Props> = ({ children, title, description }) => {
  return (
    <Grid className={styles.container}>
      <Head>
        <title>Archi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid
        container
        style={{
          display: "flex",
          backgroundColor: "#0095ff",
          alignItems: "center",
          justifyItems: "flex-start",
          width: "100%",
          height: "50px",
        }}
      >
        <Grid item style={{ marginLeft: "20px" }}>
          <a href={"/"}>
            <ArrowBackIcon fontSize="large" color="inherit" />
          </a>
        </Grid>
        <Grid item></Grid>
      </Grid>
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
    </Grid>
  );
};

export default PerfilPage;
