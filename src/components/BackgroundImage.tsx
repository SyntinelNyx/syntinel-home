import React from "react";
import Image from "next/image";

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
      <Box sx={{ position: "absolute", inset: 0, zIndex: -1 }}>
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          style={{ filter: `brightness(${brightness}%)` }}
        />
      </Box>
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
