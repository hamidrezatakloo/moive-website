import React from "react";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import CominSoonCard from "./CominSoonCard";
function ComingSoon() {
  return (
    <>
      <Divider></Divider>
      <Box component="section" sx={{ bgcolor: "black" }}>
        <Typography
          component="h3"
          variant="h6"
          color="white"
          textAlign="center"
          textTransform="capitalize"
          py="3rem"
        >
          coming soon...
        </Typography>
        <Container maxWidth="xl" sx={{ py: 0.5 }}>
          <Grid
            container
            justifyContent="center"
            spacing={3}
            sx={{ overflowX: "auto" }}
          >
            <Grid item md={4} xs={12}>
              <CominSoonCard></CominSoonCard>
            </Grid>
            <Grid item md={4} xs={12}>
              <CominSoonCard></CominSoonCard>
            </Grid>
            <Grid item md={4} xs={12}>
              <CominSoonCard></CominSoonCard>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default ComingSoon;

// <Container
// maxWidth="xl"
// sx={{
//   display: "flex",
//   gap: 1,
//   justifyContent: "center",
//   maxHeight: "500px",
//   overflowX: "auto",
// }}
// >
// <CominSoonCard />
// <CominSoonCard />
// <CominSoonCard />
// </Container>
