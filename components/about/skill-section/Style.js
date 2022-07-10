import { Box, styled, Typography } from "@mui/material";

export const SkillBox = styled(Box)(({theme})=>({
  padding: "60px 0",
  [theme.breakpoints.only("xs")]: {
    width: "120vw",
  },
}));

export const Card = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const CardContent = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "200px",
  width:"200px"
});

export const CardName = styled(Typography)({
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "20px",
});
