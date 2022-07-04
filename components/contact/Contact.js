import { Box , Typography } from "@mui/material";
import React from "react";
import { ContactBox, EllipseBox } from "./Style";
import { TitleBox, Title } from "../about/about-section/Style";
import Image from "next/image";

function Contact() {
  return (
    <ContactBox padding="60px 0">
      <TitleBox>
        <Title variant="h2">CONTACT ME</Title>
      </TitleBox>
      <Box sx={{ display: "flex", justifyContent: "center" , marginBottom:'50px'}}>
        <Box sx={{ width: "100px", height: "100px", marginRight: "30px" }}>
          <Image
            src={require("../../public/imgs/insta.png")}
            objectFit="fill"
          />
        </Box>
        <Box sx={{ width: "100px", height: "100px", marginRight: "30px" }}>
          <Image
            src={require("../../public/imgs/facebook.png")}
            objectFit="fill"
          />
        </Box>
        <Box sx={{ marginRight: "30px" }}>
          <Image
            src={require("../../public/imgs/linked-in.png")}
            width="110"
            height="100
           "
          />
        </Box>
        <Box sx={{ width: "100px", height: "100px" }}>
          <Image src={require("../../public/imgs/mail.png")} objectFit="fill" />
        </Box>
      </Box>
      <Box sx={{display:"flex" , justifyContent:"center"}}>
        <Typography color="white" fontWeight="bold">Designed by :Haya Ibrahim</Typography>
      </Box>
      <EllipseBox />
    </ContactBox>
  );
}

export default Contact;
