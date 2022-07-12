import React from "react";
import { Grid } from "@mui/material";
import Image from "next/image";
import { Card, CardContent, CardName } from "./Style";

function SkillCard() {
  return (
    <Grid container spacing={10}>
    <Grid item lg={3} xs={6} md={4} >
      <Card>
        <CardContent>
          <Image
            src={require(`../../../public/imgs/github.png`)}
            width="100"
            height="100"
          />
        </CardContent>
        <CardName>github</CardName>
      </Card>
    </Grid>
    <Grid item lg={3} xs={6} md={4}>
      <Card>
        <CardContent>
          <Image
            src={require(`../../../public/imgs/js.png`)}
            width="100"
            height="100"
          />
        </CardContent>
        <CardName>JavaScript</CardName>
      </Card>
    </Grid>
    <Grid item lg={3} xs={6} md={4}>
      <Card>
        <CardContent>
          <Image
            src={require(`../../../public/imgs/html.png`)}
            width="120"
            height="140"
          />
        </CardContent>
        <CardName>HTML</CardName>
      </Card>
    </Grid>
    <Grid item lg={3} xs={6} md={4}>
      <Card>
        <CardContent>
          <Image
            src={require(`../../../public/imgs/css.png`)}
            width="165"
            height="160"
          />
        </CardContent>
        <CardName>CSS</CardName>
      </Card>
    </Grid>
    <Grid item lg={3} xs={6} md={4}>
      <Card>
        <CardContent>
          <Image
            src={require(`../../../public/imgs/react.png`)}
            width="120"
            height="120"
          />
        </CardContent>
        <CardName>React</CardName>
      </Card>
    </Grid>
    <Grid item lg={3} xs={6} md={4}>
      <Card>
        <CardContent>
          <Image
            src={require(`../../../public/imgs/next.png`)}
            width="160"
            height="140"
          />
        </CardContent>
        <CardName>NEXT</CardName>
      </Card>
    </Grid>
    <Grid item lg={3} xs={6} md={4}>
      <Card>
        <CardContent>
          <Image
            src={require(`../../../public/imgs/npm.png`)}
            width="120"
          />
        </CardContent>
        <CardName>npm</CardName>
      </Card>
    </Grid>
    <Grid item lg={3} xs={6} md={4}>
      <Card>
        <CardContent>
          <Image
            src={require(`../../../public/imgs/oop.png`)}
            width="130"
            height="100"
          />
        </CardContent>
        <CardName>OOP</CardName>
      </Card>
    </Grid>
    <Grid item lg={3} xs={6} md={4}>
      <Card>
        <CardContent>
          <Image
            src={require(`../../../public/imgs/redux.png`)}
            width="120"
            height="120"
          />
        </CardContent>
        <CardName>Redux</CardName>
      </Card>
    </Grid>
    <Grid item lg={3} xs={6} md={4}>
      <Card>
        <CardContent>
          <Image
            src={require(`../../../public/imgs/material-ui.png`)}
            width="125"
            height="125"
          />
        </CardContent>
        <CardName>Material UI</CardName>
      </Card>
    </Grid>
    <Grid item lg={3} xs={6} md={4}>
      <Card>
        <CardContent>
          <Image
            src={require(`../../../public/imgs/sass.png`)}
            width="150"
            height="130"
          />
        </CardContent>
        <CardName>Sass</CardName>
      </Card>
    </Grid>
    <Grid item lg={3} xs={6} md={4}>
      <Card>
        <CardContent>
          <Image
            src={require(`../../../public/imgs/bootstrap.png`)}
            width="130"
            height="120"
          />
        </CardContent>
        <CardName>Bootstrap</CardName>
      </Card>
    </Grid>
    <Grid item lg={3} xs={6} md={4}>
      <Card>
        <CardContent>
          <Image
            src={require(`../../../public/imgs/es6.png`)}
            width="130"
            height="120"
          />
        </CardContent>
        <CardName>ES6</CardName>
      </Card>
    </Grid>
    <Grid item lg={3} xs={6} md={4}>
      <Card>
        <CardContent>
          <Image
            src={require(`../../../public/imgs/git.png`)}
            width="130"
            height="130"
          />
        </CardContent>
        <CardName>Git</CardName>
      </Card>
    </Grid>
    <Grid item lg={3} xs={6} md={4}>
      <Card>
        <CardContent>
          <Image
            src={require(`../../../public/imgs/api.png`)}
            width="130"
            height="130"
          />
        </CardContent>
        <CardName>API</CardName>
      </Card>
    </Grid>
  </Grid>
   
  );
}

export default SkillCard;
