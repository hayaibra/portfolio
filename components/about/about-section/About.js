import { Box, Stack } from "@mui/material";
import React from "react";
import {
  AboutBox,
  Title,
  TitleBox,
  AboutContent,
  AboutText,
} from "./Style";
import Image from "next/image";

function About() {
  return (
    <AboutBox>
      <TitleBox>
        <Title variant="h2">ABOUT ME</Title>
      </TitleBox>
      <Stack
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
        spacing={2}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "49%", lg:"50%" },
            height: { xs: "300px", sm: "0", md: "400px", lg: "500px" },
            padding: { xs: "25px", md: "80px 0 0 0 " },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src={require("../../../public/imgs/girl-2.png")}
            alt="girl-2"
            objectFit="fill"
          />
        </Box>
          <AboutContent>
            <AboutText sx={{ marginBottom: "50px" }}>
              I&apos;m Haya Ibrahim, a passionate front-end developer with 4 years of experience building dynamic and user-friendly web applications. I specialize in HTML, CSS, JavaScript, and modern frameworks like React. My journey in front-end development has been driven by a love for crafting visually appealing and highly functional user interfaces that deliver seamless experiences across all devices.
            </AboutText>
            <AboutText sx={{ marginBottom: "50px" }}>
            Throughout my career, I&apos;ve had the pleasure of working on diverse projects, from e-commerce platforms to interactive web applications, always with a focus on performance optimization and responsive design. I thrive on collaborating with cross-functional teams, including UX/UI designers and back-end developers, to bring innovative ideas to life.
            </AboutText>
            <AboutText>
            When I&apos;m not coding, you can find me exploring the latest industry trends, constantly improving my skillset to stay at the forefront of front-end development.
            </AboutText>
            <AboutText>
            Welcome to my portfolio, and I look forward to sharing my work with you!
            </AboutText>
          </AboutContent>
       
      </Stack>
    </AboutBox>
  );
}

export default About;
