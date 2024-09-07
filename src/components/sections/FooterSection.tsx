import { Box } from "@mui/material";

const FooterSection = () => {
  return (
    <>
      <Box
        component="section"
        id="footer"
        sx={{
          minHeight: "30vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: 5,
          backgroundColor: "background.paper",
        }}
      ></Box>
    </>
  );
};

export default FooterSection;
