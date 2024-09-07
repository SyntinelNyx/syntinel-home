import { Typography, Box } from "@mui/material";

import AnimatedText from "@/components/AnimatedText";

const AboutSection = () => {
  return (
    <>
      <Box
        component="section"
        id="about"
        sx={{
          minHeight: "130vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 5,
        }}
      >
        <Box
          component="img"
          src={"/hero.jpg"}
          alt={"Background Hero Banner"}
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: -1,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            marginTop: "30vh",
            filter: "invert(1)",
          }}
        />
        <Box sx={{ marginTop: "5vh" }}>
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              fontFamily: "Quantum, sans-serif",
              fontWeight: "bold",
              fontSize: {
                xs: "5em",
              },
            }}
          >
            <AnimatedText text="syntinel" />
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontStyle: "italic",
              padding: 1,
            }}
          >
            <AnimatedText text="The problem to all of your solutions" />
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default AboutSection;
