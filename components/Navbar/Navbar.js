import React from "react";
import Image from "next/image";
import { AppBar, Stack, Box } from "@mui/material";
import Link from "next/link";
import { ToolbarBox } from "./Style";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <AppBar color="othercolor" elevation={0}>
      <ToolbarBox>
        <Box sx={{ display: "flex", alignItems: "flex-end", padding: "20px" }}>
          <Image
            src={require("../../public/imgs/logo.png")}
            width="275"
            height="65"
          />
        </Box>
        <Stack
          direction="row"
          spacing={3}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Link href="/" passHref>
            <a
              style={{
                color: "white",
                textDecoration: "none",
                display: "flex",
                fontSize: "25px",
                padding: "28px 50px ",
                height: "100px",
                alignItems: "flex-end",
              }}
            >
              Home
            </a>
          </Link>
          <a
            href="#about"
            style={{
              color: "white",
              textDecoration: "none",
              display: "flex",
              fontSize: "25px",
              padding: "28px 50px ",
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
                fontSize: "25px",
                padding: "28px 50px ",
                height: "100px",
                alignItems: "flex-end",
              }}
            >
              Projects
            </a>
          </Link>
        </Stack>
        <Box
          sx={{ display: { xs: "block", md: "none" }, cursor: "pointer" }}
          onClick={handleClick}
        >
          <MenuIcon sx={{ fontSize: "60px" }} />
        </Box>
        {open && (
          <Box
            sx={{
              width: "50%",
              position: "absolute",
              backgroundColor: "red",
              height: "100vh",
              top: "0",
              right: "0",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "20px",
                right: "20px",
                cursor: "pointer",
                transition: "1s ease-in",
              }}
              onClick={() => setOpen(false)}
            >
              <CloseIcon color="white" sx={{ fontSize: "40px" }} />
            </Box>
            <Link href="/" passHref>
              <a
                style={{
                  color: "white",
                  textDecoration: "none",
                  display: "flex",
                  fontSize: "25px",
                  padding: "28px 50px ",
                  height: "100px",
                  alignItems: "flex-end",
                }}
                onClick={() => setOpen(false)}
              >
                Home
              </a>
            </Link>
            <a
              href="#about"
              style={{
                color: "white",
                textDecoration: "none",
                display: "flex",
                fontSize: "25px",
                padding: "28px 50px ",
                height: "100px",
                alignItems: "flex-end",
              }}
              onClick={() => setOpen(false)}
            >
              About
            </a>
            <Link href="/projects" passHref>
              <a
                style={{
                  color: "white",
                  textDecoration: "none",
                  display: "flex",
                  fontSize: "25px",
                  padding: "28px 50px ",
                  height: "100px",
                  alignItems: "flex-end",
                }}
                onClick={() => setOpen(false)}
              >
                Projects
              </a>
            </Link>
          </Box>
        )}
      </ToolbarBox>
    </AppBar>
  );
}

export default Navbar;
