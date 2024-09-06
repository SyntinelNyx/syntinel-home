"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const items = [
  { label: "About", link: "#about" },
  { label: "Product", link: "#product" },
  { label: "Team", link: "#team" },
  { label: "Contact", link: "#contact" },
  { label: "Get Started", link: "" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Syntinel Nyx
      </Typography>
      <Divider />
      <List>
        {items.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                justifyContent: "center",
                color: "primary.dark",
              }}
            >
              <Link href={item.link}>
                <ListItemText
                  primary={item.label}
                  sx={{
                    textAlign: "center",
                  }}
                />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
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
        backgroundColor: isScrolled
          ? "rgba(237, 242, 251, 0.5);"
          : "transparent",
        paddingY: 1,
        boxShadow: isScrolled
          ? "20px 20px 60px #d0d0d0, -20px -20px 60px #f0f0f0;"
          : null,
        backdropFilter: isScrolled ? "blur(15px) saturate(180%)" : null,
        transition: "background-color 0.3s",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", alignItems: "center" }}>
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
          <Toolbar sx={{ marginLeft: "auto", display: "flex" }}>
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
              }}
            >
              {items.map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    color: "primary.dark",
                    marginLeft: 5,
                    fontSize: 24,
                    cursor: "pointer",
                    ":hover": {
                      color: "primary.main",
                      textDecoration: "underline",
                    },
                  }}
                >
                  <Link href={item.link}>{item.label.toLocaleUpperCase()}</Link>
                </Box>
              ))}
            </Box>
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                display: { xs: "block", lg: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Box>
        <Drawer
          variant="temporary"
          anchor="top"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Container>
    </AppBar>
  );
};

export default Navbar;
