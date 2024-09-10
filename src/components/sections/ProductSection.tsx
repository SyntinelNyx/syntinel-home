"use client";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

import CaptionedImage, { Align } from "@/components/CaptionedImage";

const ProductSection = () => {
  return (
    <>
      <Box
        component="section"
        id="product"
        sx={{
          minHeight: "100vh",
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
            Syntinel Nyx
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h6">
            Our solution for automated asset management, stable vulnerabilities
            patching, and seamless testing all integrated within your
            infrastructure.
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: 1,
          }}
        >
          <CaptionedImage
            src="/manage.png"
            alt="Manage Assets Image"
            caption="Manage"
            subtitle="Manage your assets"
            align={Align.LEFT}
          />
          <CaptionedImage
            src="/patch.png"
            alt="Patch Vulnerabilities Image"
            caption="Patch"
            subtitle="Patch your vulnerabilities"
            align={Align.RIGHT}
          />
          <CaptionedImage
            src="/test.png"
            alt="Test Infrastructures Image"
            caption="Test"
            subtitle="Test your infrastructures"
            align={Align.LEFT}
          />
        </Box>
      </Box>
    </>
  );
};

export default ProductSection;
