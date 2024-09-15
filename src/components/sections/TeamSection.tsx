"use client";
import React from "react";

import { Box, Card, Typography } from "@mui/material";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const MemberCard = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <>
      <motion.div variants={childVariants}>
        <Card
          sx={{
            display: "flex",
            border: "1px solid rgba(255, 255, 255, 0.125);",
            borderRadius: 5,
            backgroundColor: "rgba(29, 29, 29, 0.75);",
            backdropFilter: "blur(16px) saturate(180%);",
            margin: 1,
          }}
        >
          <Box
            component="img"
            src={src}
            alt={alt}
            sx={{
              width: { xs: "50vw", md: "25vw" },
              transition: "transform 0.3s ease-in-out",
              ":hover": {
                transform: "scale(1.05)",
              },
            }}
          />
        </Card>
      </motion.div>
    </>
  );
};

const TeamSection = () => {
  return (
    <>
      <Box
        component="section"
        id="team"
        sx={{
          minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Meet The Team
          </Typography>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <Box
            sx={{
              display: "flex",
              maxWidth: { md: "100vw", lg: "60vw" },
              flexDirection: { xs: "column", md: "row" },
              margin: 3,
            }}
          >
            <MemberCard src="/jasmine.webp" alt="Picture of Jasmine" />
            <MemberCard src="/miguel.png" alt="Picture of Miguel" />
            <MemberCard src="/christian.png" alt="Picture of Christian" />
          </Box>
        </motion.div>
      </Box>
    </>
  );
};

export default TeamSection;
