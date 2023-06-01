import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
function CominSoonCard() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Card
      sx={{
        minWidth: "100%",
        backgroundColor: "black",
        color: "white",
        position: "relative",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          width="100%"
          height="auto"
          image="/images/poster.jpg"
          alt="movie-poster"
          sx={{ maxHeight: "250px", borderRadius: "40px" }}
        ></CardMedia>
        {isHovered && (
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PlayCircleIcon fontSize="large" />
          </Box>
        )}
      </CardActionArea>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="body2">film name</Typography>
      </CardContent>
    </Card>
  );
}

export default CominSoonCard;
