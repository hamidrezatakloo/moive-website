import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import FooterLinks from "./FooterLinks";
import FooterSocials from "./FooterSocials";

function Footer() {
  return (
    <Box component="footer" sx={{ width: "100%", backgroundColor: "black" }}>
      <Container
        maxWidth="xl"
        sx={{
          bgcolor: "black",
          padding: "30px",
        }}
      >
        <Grid
          container
          spacing={3}
          justify="center"
          justifyContent={{ sm: "center", md: "space-between" }}
        >
          <Grid item xs={12} md={8}>
            <FooterLinks />
          </Grid>
          <Grid item xs={12} md={3}>
            <FooterSocials></FooterSocials>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="white" align="center">
              © 2023 My Company. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
