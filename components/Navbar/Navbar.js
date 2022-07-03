import React from "react";
import Image from "next/image";
import { AppBar, Stack, Box } from "@mui/material";
import Link from "next/link";
import { ToolbarBox } from "./Style";

function Navbar() {
  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <ToolbarBox>
        <Box
          sx={{ display: "flex", alignItems: "flex-end", paddingTop: "40px" }}
        >
          <Image
            src={require("../../public/img/logo.png")}
            width="275"
            height="65"
          />
        </Box>
        <Stack direction="row" spacing={3}>
          <Link href="/" passHref>
            <a
              style={{
                color: "white",
                textDecoration: "none",
                display: "flex",
                fontSize: "22px",
                padding: "28px 50px 0",
                height: "100px",
                alignItems: "flex-end",
              }}
            >
              Home
            </a>
          </Link>
          <a
            style={{
              color: "white",
              textDecoration: "none",
              display: "flex",
              fontSize: "22px",
              padding: "28px 50px 0",
              height: "100px",
              alignItems: "flex-end",
            }}
          >
            About
          </a>
          <Link href="/projects" passHref>
            <a
              style={{
                color: "white",
                textDecoration: "none",
                display: "flex",
                fontSize: "22px",
                padding: "28px 50px 0",
                height: "100px",
                alignItems: "flex-end",
              }}
            >
              Projects
            </a>
          </Link>
        </Stack>
      </ToolbarBox>
    </AppBar>
  );
}

export default Navbar;
