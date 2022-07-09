import { Box, Typography } from "@mui/material";
import React from "react";
import { EllipseBox, ProjectContent , TitleBox } from "./Style";

function ProjectSection() {
  return (
    <ProjectContent>
      <Box>
        <TitleBox>
          <Typography variant="h2" color="white" fontWeight="bold">
            PROJECTS
          </Typography>
        </TitleBox>
      </Box>
      <EllipseBox/>
    </ProjectContent>
  );
}

export default ProjectSection;
