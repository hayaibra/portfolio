import React from "react";
import { Grid } from "@mui/material";
import Image from "next/image";
import { Card, CardContent, CardName } from "./Style";

function SkillCard() {
  return (
    <Grid container spacing={10}>
    <Grid item lg={3} xs={6}>
      <Card>
        <CardContent>
          <Image
            src={require(`../../../public/imgs/github.png`)}
            width="120"
            height="120"
          />
        </CardContent>
        <CardName>github</CardName>
      </Card>
    </Grid>
    <Grid item lg={3} xs={6}>
      <Card>
        <CardContent>
          <Image
            src={require(`../../../public/imgs/js.png`)}
            width="120"
            height="120"
          />
        </CardContent>
        <CardName>JavaScript</CardName>
      </Card>
    </Grid>
    <Grid item lg={3} xs={6}>
      <Card>
        <CardContent>
          <Image
            src={require(`../../../public/imgs/html.png`)}
            width="120"
            height="150"
          />
        </CardContent>
        <CardName>HTML</CardName>
      </Card>
    </Grid>
    <Grid item lg={3} xs={6}>
      <Card>
        <CardContent>
          <Image
            src={require(`../../../public/imgs/css.png`)}
            width="170"
            height="160"
          />
        </CardContent>
        <CardName>CSS</CardName>
      </Card>
    </Grid>
    <Grid item lg={3} xs={6}>
      <Card>
        <CardContent>
          <Image
            src={require(`../../../public/imgs/react.png`)}
            width="150"
            height="150"
          />
        </CardContent>
        <CardName>React</CardName>
      </Card>
    </Grid>
    <Grid item lg={3} xs={6}>
      <Card>
        <CardContent>
          <Image
            src={require(`../../../public/imgs/next.png`)}
            width="160"
            height="150"
          />
        </CardContent>
        <CardName>NEXT</CardName>
      </Card>
    </Grid>
    <Grid item lg={3} xs={6}>
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
    <Grid item lg={3} xs={6}>
      <Card>
        <CardContent>
          <Image
            src={require(`../../../public/imgs/oop.png`)}
            width="150"
            height="120"
          />
        </CardContent>
        <CardName>OOP</CardName>
      </Card>
    </Grid>
    <Grid item lg={3} xs={6}>
      <Card>
        <CardContent>
          <Image
            src={require(`../../../public/imgs/redux.png`)}
            width="150"
            height="150"
          />
        </CardContent>
        <CardName>Redux</CardName>
      </Card>
    </Grid>
    <Grid item lg={3} xs={6}>
      <Card>
        <CardContent>
          <Image
            src={require(`../../../public/imgs/material-ui.png`)}
            width="150"
            height="150"
          />
        </CardContent>
        <CardName>Material UI</CardName>
      </Card>
    </Grid>
    <Grid item lg={3} xs={6}>
      <Card>
        <CardContent>
          <Image
            src={require(`../../../public/imgs/sass.png`)}
            width="150"
            height="150"
          />
        </CardContent>
        <CardName>Sass</CardName>
      </Card>
    </Grid>
    <Grid item lg={3} xs={6}>
      <Card>
        <CardContent>
          <Image
            src={require(`../../../public/imgs/bootstrap.png`)}
            width="150"
            height="150"
          />
        </CardContent>
        <CardName>Bootstrap</CardName>
      </Card>
    </Grid>
    <Grid item lg={3} xs={6}>
      <Card>
        <CardContent>
          <Image
            src={require(`../../../public/imgs/es6.png`)}
            width="150"
            height="150"
          />
        </CardContent>
        <CardName>ES6</CardName>
      </Card>
    </Grid>
    <Grid item lg={3} xs={6}>
      <Card>
        <CardContent>
          <Image
            src={require(`../../../public/imgs/git.png`)}
            width="150"
            height="150"
          />
        </CardContent>
        <CardName>Git</CardName>
      </Card>
    </Grid>
    <Grid item lg={3} xs={6}>
      <Card>
        <CardContent>
          <Image
            src={require(`../../../public/imgs/api.png`)}
            width="150"
            height="150"
          />
        </CardContent>
        <CardName>API</CardName>
      </Card>
    </Grid>
  </Grid>
   
  );
}

export default SkillCard;
