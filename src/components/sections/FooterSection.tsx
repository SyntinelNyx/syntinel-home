import React from "react";

import { Box, Typography } from "@mui/material";

const FooterSection = () => {
  return (
    <>
      <Box
        component="section"
        id="footer"
        sx={{
          minHeight: "10vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "background.paper",
          padding: 5,
        }}
      >
        <Typography variant="subtitle1">© 2024 Syntinel Inc.</Typography>
      </Box>
    </>
  );
};

export default FooterSection;
