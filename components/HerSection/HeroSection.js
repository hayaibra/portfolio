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

function HeroSection() {
  return (
    <HeroBox>
      <HeroContent
        direction="row"
        spacing={2}
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <InfoBox>
          <TitleInfoBox variant="h1">Hello,</TitleInfoBox>
          <TitleInfoBox variant="h1">I am Haya</TitleInfoBox>
          <CareerInfo variant="h6">Front-End Developer</CareerInfo>
        </InfoBox>
        <ImageBox>
          <Image
            src={require("../../public/imgs/girl-1.png")}
            objectFit="fill"
            alt="girl-1"
          />
        </ImageBox>
      </HeroContent>
      <ArrowBox>
        <a
          href="#about"
          style={{
            width: { sm: "30px", md: "50px" },
            height: { sm: "30px", md: "50px" },
          }}
        >
          <Image
            src={require("../../public/imgs/arrow.png")}
            objectFit="fill"
            alt="arrow"
          />
        </a>
      </ArrowBox>
      <EllipseBox />
    </HeroBox>
  );
}

export default HeroSection;
