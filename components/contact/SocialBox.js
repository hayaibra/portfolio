import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

function SocialBox() {
  return (
    <Grid container spacing={10} sx={{paddingLeft:{xs:"20px", sm:"0"}}}>
      <Grid item lg={6} md={6} sm={10}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Box
            sx={{ marginRight: "20px", marginLeft: { xs: "0", sm: "30px" } }}
          >
            <Image
              src={require("../../public/imgs/INSTA.png")}
              width="90"
              height="90"
              alt="insta"
            />
          </Box>
          <Typography variant="h6" color="white" fontSize="25px">
            hayaibrahim95
          </Typography>
        </Box>
      </Grid>
      <Grid item lg={6} md={6} sm={10}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Box sx={{ marginRight: "20px" }}>
            <Image
              src={require("../../public/imgs/FACEBOOK.png")}
              width="87"
              height="87"
              alt="facebook"
            />
          </Box>
          <Typography variant="h6" color="white" fontSize="25px">
            Haya ibrahim
          </Typography>
        </Box>
      </Grid>
      <Grid item lg={6} md={6} sm={10}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: { xs: "20px", md: "0" },
          }}
        >
          <Box sx={{ marginRight: "20px" }}>
            <Image
              src={require("../../public/imgs/linked-in.png")}
              width="107"
              height="90"
              alt="linked-in"
            />
          </Box>
          <Typography variant="h6" color="white" fontSize="25px">
            haya ibrahim
          </Typography>
        </Box>
      </Grid>
      <Grid item lg={6} md={6} sm={10}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{ marginRight: "20px", marginLeft: { xs: "0", sm: "85px" } }}
          >
            <Image
              src={require("../../public/imgs/MAIL.png")}
              width="90"
              height="90"
              alt="mail"
            />
          </Box>
          <Typography variant="h6" color="white" fontSize="25px">
            hayaibra217@gmail
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SocialBox;
