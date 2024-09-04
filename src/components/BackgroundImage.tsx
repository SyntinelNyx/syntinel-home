import React from "react";

import { Box } from "@mui/material";

const BackgroundImage = ({
  src,
  alt,
  brightness,
  rgb,
  opacity,
}: {
  src: string;
  alt: string;
  brightness: number;
  rgb: string;
  opacity: number;
}) => {
  return (
    <>
      {/* Background Image */}
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: `brightness(${brightness}%)`,
        }}
      />
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: `rgba(${rgb}, ${opacity})`,
          zIndex: -1,
        }}
      />
    </>
  );
};

export default BackgroundImage;
