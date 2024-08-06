import { Box, styled, Typography } from "@mui/material";

export const ContactBox = styled(Box)(({ theme }) => ({
  background: theme.palette.othercolor.main,
  position: "relative",
 
  [theme.breakpoints.only("xs")]: {
    width: "120vw",
  },
}));

export const EllipseBox = styled(Box)(({ theme }) => ({
  background: theme.palette.pinkcolor.main,
  position: "absolute",
  width: "500px",
  height: "100px",
  bottom: 0,
  right: 0,
  filter: "blur(127px)",
}));

export const TitleBox = styled(Box)(({ theme }) => ({
  width: "fit-content",
  position: "relative",
  left: "50%",
  transform: "translateX(-50%)",
  marginBottom: "100px",
  display: "flex",
  justifyContent: "center",

  "&::after": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "4px",
    backgroundColor: "white",
    left: 0,
    bottom: 0,
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  [theme.breakpoints.down("md")]: {
    fontSize: "35px",
  },
}));

export const IconBox = styled(Typography)(({ theme }) => ({
  height: "55px",
  width: "55px",
  borderRadius: "50%",
  backgroundColor: theme.palette.pinkcolor.main,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "20px",
}));
