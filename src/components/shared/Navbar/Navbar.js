import React from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  appBar: {
    marginBottom: "64px",
    backgroundColor: "#3D9DF2",
  },
  title: {
    fontFamily: "Amaranth",
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography className={classes.title} variant="h6">
          TodoList
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
