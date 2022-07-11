import { Toolbar, styled, Box } from "@mui/material";

export const ToolbarBox = styled(Toolbar)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  height: "200px",
});

export const ImageBox = styled(Box)({
  display: "flex",
  alignItems: "flex-end",
  padding: "20px",
  width: "300px",
  height: "150px",
});

export const LinkBox = styled("a")({
  color: "white",
  textDecoration: "none",
  display: "flex",
  fontSize: "25px",
  padding: "28px 50px ",
  height: "100px",
  alignItems: "flex-end",
});

export const Sidebar = styled(Box)(({ theme }) => ({
  width: "50%",
  position: "absolute",
  backgroundColor: theme.palette.othercolor.main,
  top: "0",
  height: "100vh",
  right: "0",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  overflow: "hidden",
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  [theme.breakpoints.only("xs")]: {
    height: "127vh",
    width: "60%",
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

export const CloseBox = styled(Box)({
  position: "absolute",
  top: "20px",
  right: "20px",
  cursor: "pointer",
});

export const LinkMobileBox = styled("a")({
  color: "white",
  textDecoration: "none",
  display: "flex",
  fontSize: "30px",
  padding: "28px 50px ",
  height: "100px",
  alignItems: "flex-end",
  fontWeight: "bold",
});
