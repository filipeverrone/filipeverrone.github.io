import styles from "../styles/Home.module.css";
import GeneralPage from "../components/generalPage/index";
import React from "react";
import Grid from "@material-ui/core/Grid";

const Home = () => {
  return (
    <div className={styles.container}>
      <GeneralPage
        title="Welcome to Archi"
        description={
          <Grid container justify="space-between" spacing={4}>
            <Grid item>
              <a href="/get-started">Get started</a>
            </Grid>
            <Grid item>
              <a href="/about">About the author</a>
            </Grid>
          </Grid>
        }
      />
    </div>
  );
};

export default Home;
