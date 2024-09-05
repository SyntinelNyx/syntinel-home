import { Box } from "@mui/material";

const TeamSection = () => {
  return (
    <>
      <Box
        component="section"
        id="team"
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

export default TeamSection;
