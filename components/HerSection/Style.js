import { Box, styled, Stack, Typography, keyframes } from "@mui/material";

export const HeroBox = styled(Box)(({ theme }) => ({
  background: theme.palette.othercolor.main,
  position: "relative",
  width: "100%",
  height: "100vh",
  top: 0,
  left: 0,
  right: 0,
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    height: "127vh",
    // width: "120vw",
  },
  [theme.breakpoints.only("xs")]: {
    width: "120vw",
  },
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

export const InfoBox = styled(Box)(({ theme }) => ({
  paddingLeft: "145px",
  zIndex: 1000,
  [theme.breakpoints.only("xs")]: {
    marginTop: "135px",
    paddingLeft: "30px",
  },
  [theme.breakpoints.only("sm")]: {
    marginTop: "40px",
    // paddingLeft: "30px",
  },
}));

export const TitleInfoBox = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: "bold",
  fontSize: "114px",
  [theme.breakpoints.only("xs")]: {
    fontSize: "50px",
  },
}));

export const CareerInfo = styled(Typography)(({ theme }) => ({
  color: "white",
  letterSpacing: "4.5px",
  fontSize: "44px",
  fontWeight: "bold",
  [theme.breakpoints.only("xs")]: {
    fontSize: "25px",
  },
}));

export const ImageBox = styled("div")(({ theme }) => ({
  zIndex: 1000,
  width: "600px",
  height: "400px",
  marginLeft: theme.spacing.marginLeft,
  [theme.breakpoints.only("xs")]: {
    width: "400px",
    height: "400px",
  },
  [theme.breakpoints.only("sm")]: {
    marginBottom: "95px",
  },
}));

const upDown = keyframes`100% {transform :translateY(50px)}`;

export const ArrowBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "10%",
  // left: "50%",
  zIndex: 1000,
  width: "100%",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  "&:hover": {
    animation: `${upDown} 0.5s both  infinite linear`,
  },
  [theme.breakpoints.only("sm")]: {
    bottom: "4%",
  },
}));
