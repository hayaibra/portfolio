import { Box, Typography } from "@mui/material";
import React from "react";
import {AboutBox} from "./Style";

function About() {
  return (
    <AboutBox>
      <Box
        sx={{
          textAlign: "center",
          width: "fit-content",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Typography variant="h2" fontWeight="bold">
          ABOUT ME
        </Typography>
      </Box>
    </AboutBox>
  );
}

export default About;
