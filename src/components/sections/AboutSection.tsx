"use client";
import React from "react";

import { Typography, Box, Button } from "@mui/material";

import AnimatedText from "@/components/AnimatedText";

const AboutSection = () => {
  return (
    <>
      <Box
        component="section"
        id="about"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: 5,
        }}
      >
        <Box sx={{ marginTop: "5vh" }}>
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              fontFamily: "Quantum, sans-serif",
              fontWeight: "bold",
              fontSize: {
                xs: "4.5em",
                sm: "5.5em",
              },
            }}
          >
            <AnimatedText text="syntinel" />
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              padding: 1,
            }}
          >
            <AnimatedText text="The problem to all of your solutions." />
          </Typography>
          <Button
            sx={{
              backgroundColor: "text.primary",
              borderRadius: 7.5,
              paddingX: 4,
              paddingY: 2,
              margin: 3,
            }}
            onClick={() => location.assign("https://app.syntinel.dev")}
          >
            <Typography variant="h6" sx={{ color: "background.paper" }}>
              Get Started
            </Typography>
          </Button>
          <Box
            component="img"
            src={"/hero.webp"}
            alt={"Background Hero Banner"}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "invert(1)",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default AboutSection;
