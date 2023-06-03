import { Grid, Typography, Chip, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
const Intro = () => {
  return (
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
  );
};

export default Intro;
