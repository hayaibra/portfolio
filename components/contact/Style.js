import { Box, styled } from "@mui/material";

export const ContactBox = styled(Box)(({ theme }) => ({
  background: theme.palette.othercolor.main,
  position: "relative",
}));

export const EllipseBox = styled(Box)(({ theme }) => ({
  background: theme.palette.pinkcolor.main,
  position: "absolute",
  width: "389px",
  height: "90px",
  bottom: 0,
  right: 0,
  filter: "blur(127px)",
}));
