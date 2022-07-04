import { Stack, Box, Typography } from "@mui/material";
import React from "react";
import {
  HeroBox,
  EllipseBox,
  HeroContent,
  InfoBox,
  TitleInfoBox,
  CareerInfo,
} from "./Style";
import Image from "next/image";

function HeroSection() {
  return (
    <HeroBox>
      <HeroContent direction="row" spacing={2}>
        <InfoBox>
          <TitleInfoBox variant="h1">Hello,</TitleInfoBox>
          <TitleInfoBox variant="h1">I am Haya</TitleInfoBox>
          <CareerInfo variant="h6">Front-End Developer</CareerInfo>
        </InfoBox>
        <Box sx={{ zIndex: 1000 }}>
          <Image src={require("../../public/img/girl-1.png")} width="550" />
        </Box>
      </HeroContent>
      <EllipseBox />
    </HeroBox>
  );
}

export default HeroSection;
