import React from "react";
import Image from "next/image";
import { AppBar, Stack, Box } from "@mui/material";
import Link from "next/link";
import {
  EllipseBox,
  LinkBox,
  Sidebar,
  ToolbarBox,
  CloseBox,
  LinkMobileBox,
} from "./Style";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { ImageBox } from "./Style";

function Navbar() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <AppBar color="othercolor" elevation={0}>
      <ToolbarBox>
        <ImageBox>
          <Image
            src={require("../../public/imgs/logo.png")}
           objectFit="fill"
          />
        </ImageBox>
        <Stack
          direction="row"
          spacing={3}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Link href="/" passHref>
            <LinkBox>Home</LinkBox>
          </Link>
          <LinkBox href="#about">About</LinkBox>
          <Link href="/projects" passHref>
            <LinkBox>Projects</LinkBox>
          </Link>
        </Stack>
        <Box
          sx={{ display: { xs: "block", md: "none" }, cursor: "pointer" }}
          onClick={handleClick}
        >
          <MenuIcon sx={{ fontSize: "60px" }} />
        </Box>
        {open && (
          <Sidebar>
            <CloseBox onClick={() => setOpen(false)}>
              <CloseIcon color="white" sx={{ fontSize: "40px" }} />
            </CloseBox>
            <Link href="/" passHref>
              <LinkMobileBox onClick={() => setOpen(false)}>Home</LinkMobileBox>
            </Link>
            <LinkMobileBox href="#about" onClick={() => setOpen(false)}>
              About
            </LinkMobileBox>
            <Link href="/projects" passHref>
              <LinkMobileBox onClick={() => setOpen(false)}>
                Projects
              </LinkMobileBox>
            </Link>
            <EllipseBox />
          </Sidebar>
        )}
      </ToolbarBox>
    </AppBar>
  );
}

export default Navbar;
