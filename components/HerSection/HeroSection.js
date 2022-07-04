import { Stack, Box, Typography } from "@mui/material";
import React from "react";
import { HeroBox, EllipseBox } from "./Style";
import Image from "next/image";

function HeroSection() {
  return (
    <HeroBox>
      <Stack
        direction="row"
        spacing={2}
        display="flex"
        sx={{
          alignItems: "center",
          height: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <Box sx={{ paddingLeft: "85px" }}>
          <Typography
            variant="h1"
            color="white"
            fontWeight="bold"
            fontSize="100px"
          >
            Hello,
          </Typography>
          <Typography
            variant="h1"
            color="white"
            fontWeight="bold"
            fontSize="100px"
          >
            I am Haya
          </Typography>
          <Typography
            variant="h6"
            color="white"
            sx={{
              letterSpacing: "4.5px",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            Front-End Developer
          </Typography>
        </Box>
        <Box sx={{ zIndex: 1000 }}>
          <Image src={require("../../public/img/girl-1.png")} width="550" />
        </Box>
      </Stack>
      <EllipseBox />
    </HeroBox>
  );
}

export default HeroSection;
