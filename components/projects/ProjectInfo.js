import { Grid, Paper, Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProjectInfo() {
  return (
    <Grid container spacing={3}>
      <Grid item lg={4}>
        <Link href="/" passHref>
          <Paper
            elevation={7}
            sx={{
              backgroundColor: "red",
              borderRadius: "30px",
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
              flexDirection: "column",
            }}
          >
            <Box width="100%">
              <Image
                src={require("../../public/imgs/project-1.png")}
                objectFit="fill"
              />
            </Box>
            <Box sx={{ padding: "25px" }}>
              <Box sx={{ marginBottom: "20px" }}>
                <Typography color="white" fontWeight="bold" fontSize="25px">
                  PIZZA SPICY
                </Typography>
              </Box>
              <Box sx={{ width: "80%", marginBottom:"20px" }}>
                <Typography
                  color="white"
                  sx={{ lineHeight: "1.6", fontSize: "19px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.{" "}
                </Typography>
              </Box>
              <Box sx={{display:'flex', justifyContent:"flex-end"}} >
                <Button color="pinkcolor" variant="contained">
                  <Typography color="white" sx={{textTransform:"lowercase" , fontWeight:"bold"}}>view</Typography>
                </Button>
              </Box>
            </Box>
          </Paper>
        </Link>
      </Grid>
    </Grid>
  );
}

export default ProjectInfo;
