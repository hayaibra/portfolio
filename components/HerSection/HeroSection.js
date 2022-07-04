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
  ArrowBox,
} from "./Style";
import Image from "next/image";
import Link from "next/link";

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
          <Image src={require("../../public/imgs/girl-1.png")} width="600" height="400" />
        </ImageBox>
      </HeroContent>
      <ArrowBox>
        <a href="#about">
          <Image src={require("../../public/imgs/arrow.png")} />
        </a>
      </ArrowBox>
      <EllipseBox />
    </HeroBox>
  );
}

export default HeroSection;
