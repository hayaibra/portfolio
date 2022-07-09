import { Box, Typography } from "@mui/material";
import React from "react";
import { ProjectContent } from "./Style";

function ProjectSection() {
  return (
    <ProjectContent>
      <Box>
        <Box width="fit-content">
          <Typography variant="h2" color="white" fontWeight="bold">
            PROJECTS
          </Typography>
        </Box>
      </Box>
    </ProjectContent>
  );
}

export default ProjectSection;
