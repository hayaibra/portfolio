import { Box, styled, Typography } from "@mui/material";

export const AboutBox = styled(Box)({
  padding: "60px 0",
});

export const TitleBox = styled(Box)({
  textAlign: "center",
  width: "fit-content",
  position: "relative",
  left: "50%",
  transform: "translateX(-50%)",
  marginBottom: "100px",

  "&::after": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "4px",
    backgroundColor: "black",
    left: 0,
    bottom: 0,
  },
});

export const Title = styled(Typography)({
  fontWeight: "bold",
});

export const ImageBox = styled(Box)({
  marginRight: "300px",
});

export const AboutContent = styled(Box)({
  width: "50%",
});

export const AboutText = styled(Typography)({
  fontSize: "22px",
  fontWeight: "bold",
  
});
