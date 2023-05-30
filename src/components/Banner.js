import { Chip, Divider, Grid, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Image from "next/image";
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
        <Grid
          container
          item
          xs={12}
          lg={3}
          sx={{ mb: { xs: 8, lg: 0 } }}
          rowSpacing={{ xs: 2, lg: 0 }}
        >
          <Grid xs={12} item>
            <Typography sx={{ color: grey[500] }} variant="body1">
              Release Date <span style={{ color: "white" }}>March 24</span>
            </Typography>
          </Grid>
          <Grid xs={12} item>
            <Typography
              variant="h2"
              component="h1"
              sx={{ textTransform: "capitalize" }}
            >
              the last of us
            </Typography>
          </Grid>
          <Grid xs={12} item>
            <Stack direction={"row"} spacing={2}>
              <Chip sx={{ color: "white" }} label="Genre"></Chip>
              <Chip
                sx={{
                  color: "white",
                  "&:hover": { color: grey[400] },
                }}
                label="Action"
                variant="outlined"
                onClick={() => {
                  console.log("clicked!");
                }}
              ></Chip>
              <Chip
                sx={{ color: "white", "&:hover": { color: grey[400] } }}
                label="Adventure"
                variant="outlined"
                onClick={() => {
                  console.log("clicked!");
                }}
              ></Chip>
            </Stack>
          </Grid>
          <Grid xs={12} item>
            <Stack direction={"row"} spacing={2}>
              <Typography sx={{ color: grey[500] }}>Authors</Typography>
              <Typography>Neil Druckmann</Typography>
            </Stack>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            position: "relative",
            minHeight: "300px",
          }}
        >
          <Image
            src="/the last of us.jpg"
            alt="batman"
            fill
            priority
            style={{
              objectFit: "cover",
              padding: "0 30px",
              borderRadius: "12px",
            }}
          />
        </Grid>
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
