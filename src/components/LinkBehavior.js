import NextLink from "next/link";
import { forwardRef } from "react";
import { createTheme } from "@mui/material/styles";

export const LinkBehaviour = forwardRef(function LinkBehaviour(props, ref) {
  return <NextLink ref={ref} {...props} />;
});
