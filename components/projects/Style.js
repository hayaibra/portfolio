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

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: "white",
  [theme.breakpoints.only("xs")]: {
    fontSize: "36px",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "50px",
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

export const ProjectCard = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.bluecolor.main,
  borderRadius: "30px",
  display: "flex",
  justifyContent: "center",
  overflow: "hidden",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    marginBottom: "25px",
  },
  [theme.breakpoints.up("sm")]: {
    marginBottom: "45px",
  },
  [theme.breakpoints.up("md")]: {
    marginRight: "45px",
  },
}));

export const ProjectCardContent = styled(Box)({
  padding: "25px",
});

export const ProjectCardTitleBox = styled(Box)(({ theme }) => ({
  marginBottom: "50px",
  [theme.breakpoints.only("xs")]: {
    marginBottom: "25px",
  },
}));

export const ProjectCardTitle = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: "bold",
  fontSize: "30px",
  [theme.breakpoints.only("xs")]: {
    fontSize: "24px",
  },
}));

export const ProjectCardText = styled(Box)(({ theme }) => ({
  width: "80%",
  marginBottom: "50px",
  [theme.breakpoints.only("xs")]: {
    marginBottom: "25px",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const ProjectCardTextContent = styled(Typography)(({ theme }) => ({
  color: "white",
  lineHeight: "1.6",
  fontSize: "20px",
  [theme.breakpoints.only("xs")]: {
    fontSize: "16px",
  },
}));

export const ButtonBox = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
});

export const ViewButton = styled(Button)(({ theme }) => ({
  borderRadius: "20px",
}));

export const ViewButtonContent = styled(Typography)(({ theme }) => ({
  color: "white",
  textTransform: "lowercase",
  fontWeight: "bold",
  fontSize: "20px",
  [theme.breakpoints.only("xs")]: {
    fontSize: "16px",
  },
}));

export const AvatarBox = styled(Box)(({ theme }) => ({
  marginLeft: "15px",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  [theme.breakpoints.only("xs")]: {
    width: "30px",
    height: "30px",
    marginLeft: "10px",
  },
}));
