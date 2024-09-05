import { Box } from "@mui/material";

const FooterSection = () => {
  return (
    <>
      <Box
        component="section"
        id="footer"
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

export default FooterSection;
