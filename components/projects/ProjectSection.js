import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { EllipseBox, ProjectContent, TitleBox, Title } from "./Style";
import ProjectInfo from "./ProjectInfo";

function ProjectSection() {
  return (
    <ProjectContent>
      <Box>
        <TitleBox>
          <Title variant="h2" color="white" fontWeight="bold">
            PROJECTS
          </Title>
        </TitleBox>
        <Box >
          <Container>
            <ProjectInfo />
          </Container>
        </Box>
      </Box>
      <EllipseBox />
    </ProjectContent>
  );
}

export default ProjectSection;
