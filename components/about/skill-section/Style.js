import { Box, styled, Typography } from "@mui/material";

export const SkillBox = styled(Box)({
  padding: "60px 0",
});

export const Card = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

export const CardContent = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "125px",
  width:"125px"
});

export const CardName = styled(Typography)({
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "20px",
});
