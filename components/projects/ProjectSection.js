import { Box, Typography } from "@mui/material";
import React from "react";
import { EllipseBox, ProjectContent, TitleBox, Title } from "./Style";

function ProjectSection() {
  return (
    <ProjectContent>
      <Box>
        <TitleBox>
          <Title variant="h2" color="white" fontWeight="bold">
            PROJECTS
          </Title>
        </TitleBox>
      </Box>
      <EllipseBox />
    </ProjectContent>
  );
}

export default ProjectSection;
