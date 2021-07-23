import { createStyles } from "@material-ui/styles";

export default () =>
  createStyles({
    container: {
      minHeight: "100vh",
      padding: "0 0.5rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#151515",
    },
    textBody: {
      textAlign: "justify",
      color: "#659cde",
      textIndent: "3em",
    },
  });
