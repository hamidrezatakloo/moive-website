import { Button, Grid } from "@mui/material";
import React from "react";
import { NextLinkComposed } from "../LinkBehavior";

function FooterLink(props) {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={1.6}
      alignItems="center"
      justifyContent="center"
      sx={{ textAlign: "center" }}
    >
      <Button
        component={NextLinkComposed}
        to={{
          pathname: props.to,
          // query: { name: "test" },
        }}
        sx={{
          color: "white",
          fontSize: "0.63rem",
          "&:hover": { color: "#F1B569", bgcolor: "black" },
        }}
      >
        {props.value}
      </Button>
    </Grid>
  );
}

export default React.memo(FooterLink);
