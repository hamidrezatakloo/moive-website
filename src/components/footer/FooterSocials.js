import { Grid } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";

function FooterSocials() {
  return (
    <Grid container sx={{ color: "white" }}>
      <Grid item xs={3} sx={{ textAlign: "center" }}>
        <InstagramIcon></InstagramIcon>
      </Grid>
      <Grid item xs={3} sx={{ textAlign: "center" }}>
        <InstagramIcon></InstagramIcon>
      </Grid>
      <Grid item xs={3} sx={{ textAlign: "center" }}>
        <InstagramIcon></InstagramIcon>
      </Grid>
      <Grid item xs={3} sx={{ textAlign: "center" }}>
        <InstagramIcon></InstagramIcon>
      </Grid>
    </Grid>
  );
}

export default FooterSocials;
