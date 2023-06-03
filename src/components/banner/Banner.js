import { Divider, Grid, Stack, Typography } from "@mui/material";
import Intro from "./Intro";
import Poster from "./Poster";
const Banner = () => {
  return (
    <section>
      <Grid
        container
        sx={{
          backgroundColor: "black",
          color: "white",
          p: "4rem",
          minHeight: "30rem",
        }}
      >
        <Intro />
        <Poster />
        <Grid item xs={12} md={6} lg={3} sx={{ mt: { xs: "40px", md: 0 } }}>
          <Typography>
            After a global pandemic destroys civilization, a hardened survivor
            takes charge of a 14-year-old girl who may be humanity's last hope.
          </Typography>
          <Divider sx={{ backgroundColor: "white", my: 4 }} />
          <box>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Country</Typography>
              <Typography>usa</Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ my: "20px" }}
            >
              <Typography>Seasons</Typography>
              <Typography>01</Typography>
            </Stack>
          </box>
        </Grid>
      </Grid>
    </section>
  );
};

export default Banner;
