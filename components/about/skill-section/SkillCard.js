import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Image from "next/image";
import { Card, CardContent, CardName } from "./Style";

function SkillCard({ skill }) {
  return (
    <Grid item lg={3}>
      <Card>
        <CardContent>
          <Image
            src={require(`../../../public/imgs/${skill.img}`)}
            width="130"
          />
        </CardContent>
        <CardName>{skill.name}</CardName>
      </Card>
    </Grid>
  );
}

export default SkillCard;
