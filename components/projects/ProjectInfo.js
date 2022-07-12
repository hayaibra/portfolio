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
  AvatarBox,
} from "./Style";

function ProjectInfo() {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        display: "flex",
        justifyContent: { xs: "center", lg: "space-between" },
      }}
    >
      <Grid item xs={10} sm={8} md={5} lg={6}>
        <ProjectCard elevation={7}>
          <Box width="100%">
            <Image
              src={require("../../public/imgs/project-1.png")}
              objectFit="fill"
              alt="project-1"
            />
          </Box>
          <ProjectCardContent>
            <ProjectCardTitleBox>
              <ProjectCardTitle>PIZZA SPICY</ProjectCardTitle>
            </ProjectCardTitleBox>
            <ProjectCardText>
              <ProjectCardTextContent>
                Responsive website built using next , redux And I used a local
                api to complete the idea ,The project was designed by me, the
                idea ot this project is to order pizza at prices fit with the
                size, additions and quantity required, and it is under
                development I wish you a happy viewing!
              </ProjectCardTextContent>
            </ProjectCardText>
            <ButtonBox>
              <Link href="https://pizza-ordering-shop.vercel.app/" passHref>
                <ViewButton
                  color="pinkcolor"
                  variant="contained"
                  disableElevation
                >
                  <ViewButtonContent>view</ViewButtonContent>
                </ViewButton>
              </Link>
              <Link href="https://github.com/hayaibra/pizza-ordering-shop">
                <AvatarBox>
                  <Image
                    src={require("../../public/imgs/github.png")}
                    objectFit="fill"
                    alt="github"
                  />
                </AvatarBox>
              </Link>
            </ButtonBox>
          </ProjectCardContent>
        </ProjectCard>
      </Grid>
      <Grid item lg={6} xs={10} sm={8} md={5}>
        <ProjectCard elevation={7}>
          <Box width="100%">
            <Image
              src={require("../../public/imgs/project-2.png")}
              objectFit="fill"
              alt="project-2"
            />
          </Box>
          <ProjectCardContent>
            <ProjectCardTitleBox>
              <ProjectCardTitle>NFT</ProjectCardTitle>
            </ProjectCardTitleBox>
            <ProjectCardText>
              <ProjectCardTextContent>
                Responsive website I used Reactjs, React-router,sass, scroll-
                reveal I tried to use dark and light mode The idea of ​​this
                project is a company that sells nft with discounts through
                opensea The site shows my abilities in the skills mentioned
                above I wish you a happy viewing
              </ProjectCardTextContent>
            </ProjectCardText>
            <ButtonBox>
              <Link href="https://hayaibra.github.io/nft-landing/" passHref>
                <ViewButton
                  color="pinkcolor"
                  variant="contained"
                  disableElevation
                >
                  <ViewButtonContent>view</ViewButtonContent>
                </ViewButton>
              </Link>
              <Link href="https://github.com/hayaibra/nft-landing" passHref>
                <AvatarBox>
                  <Image
                    src={require("../../public/imgs/github.png")}
                    objectFit="fill"
                    alt="github"
                  />
                </AvatarBox>
              </Link>
            </ButtonBox>
          </ProjectCardContent>
        </ProjectCard>
      </Grid>
      <Grid item lg={6} xs={10} sm={8} md={5}>
        <ProjectCard elevation={7}>
          <Box width="100%">
            <Image
              src={require("../../public/imgs/project-3.png")}
              objectFit="fill"
              alt="project-3"
            />
          </Box>
          <ProjectCardContent>
            <ProjectCardTitleBox>
              <ProjectCardTitle>TRVL</ProjectCardTitle>
            </ProjectCardTitleBox>
            <ProjectCardText>
              <ProjectCardTextContent>
                Responsive website I used reactjs , react-router, css I tried to
                show my abilities in this project by combining css with react
                The idea is to suggest places to travel with appropriate offers
                I wish you a happy viewing
              </ProjectCardTextContent>
            </ProjectCardText>
            <ButtonBox>
              <Link href="https://react-app-css.vercel.app/" passHref>
                <ViewButton
                  color="pinkcolor"
                  variant="contained"
                  disableElevation
                >
                  <ViewButtonContent>view</ViewButtonContent>
                </ViewButton>
              </Link>
              <Link href="https://github.com/hayaibra/react-app-css" passHref>
                <AvatarBox>
                  <Image
                    src={require("../../public/imgs/github.png")}
                    objectFit="fill"
                    alt="github"
                  />
                </AvatarBox>
              </Link>
            </ButtonBox>
          </ProjectCardContent>
        </ProjectCard>
      </Grid>
      <Grid item lg={6} xs={10} sm={8} md={5}>
        <ProjectCard elevation={7}>
          <Box width="100%">
            <Image
              src={require("../../public/imgs/project-4.png")}
              objectFit="fill"
              alt="project-4"
            />
          </Box>
          <ProjectCardContent>
            <ProjectCardTitleBox>
              <ProjectCardTitle>WEDDING</ProjectCardTitle>
            </ProjectCardTitleBox>
            <ProjectCardText>
              <ProjectCardTextContent>
                Responsive website using html, css This project is the beginning
                of my learning in this field and I designed it myself The idea
                of ​​this project is to organize weddings in time and place I
                wish you a happy viewing
              </ProjectCardTextContent>
            </ProjectCardText>
            <ButtonBox>
              <Link href="https://wedding-opal-one.vercel.app/" passHref>
                <ViewButton
                  color="pinkcolor"
                  variant="contained"
                  disableElevation
                >
                  <ViewButtonContent>view</ViewButtonContent>
                </ViewButton>
              </Link>
              <Link href="https://github.com/hayaibra/wedding" passHref>
                <AvatarBox>
                  <Image
                    src={require("../../public/imgs/github.png")}
                    objectFit="fill"
                    alt="github"
                  />
                </AvatarBox>
              </Link>
            </ButtonBox>
          </ProjectCardContent>
        </ProjectCard>
      </Grid>
      <Grid item lg={6} xs={10} sm={8} md={5}>
        <ProjectCard elevation={7}>
          <Box width="100%">
            <Image
              src={require("../../public/imgs/project-5.png")}
              objectFit="fill"
              alt="project-5"
            />
          </Box>
          <ProjectCardContent>
            <ProjectCardTitleBox>
              <ProjectCardTitle>HAYA</ProjectCardTitle>
            </ProjectCardTitleBox>
            <ProjectCardText>
              <ProjectCardTextContent>
                Responsive website built using reactjs, material-ui Designed to
                learn to combine these two skills And also I used a local api to
                show the idea and display it appropriately The idea of ​​this
                project is similar to facebook and instagram in a simple way, I
                wish you happy watching!
              </ProjectCardTextContent>
            </ProjectCardText>
            <ButtonBox>
              <Link href=" https://hayaibra.github.io/haya-website/" passHref>
                <ViewButton
                  color="pinkcolor"
                  variant="contained"
                  disableElevation
                >
                  <ViewButtonContent>view</ViewButtonContent>
                </ViewButton>
              </Link>
              <Link href="https://github.com/hayaibra/haya-website" passHref>
                <AvatarBox>
                  <Image
                    src={require("../../public/imgs/github.png")}
                    objectFit="fill"
                    alt="github"
                  />
                </AvatarBox>
              </Link>
            </ButtonBox>
          </ProjectCardContent>
        </ProjectCard>
      </Grid>
      <Grid item lg={6} xs={10} sm={8} md={5}>
        <ProjectCard elevation={7}>
          <Box width="100%">
            <Image
              src={require("../../public/imgs/project-6.png")}
              objectFit="fill"
              alt="project-6"
            />
          </Box>
          <ProjectCardContent>
            <ProjectCardTitleBox>
              <ProjectCardTitle>BONDI</ProjectCardTitle>
            </ProjectCardTitleBox>
            <ProjectCardText>
              <ProjectCardTextContent>
                Responsive website built using html, bootstrap I combined these
                two skills through a simple website, the idea of ​​​this project
                is ​graphic design and web design, with the addition of a few
                animations. I wish you a happy viewing!
              </ProjectCardTextContent>
            </ProjectCardText>
            <ButtonBox>
              <Link href="https://01-bendi.vercel.app/" passHref>
                <ViewButton
                  color="pinkcolor"
                  variant="contained"
                  disableElevation
                >
                  <ViewButtonContent>view</ViewButtonContent>
                </ViewButton>
              </Link>
              <Link href="https://github.com/hayaibra/01-Bendi" passHref>
                <AvatarBox>
                  <Image
                    src={require("../../public/imgs/github.png")}
                    objectFit="fill"
                    alt="github"
                  />
                </AvatarBox>
              </Link>
            </ButtonBox>
          </ProjectCardContent>
        </ProjectCard>
      </Grid>
      <Grid item lg={6} xs={10} sm={8} md={5}>
        <ProjectCard elevation={7}>
          <Box width="100%">
            <Image
              src={require("../../public/imgs/project-7.png")}
              objectFit="fill"
              alt="project-7"
            />
          </Box>
          <ProjectCardContent>
            <ProjectCardTitleBox>
              <ProjectCardTitle>FOOD HOUSE</ProjectCardTitle>
            </ProjectCardTitleBox>
            <ProjectCardText>
              <ProjectCardTextContent>
                Responsive website that used html, sass, and a little javascript
                The idea of ​​this project is a website to order food of all
                kinds Through it I learned to use sass well and improve the
                appearance of the code I wish you a happy viewing!
              </ProjectCardTextContent>
            </ProjectCardText>
            <ButtonBox>
              <Link href="https://food-house.vercel.app/" passHref>
                <ViewButton
                  color="pinkcolor"
                  variant="contained"
                  disableElevation
                >
                  <ViewButtonContent>view</ViewButtonContent>
                </ViewButton>
              </Link>
              <Link href="https://github.com/hayaibra/food-house" passHref>
                <AvatarBox>
                  <Image
                    src={require("../../public/imgs/github.png")}
                    objectFit="fill"
                    alt="github"
                  />
                </AvatarBox>
              </Link>
            </ButtonBox>
          </ProjectCardContent>
        </ProjectCard>
      </Grid>
      <Grid item lg={6} xs={10} sm={8} md={5}>
        <ProjectCard elevation={7}>
          <Box width="100%">
            <Image
              src={require("../../public/imgs/project-8.png")}
              objectFit="fill"
              alt="project-8"
            />
          </Box>
          <ProjectCardContent>
            <ProjectCardTitleBox>
              <ProjectCardTitle>REPAIR MARKET</ProjectCardTitle>
            </ProjectCardTitleBox>
            <ProjectCardText>
              <ProjectCardTextContent>
                Responsive website using html, sass, js Through it, I learned to
                use js well to control ideas that need ready frameworks ,The
                idea of ​​the project is an electronics repair shop with
                services and employee skills I wish you a happy viewing!
              </ProjectCardTextContent>
            </ProjectCardText>
            <ButtonBox>
              <Link href="https://repair-market.vercel.app/" passHref>
                <ViewButton
                  color="pinkcolor"
                  variant="contained"
                  disableElevation
                >
                  <ViewButtonContent>view</ViewButtonContent>
                </ViewButton>
              </Link>
              <Link href="https://github.com/hayaibra/repair-market" passHref>
                <AvatarBox>
                  <Image
                    src={require("../../public/imgs/github.png")}
                    objectFit="fill"
                    alt="github"
                  />
                </AvatarBox>
              </Link>
            </ButtonBox>
          </ProjectCardContent>
        </ProjectCard>
      </Grid>
    </Grid>
  );
}

export default ProjectInfo;
