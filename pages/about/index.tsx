import React from "react";
import styles from "../../styles/about";
import PerfilPage from "../../components/perfilPage/index";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ageNow from "../../utils/ageNow.js";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(styles);

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <PerfilPage
        title="Filipe Verrone de Lima"
        description={"Intern Developer FullStack"}
      >
        <Grid container alignItems="center" justify="center">
          {/* <Grid item style={{ width: "100%" }}>
            <img src="public/images/" alt="perfil" />
          </Grid> */}
          <Grid item style={{ width: "70%" }}>
            <Typography className={classes.textBody} variant="body1">
              Hi! My name is Filipe, {ageNow("11/11/2002")}, I am an intern
              software developer. Graduating in Computer Engineering from
              Faculdade Impacta de Tecnologia.
            </Typography>
          </Grid>
        </Grid>
      </PerfilPage>
    </div>
  );
};

export default About;
