import { Grid, Typography, Link } from "@mui/material";
import React from "react";
import { LinkBehaviour } from "../LinkBehavior";

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
      <Link component={LinkBehaviour} href="/">
        {props.value}
      </Link>
    </Grid>
  );
}

export default FooterLink;
