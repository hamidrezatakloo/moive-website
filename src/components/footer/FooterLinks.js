import { Grid } from "@mui/material";
import React from "react";
import FooterLink from "./FooterLink";

export const footerLinks = [
  { name: "Get The App", to: "/" },
  { name: "Help", to: "/" },
  { name: "Advertising", to: "/" },
  { name: "jobs", to: "/" },
  { name: "condition of us", to: "/" },
  { name: "privacey policy", to: "/" },
  { name: "box office", to: "/" },
];
function FooterLinks() {
  return (
    <Grid container spacing={1}>
      {footerLinks.map((item, index) => (
        <FooterLink value={item.name} to={item.to} key={index}></FooterLink>
      ))}
    </Grid>
  );
}

export default FooterLinks;
