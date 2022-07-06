import { Box, Typography } from "@mui/material";
import React from "react";
import { ContactBox, EllipseBox, SocialBox, IconBox } from "./Style";
import { TitleBox, Title } from "../about/about-section/Style";
import Image from "next/image";
import Link from "next/link";

function Contact() {
  return (
    <ContactBox padding="60px 0">
      <TitleBox>
        <Title variant="h2">CONTACT ME</Title>
      </TitleBox>
      <SocialBox>
        <Link
          href="https://instagram.com/hayaibrahim95?igshid=YmMyMTA2M2Y="
          passHref
        >
          <IconBox>
            <Image
              src={require("../../public/imgs/insta.png")}
              objectFit="fill"
            />
          </IconBox>
        </Link>
        <Link href="https://www.facebook.com/haya.ibrahim.585112" passHref>
          <IconBox>
            <Image
              src={require("../../public/imgs/facebook.png")}
              objectFit="fill"
            />
          </IconBox>
        </Link>
        <Link href="https://www.linkedin.com/in/haya-ibrahim/" passHref>
          <Box sx={{ marginRight: "30px", cursor: "pointer" }}>
            <Image
              src={require("../../public/imgs/linked-in.png")}
              width="110"
              height="100
        "
            />
          </Box>
        </Link>
        <Link href="www.hayaibra217@gmail.com" passHref>
          <Box sx={{ width: "100px", height: "100px", cursor: "pointer" }}>
            <Image
              src={require("../../public/imgs/mail.png")}
              objectFit="fill"
            />
          </Box>
        </Link>
      </SocialBox>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography color="white" fontWeight="bold">
          Designed by :Haya Ibrahim
        </Typography>
      </Box>
      <EllipseBox />
    </ContactBox>
  );
}

export default Contact;
