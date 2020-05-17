import React from "react";
import { getDate } from "../helpers";
import { Typography } from "@material-ui/core";

export function TodoDate() {
  const { weekday, date } = getDate();

  return (
    <>
      <Typography variant="h4">{weekday}</Typography>
      <Typography variant="subtitle1">{date}</Typography>
    </>
  );
}
