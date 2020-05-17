import React from "react";
import { getDate } from "../../helpers";
import { Typography, Box } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: "1rem",
  },
}));
function TodoDate() {
  const { weekday, date } = getDate();
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h4">{weekday}</Typography>
      <Typography variant="subtitle1">{date}</Typography>
    </Box>
  );
}

export default TodoDate;
