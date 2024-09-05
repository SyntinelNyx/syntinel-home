import { Box } from "@mui/material";

const ContactSection = () => {
  return (
    <>
      <Box
        component="section"
        id="contact"
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

export default ContactSection;
