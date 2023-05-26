import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { LinkBehaviour, NextLinkComposed } from "../LinkBehavior";
import Link from "../LinkBehavior";

function FooterLink(props) {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      alignItems="center"
      justifyContent="center"
      sx={{ textAlign: "center" }}
    >
      <Button
        component={NextLinkComposed}
        to={{
          pathname: "/",
          // query: { name: "test" },
        }}
        sx={{
          color: "white",
          "&:hover": { color: "#F1B569", bgcolor: "black" },
        }}
      >
        {props.value}
      </Button>
    </Grid>
  );
}

export default FooterLink;
