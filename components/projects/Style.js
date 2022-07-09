import { Box, styled, Typography } from "@mui/material";

export const ProjectContent = styled(Box)(({ theme }) => ({
  background: theme.palette.othercolor.main,
  padding: "60px 0",
  position: "relative",
  height: "80vh",
  top: "200px",
  overflow: "hidden",
}));

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
    backgroundColor: "white",
    left: 0,
    bottom: 0,
  },
});

export const Title = styled(Typography)({
  fontWeight: "bold",
  color: "white",
});

export const EllipseBox = styled(Box)(({ theme }) => ({
  background: theme.palette.pinkcolor.main,
  position: "absolute",
  width: "1000px",
  height: "400px",
  bottom: 0,
  right: 0,
  filter: "blur(175px)",
}));
