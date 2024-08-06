import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { ContactBox, EllipseBox, TitleBox, Title } from "./Style";
import SocialBox from "./SocialBox";


function Contact() {
  return (
    <ContactBox padding={{xs: "60px 20px", sm:"60px 40px"}}>
      <TitleBox>
        <Title variant="h2" color="white">
          CONTACT ME
        </Title>
      </TitleBox>
      <Container maxWidth="lg" sx={{display:"flex", justifyContent:"center"}}>
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
