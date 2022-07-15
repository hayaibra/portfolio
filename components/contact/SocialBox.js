import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { IconBox } from "./Style";

function SocialBox() {
  return (
    <Grid container spacing={1}>
      <Grid item lg={6} md={6} sm={10} xs={10}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Box
            sx={{
              height: "55px",
              width: "55px",
              borderRadius: "50%",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "20px",
            }}
          >
            <InstagramIcon color="pinkcolor" fontSize="large" />
          </Box>
          <Typography variant="h6" color="white" fontSize="20px">
            hayaibrahim95
          </Typography>
        </Box>
      </Grid>
      <Grid item lg={6} md={6} sm={10} xs={10}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <IconBox sx={{ marginLeft: { xs: "-14px", md: "0" } }}>
            <FaFacebookF color="white" fontSize="30px" />
          </IconBox>
          <Typography variant="h6" color="white" fontSize="20px">
            Haya ibrahim
          </Typography>
        </Box>
      </Grid>
      <Grid item lg={6} md={6} sm={10} xs={10}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: { xs: "20px", md: "0" },
          }}
        >
          <IconBox sx={{ marginLeft: "-16px" }}>
            <FaLinkedinIn color="white" fontSize="30px" />
          </IconBox>
          <Typography variant="h6" color="white" fontSize="20px">
            haya ibrahim
          </Typography>
        </Box>
      </Grid>
      <Grid item lg={6} md={6} sm={10} xs={10}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconBox sx={{ marginLeft: { xs: "50px", md: "63px" } }}>
            <MailOutlineIcon sx={{ color: "white" }} fontSize="large" />
          </IconBox>
          <Typography variant="h6" color="white" fontSize="20px">
            hayaibra217@gmail
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SocialBox;
