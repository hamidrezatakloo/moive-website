import { Grid } from "@mui/material";
import React from "react";
import FooterLink from "./FooterLink";

function FooterLinks() {
  return (
    <Grid container spacing={1}>
      <FooterLink value="My Awesome Footer"></FooterLink>
      <FooterLink value="My Awesome Footer"></FooterLink>
      <FooterLink value="My Awesome Footer"></FooterLink>
      <FooterLink value="My Awesome Footer"></FooterLink>
    </Grid>
  );
}

export default FooterLinks;
