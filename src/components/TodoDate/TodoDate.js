import React from "react";
import { getDate } from "../../helpers";
import { Typography, Box } from "@material-ui/core";

function TodoDate() {
  const { weekday, date } = getDate();

  return (
    <Box style={{ marginBottom: "1rem" }}>
      <Typography variant="h4">{weekday}</Typography>
      <Typography variant="subtitle1">{date}</Typography>
    </Box>
  );
}

export default TodoDate;
