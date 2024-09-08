"use client";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";

export enum ALIGN {
  LEFT,
  RIGHT,
}

const CaptionedImage = ({
  src,
  alt,
  caption,
  subtitle,
  align,
}: {
  src: string;
  alt: string;
  caption: string;
  subtitle: string;
  align: ALIGN;
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const captionText = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginX: 5,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {caption}
        </Typography>
        <Typography>{subtitle}</Typography>
      </Box>
    </>
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            justifyContent: "center",
            alignItems: "center",
            marginY: 3,
          }}
        >
          {/* Renders left/top caption when align is left or screen size is small*/}
          {(align === ALIGN.LEFT || isSmallScreen) && captionText}
          <Box
            component="img"
            src={src}
            alt={alt}
            sx={{
              maxWidth: {
                xs: "50vw",
                lg: "35vw",
              },
            }}
          />
          {/* Renders right caption when align is left and screen size is not small*/}
          {align === ALIGN.RIGHT && !isSmallScreen && captionText}
        </Box>
      </motion.div>
    </>
  );
};

export default CaptionedImage;
