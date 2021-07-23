import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import GeneralPage from "../../components/generalPage";
import GenericList from "../../components/genericList";

const GetStarted = () => {
  const lista = [0, 1, 2, 3];
  return (
    <GeneralPage title="ToDoList" description="Write your tasks here">
      <Grid container>
        <Typography>Teste</Typography>
        <GenericList list={lista}></GenericList>
      </Grid>
    </GeneralPage>
  );
};

export default GetStarted;
