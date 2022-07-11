import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { ContactBox, EllipseBox, IconBox, TitleBox, Title } from "./Style";
import SocialBox from "./SocialBox";

import Image from "next/image";
import Link from "next/link";

function Contact() {
  return (
    <ContactBox padding="60px 0">
      <TitleBox>
        <Title variant="h2" color="white">
          CONTACT ME
        </Title>
      </TitleBox>
      <Container>
        <SocialBox />
      </Container>
      
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%", marginTop:'60px' }}>
        <Typography color="white" fontWeight="bold">
          Designed by :Haya Ibrahim
        </Typography>
        </Box>
      <EllipseBox />
    </ContactBox>
  );
}

export default Contact;
