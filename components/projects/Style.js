import { Box, Button, Paper, styled, Typography } from "@mui/material";

export const ProjectContent = styled(Box)(({ theme }) => ({
  background: theme.palette.othercolor.main,
  padding: "60px 0",
  position: "relative",
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

export const ProjectCard = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.bluecolor.main,
  borderRadius: "30px",
  display: "flex",
  justifyContent: "center",
  overflow: "hidden",
  flexDirection: "column",
}));

export const ProjectCardContent = styled(Box)({
  padding: "25px",
});

export const ProjectCardTitleBox = styled(Box)({
  marginBottom: "50px",
});

export const ProjectCardTitle = styled(Typography)({
  color: "white",
  fontWeight: "bold",
  fontSize: "30px",
});

export const ProjectCardText = styled(Box)({
  width: "80%",
  marginBottom: "50px",
});

export const ProjectCardTextContent = styled(Typography)({
  color: "white",
  lineHeight: "1.6",
  fontSize: "20px",
});

export const ButtonBox = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
});

export const ViewButton = styled(Button)({
  borderRadius: "20px",
});

export const ViewButtonContent = styled(Typography)({
  color: "white",
  textTransform: "lowercase",
  fontWeight: "bold",
  fontSize: "20px",
});

export const AvatarBox = styled(Box)({
  marginLeft: "15px",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
});
