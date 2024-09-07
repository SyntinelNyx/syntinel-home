import { Box, Typography } from "@mui/material";

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
          padding: 5,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Syntinel Nyx
        </Typography>
        <Typography variant="h6">
          Our solution for automated asset management, stable patching, and
          seamless testing within your infrastructure.
        </Typography>
      </Box>
    </>
  );
};

export default ProductSection;
