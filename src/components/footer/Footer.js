import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import FooterLinks from "./FooterLinks";
import FooterSocials from "./FooterSocials";

function Footer() {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          bgcolor: "gray",
          pt: "30px",
          position: "fixed",
          bottom: "0",
        }}
      >
        <Grid
          container
          spacing={3}
          justify="center"
          justifyContent={{ sm: "center", md: "space-between" }}
        >
          <Grid item xs={12} md={6}>
            <FooterLinks />
          </Grid>
          <Grid item xs={12} md={6}>
            <FooterSocials></FooterSocials>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary" align="center">
              © 2023 My Company. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Footer;
