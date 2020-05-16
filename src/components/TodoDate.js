import React from "react";
import { getDate } from "../helpers";

export function TodoDate() {
  const { weekday, date } = getDate();

  return (
    <>
      <h1>{weekday}</h1>
      <h1>{date}</h1>
    </>
  );
}
