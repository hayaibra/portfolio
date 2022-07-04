import { Box, styled, Stack, Typography } from "@mui/material";

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

export const HeroContent = styled(Stack)({
  alignItems: "center",
  height: "100%",
  justifyContent: "space-evenly",
  display: "flex",
});

export const InfoBox = styled(Box)({
  paddingLeft: "85px",
});

export const TitleInfoBox = styled(Typography)({
  color: "white",
  fontWeight: "bold",
  fontSize: "90px",
});

export const CareerInfo = styled(Typography)({
  color: "white",
  letterSpacing: "4.5px",
  fontSize: "22px",
  fontWeight: "bold",
});
