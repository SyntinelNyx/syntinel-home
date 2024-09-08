import { Box, Typography } from "@mui/material";

const TeamSection = () => {
  return (
    <>
      <Box
        component="section"
        id="team"
        sx={{
          minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Meet Our Team
        </Typography>
      </Box>
    </>
  );
};

export default TeamSection;
