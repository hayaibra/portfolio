import { Container, Grid, Box, Typography } from "@mui/material";
import React from "react";
import { SkillBox } from "./Style";
import { TitleBox, Title } from "../about-section/Style";
import Image from "next/image";
import SkillCard from "./SkillCard";

function Skills() {
  const skills = [
    {
      id: 1,
      img: "github.png",
      name: "github",
    },
    {
      id: 2,
      img: "js.png",
      name: "JavaScript",
    },
    {
      id: 3,
      img: "html.png",
      name: "HTML",
    },
    {
      id: 4,
      img: "css.png",
      name: "CSS",
    },
    {
      id: 5,
      img: "react.png",
      name: "React",
    },
    {
      id: 6,
      img: "next.png",
      name: "NEXT",
    },
    {
      id: 7,
      img: "npm.png",
      name: "npm",
    },
    {
      id: 8,
      img: "oop.png",
      name: "OOP",
    },
    {
      id: 9,
      img: "redux.png",
      name: "Redux",
    },
    {
      id: 10,
      img: "material-ui.png",
      name: "Material-UI",
    },
    {
      id: 11,
      img: "sass.png",
      name: "Sass",
    },
    {
      id: 12,
      img: "bootstrap.png",
      name: "Bootstrap",
    },
    {
      id: 13,
      img: "es6.png",
      name: "ES6",
    },
    {
      id: 14,
      img: "git.png",
      name: "Git",
    },
    {
      id: 15,
      img: "api.png",
      name: "API",
    },
  ];
  return (
    <SkillBox padding="60px 0">
      <TitleBox>
        <Title variant="h2">Skills</Title>
      </TitleBox>
      <Container>
        <Grid container spacing={10}>
          {skills.map((skill) => (
            // console.log(skill.img)
            <SkillCard key={skill.id} skill={skill}/>
          ))}
        </Grid>
      </Container>
    </SkillBox>
  );
}

export default Skills;
