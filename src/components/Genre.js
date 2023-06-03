import { Chip } from "@mui/material";
import { grey } from "@mui/material/colors";
const Genre = ({ label }) => {
  return (
    <Chip
      sx={{
        color: "white",
        "&:hover": { color: grey[400] },
      }}
      label={label}
      variant="outlined"
      onClick={() => {
        console.log("clicked!");
      }}
    ></Chip>
  );
};

export default Genre;
