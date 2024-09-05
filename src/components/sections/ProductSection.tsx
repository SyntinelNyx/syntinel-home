import { Box } from "@mui/material";

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
          padding: 5,
        }}
      ></Box>
    </>
  );
};

export default ProductSection;
