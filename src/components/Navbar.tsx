"use client";
import React, { useState, useEffect } from "react";

import {
  AppBar,
  Box,
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
  { label: "About", link: "/about" },
  { label: "Product", link: "/#product" },
  { label: "Team", link: "/#team" },
  { label: "Contact", link: "/#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLink = (link: string) => {
    if (!link.startsWith("#")) {
      window.location.href = link;
      return;
    }

    const element = document.querySelector(link);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 100,
      });
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Quantum, sans-serif",
          fontWeight: "bold",
          fontSize: 32,
          my: 2,
        }}
      >
        syntinel
      </Typography>
      <Divider />
      <List>
        {items.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                justifyContent: "center",
              }}
              onClick={() => handleLink(item.link)}
            >
              <ListItemText
                primary={item.label}
                sx={{
                  textAlign: "center",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem key={"Get Started"} disablePadding>
          <ListItemButton
            sx={{
              textAlign: "center",
              justifyContent: "center",
            }}
            onClick={() => location.assign("https://app.syntinel.dev")}
          >
            <ListItemText
              primary={"Get Started"}
              sx={{
                textAlign: "center",
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          backgroundColor: isScrolled
            ? "rgba(39, 39, 39, 0.5);"
            : "transparent",
          paddingY: 1,
          boxShadow: isScrolled
            ? "20px 20px 25px #1d1d1d, -20px -20px 25px #313131;"
            : null,
          backdropFilter: isScrolled ? "blur(15px) saturate(180%)" : null,
          transition: "background-color 0.3s",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                fontFamily: "Quantum, sans-serif",
                fontSize: 52,
                marginTop: -1,
                marginX: 1,
              }}
            >
              syn
            </Typography>
            <Toolbar sx={{ marginLeft: "auto", display: "flex" }}>
              <Box
                sx={{
                  display: { xs: "none", lg: "flex" },
                  justifyItems: "center",
                  alignItems: "center",
                }}
              >
                {items.map((item) => (
                  <Box
                    key={item.label}
                    sx={{
                      marginLeft: 5,
                      fontSize: 24,
                      fontWeight: "bold",
                      cursor: "pointer",
                      ":hover": {
                        color: "primary.dark",
                      },
                    }}
                    onClick={() => handleLink(item.link)}
                  >
                    {item.label}
                  </Box>
                ))}
                <Box
                  key={"Get Started"}
                  sx={{
                    backgroundColor: "text.primary",
                    color: "background.paper",
                    marginLeft: 5,
                    paddingX: 3,
                    paddingY: 1,
                    fontSize: 24,
                    fontWeight: "bold",
                    cursor: "pointer",
                    borderRadius: 10,
                    ":hover": {
                      color: "#4A4A4A",
                    },
                  }}
                  onClick={() => location.assign("https://app.syntinel.dev")}
                >
                  {"Get Started"}
                </Box>
              </Box>
              <IconButton
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  color: "primary",
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
    </>
  );
};

export default Navbar;
