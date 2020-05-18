import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import sizes from "../../../styles/sizes";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",

    bottom: "0",
    width: "100%",
    backgroundColor: "#3D9DF2",
    [sizes.down("sm")]: {
      // display: "none",
    },
    display: "flex",
    justifyContent: "space-between",
    boxShadow: " 0px 12px 16px 7px rgba(0,0,0,0.75)",
    "&  a": {
      color: "rgba(20,20,20,0.9)",
      fontSize: "1.25rem",
      letterSpacing: "0.1rem",
      textDecoration: "",
      padding: "0.75rem 1.5rem",
      textShadow: "1px 1px 1px rgba(0,0,0,0.13)",
    },
    "&  span": {
      color: "rgba(20,20,20,0.9)",
      fontSize: "1.25rem",
      padding: "0.75rem 1.5rem",
      letterSpacing: "0.1rem",
      textShadow: "1px 1px 1px rgba(0,0,0,0.13)",
    },
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span> &copy; Erick Cartiady</span>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/erickkartiadi/Todo-List"
      >
        Github
      </a>
    </div>
  );
}
export default Footer;
