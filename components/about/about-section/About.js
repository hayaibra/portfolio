import { Box, Stack } from "@mui/material";
import React from "react";
import {
  AboutBox,
  Title,
  TitleBox,
  ImageBox,
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
      <Stack direction="row" spacing={2}>
        <Box>
          <Image src={require("../../../public/imgs/girl-2.png")} width="800" height="500"/>
        </Box>
        <Box sx={{display:"flex" , justifyContent:"center"}}>
          <AboutContent>
            <AboutText sx={{ marginBottom: "50px" }}>
              I'm a junior developer who has recently started my journey as a
              web developer.
            </AboutText>
            <AboutText sx={{ marginBottom: "50px" }}>
              I'm a self-motivated learner with strong organisation, time
              management & communication skills.
            </AboutText>
            <AboutText>
              I'm able to work independently & collaboratively in a team with a
              meticulous attention to detail.
            </AboutText>
          </AboutContent>
        </Box>
      </Stack>
    </AboutBox>
  );
}

export default About;
