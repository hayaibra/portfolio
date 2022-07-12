import React from "react";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { Card, CardContent, CardName } from "./Style";

function SkillCard() {
  return (
    <Grid container spacing={1}>
      <Grid item lg={3} xs={6} md={4}>
        <Card>
          <CardContent>
            <Image
              src={require(`../../../public/imgs/github.png`)}
              width="90"
              height="90"
              alt="github"
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
              alt="js"
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
              alt="html"
            />
          </CardContent>
          <CardName>HTML</CardName>
        </Card>
      </Grid>
      <Grid item lg={3} xs={6} md={4}>
        <Card>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "150px",
              height: "143px",
            }}
          >
            <Image
              src={require(`../../../public/imgs/css.png`)}
              width="120"
              height="120"
              alt="css"
            />
          </Box>
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
              alt="react"
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
              alt="next"
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
              alt="npm"
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
              alt="oop"
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
              alt="redux"
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
              alt="material-ui"
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
              alt="sass"
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
              alt="bootstrap"
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
              alt="es6"
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
              alt="git"
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
              alt="api"
            />
          </CardContent>
          <CardName>API</CardName>
        </Card>
      </Grid>
    </Grid>
  );
}

export default SkillCard;
