import { Box, styled } from "@mui/material";

export const ProjectContent = styled(Box)(({ theme }) => ({
  background: theme.palette.othercolor.main,
  padding: "60px 0",
  position: "relative",
  height: "80vh",
  top: "200px",
  overflow: "hidden",
}));
