import { Container} from "@mui/material";
import React from "react";
import { SkillBox } from "./Style";
import { TitleBox, Title } from "../about-section/Style";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <SkillBox >
      <TitleBox>
        <Title variant="h2">Skills</Title>
      </TitleBox>
      <Container maxWidth="lg">
        <SkillCard/>
      </Container>
    </SkillBox>
  );
}

export default Skills;
