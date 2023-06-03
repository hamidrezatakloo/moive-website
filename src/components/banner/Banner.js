import { Grid } from "@mui/material";
import Detail from "./Detail";
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
        <Detail />
      </Grid>
    </section>
  );
};

export default Banner;
