import { Grid, Paper, Box, Typography, Button, Avatar } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  ProjectCard,
  ProjectCardContent,
  ProjectCardText,
  ProjectCardTextContent,
  ProjectCardTitle,
  ProjectCardTitleBox,
  ButtonBox,
  ViewButton,
  ViewButtonContent,
  AvatarBox
} from "./Style";

function ProjectInfo() {
  return (
    <Grid container spacing={3}>
      <Grid item lg={6}>
        <ProjectCard elevation={7}>
          <Box width="100%">
            <Image
              src={require("../../public/imgs/project-1.png")}
              objectFit="fill"
            />
          </Box>
          <ProjectCardContent>
            <ProjectCardTitleBox>
              <ProjectCardTitle>PIZZA SPICY</ProjectCardTitle>
            </ProjectCardTitleBox>
            <ProjectCardText>
              <ProjectCardTextContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.{" "}
              </ProjectCardTextContent>
            </ProjectCardText>
            <ButtonBox>
              <Link href="https://mui.com/material-ui/react-paper/" passHref>
                <ViewButton
                  color="pinkcolor"
                  variant="contained"
                  disableElevation
                >
                  <ViewButtonContent>view</ViewButtonContent>
                </ViewButton>
              </Link>
              <AvatarBox>
                <Image
                  src={require("../../public/imgs/github.png")}
                  objectFit="fill"
                />
              </AvatarBox>
            </ButtonBox>
          </ProjectCardContent>
        </ProjectCard>
      </Grid>
      <Grid item lg={6}>
        <ProjectCard elevation={7}>
          <Box width="100%">
            <Image
              src={require("../../public/imgs/project-2.png")}
              objectFit="fill"
            />
          </Box>
          <ProjectCardContent>
            <ProjectCardTitleBox>
              <ProjectCardTitle>NFT</ProjectCardTitle>
            </ProjectCardTitleBox>
            <ProjectCardText>
              <ProjectCardTextContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.{" "}
              </ProjectCardTextContent>
            </ProjectCardText>
            <ButtonBox>
              <Link href="https://mui.com/material-ui/react-paper/" passHref>
                <ViewButton
                  color="pinkcolor"
                  variant="contained"
                  disableElevation
                >
                  <ViewButtonContent>view</ViewButtonContent>
                </ViewButton>
              </Link>
              <AvatarBox>
                <Image
                  src={require("../../public/imgs/github.png")}
                  objectFit="fill"
                />
              </AvatarBox>
            </ButtonBox>
          </ProjectCardContent>
        </ProjectCard>
      </Grid>
    </Grid>
  );
}

export default ProjectInfo;
