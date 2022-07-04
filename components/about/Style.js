import { Box, styled } from "@mui/material";

export const AboutBox = styled(Box)({
  padding: "60px 0",
});

export const TitleBox = styled(Box)({
  textAlign: "center",
  width: "fit-content",
  position: "relative",
  left: "50%",
  transform: "translateX(-50%)",

  '&::after': {
    content:'""',
    position: "absolute",
    width: "100%",
    height: "4px",
    backgroundColor: "black",
    left: 0,
    bottom: 0,
  },
});
