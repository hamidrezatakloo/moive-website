import { Grid } from "@mui/material";
import React from "react";
import FooterLink from "./FooterLink";

export const footerLinks = [
  "Get The App",
  "Help",
  "Advertising",
  "jobs",
  "condition of us",
  "privacey policy",
  "box office",
];
function FooterLinks() {
  return (
    <Grid container spacing={1}>
      {footerLinks.map((item, index) => (
        <FooterLink value={item} key={index}></FooterLink>
      ))}
    </Grid>
  );
}

export default FooterLinks;
