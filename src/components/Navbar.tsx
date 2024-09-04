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
        backgroundColor: isScrolled ? "background.default" : "transparent",
        paddingY: 1,
        boxShadow: isScrolled
          ? "20px 20px 60px #d0d0d0, -20px -20px 60px #f0f0f0;"
          : null,
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
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: "block", sm: "none" } }}
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
            display: { xs: "block", sm: "none" },
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
