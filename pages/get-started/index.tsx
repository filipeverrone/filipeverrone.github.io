import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import GeneralPage from "../../components/generalPage";
import GenericCard from "../../components/genericCard";

const mappingCards = (cards) => {
  return (
    <>
      {cards.map((item, index) => (
        <Grid container key={index}>
          <GenericCard {...item} />
        </Grid>
      ))}
    </>
  );
};

const GetStarted = () => {
  const cards = [
    {
      title: "ToDoList",
      description: "Add, remove or edit your tasks",
      href: "/to-do-list",
    },
  ];
  return (
    <GeneralPage title="Projects" description="Choose a project">
      <Grid container>
        {cards.length > 0 ? (
          mappingCards(cards)
        ) : (
          <Typography>No Data</Typography>
        )}
      </Grid>
    </GeneralPage>
  );
};

export default GetStarted;
