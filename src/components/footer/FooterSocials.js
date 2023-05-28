import { Grid, IconButton } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
const SOCIAL_MEDIAS = [
  { component: <InstagramIcon />, link: "instagram.com" },
  { component: <YouTubeIcon />, link: "youtube.com" },
  { component: <FacebookIcon />, link: "facebook.com" },
];
function FooterSocials() {
  return (
    <Grid container>
      {SOCIAL_MEDIAS.map((item, index) => (
        <Grid item xs={4} key={index} sx={{ textAlign: "center" }}>
          <IconButton
            href={item.link}
            sx={{
              color: "white",
              "&:hover": { color: "#F1B569" },
            }}
          >
            {item.component}
          </IconButton>
        </Grid>
      ))}
    </Grid>
  );
}

export default FooterSocials;
