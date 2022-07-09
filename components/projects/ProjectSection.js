import { Box, Typography } from "@mui/material";
import React from "react";
import { Title, TitleBox } from "../about/about-section/Style";

function ProjectSection() {
  return (
    <Box
      sx={{
        padding: "60px 0",
        position: "relative",
        backgroundColor: "red",
        height: "80vh",
        top: "200px",
      }}
    >
      <Box>
        <Box>
          <Typography>PROJECTS</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectSection;
