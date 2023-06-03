import { Grid } from "@mui/material";
import Image from "next/image";
const Poster = () => {
  return (
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
  );
};

export default Poster;
