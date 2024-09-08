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
          backgroundColor: "background.paper",
          padding: 5,
        }}
      ></Box>
    </>
  );
};

export default FooterSection;
