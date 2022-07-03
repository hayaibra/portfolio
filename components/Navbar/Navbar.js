import React from "react";
import Image from "next/image";
import { AppBar, Stack } from "@mui/material";
import Link from "next/link";
import { ToolbarBox } from "./Style";

function Navbar() {
  return (
    <AppBar position="sticky" color="error" elevation={0}>
      <ToolbarBox>
        <Image
          src={require("../../public/img/logo.png")}
          width="300"
          height="50"
        />
        <Stack direction="row" spacing={3}>
          <Link href="/" passHref>
            <a
              style={{
                color: "white",
                textDecoration: "none",
                display: "block",
                fontSize: "20px",
                padding: "28px 50px",
                height: "80px",
              }}
            >
              Home
            </a>
          </Link>
          <a
            style={{
              color: "white",
              textDecoration: "none",
              display: "block",
              fontSize: "20px",
              padding: "28px 50px",
              height: "80px",
            }}
          >
            About
          </a>
          <Link href="/projects" passHref>
            <a
              style={{
                color: "white",
                textDecoration: "none",
                display: "block",
                fontSize: "20px",
                padding: "28px 50px",
                height: "80px",
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
