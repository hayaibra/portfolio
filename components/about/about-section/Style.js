import { Box, styled, Typography } from "@mui/material";

export const AboutBox = styled(Box)(({ theme }) => ({
  padding: "60px 0",
  [theme.breakpoints.only("xs")]: {
    width: "120vw",
  },
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
    backgroundColor: "black",
    left: 0,
    bottom: 0,
  },
}));

export const Title = styled(Typography)({
  fontWeight: "bold",
});

export const ImageBox = styled(Box)({
  marginRight: "300px",
});

export const AboutContent = styled(Box)(({ theme }) => ({
  width: "50%",
  [theme.breakpoints.only("xs")]: {
    width: "100%",
    textAlign: "center",
  },
}));

export const AboutText = styled(Typography)({
  fontSize: "28px",
  fontWeight: "bold",
});

export const TextBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.only("xs")]: {
    padding: "30px",
  },
}));
