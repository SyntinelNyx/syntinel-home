"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const items = [
    { label: "About", link: "#about" },
    { label: "Product", link: "#product" },
    { label: "Team", link: "#team" },
    { label: "Contact", link: "#contact" },
    { label: "Get Started", link: "" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: isScrolled ? "background.default" : "transparent",
        paddingY: 1,
        boxShadow: isScrolled
          ? "20px 20px 60px #d0d0d0, -20px -20px 60px #f0f0f0;"
          : null,
        transition: "background-color 0.3s",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ display: "flex" }}>
          <Box
            component="img"
            alt="Logo of Syntinel Nyx"
            src="/syntinel-nyx-long.png"
            sx={{
              padding: 3,
              height: "auto",
              width: "100%",
              maxWidth: 300,
            }}
          />
          <Toolbar sx={{ marginLeft: "auto" }}>
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              {items.map((item) => (
                <Button
                  key={item.label}
                  variant="text"
                  sx={{ color: "primary.dark", margin: 1, fontSize: 20 }}
                >
                  <Link href={item.link}>{item.label}</Link>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
};
