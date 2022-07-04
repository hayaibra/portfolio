import { Box, Typography } from "@mui/material";
import React from "react";
import { AboutBox, TitleBox } from "./Style";

function About() {
  return (
    <AboutBox>
      <TitleBox>
        <Typography variant="h2" fontWeight="bold">
          ABOUT ME
        </Typography>
      </TitleBox>
    </AboutBox>
  );
}

export default About;
