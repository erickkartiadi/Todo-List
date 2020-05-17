import React from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";

function Navbar() {
  return (
    <AppBar style={{ marginBottom: "64px" }}>
      <Toolbar>
        <Typography variant="h6">TodayList</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
