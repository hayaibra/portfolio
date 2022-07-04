import { Box } from "@mui/material";
import React from "react";
import {
  HeroBox,
  EllipseBox,
  HeroContent,
  InfoBox,
  TitleInfoBox,
  CareerInfo,
  ImageBox,
  ArrowBox
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
        <ImageBox>
          <Image src={require("../../public/img/girl-1.png")} width="550" />
        </ImageBox>
      </HeroContent>
      <ArrowBox>
        <Image src={require("../../public/img/arrow.png")} />
      </ArrowBox>
      <EllipseBox />
    </HeroBox>
  );
}

export default HeroSection;
