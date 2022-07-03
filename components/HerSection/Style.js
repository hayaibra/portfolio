import { Box, styled } from "@mui/material";

export const HeroBox = styled(Box)(({ theme }) => ({
  background: theme.palette.othercolor.main,
  position: "absolute",
  width: "100%",
  height: "100vh",
  top: 0,
  left: 0,
  right: 0,
}));

export const EllipseBox = styled(Box)(({ theme }) => ({
  background: theme.palette.pinkcolor.main,
  position: "absolute",
  width: "1000px",
  height: "400px",
  bottom: 0,
  right: 0,
  filter: "blur(175px)",
}));
