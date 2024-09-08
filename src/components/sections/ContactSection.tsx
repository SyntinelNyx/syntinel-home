import { Box, Typography } from "@mui/material";

const ContactSection = () => {
  return (
    <>
      <Box
        component="section"
        id="contact"
        sx={{
          minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Contact
        </Typography>
      </Box>
    </>
  );
};

export default ContactSection;
