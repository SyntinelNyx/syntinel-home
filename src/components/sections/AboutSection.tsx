import { Typography, Box } from "@mui/material";

import BackgroundImage from "@/components/BackgroundImage";
import AnimatedText from "@/components/AnimatedText";

const AboutSection = () => {
  return (
    <>
      <Box
        component="section"
        id="about"
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 5,
        }}
      >
        <BackgroundImage
          src="/hero.jpg"
          alt="Background Hero Banner"
          brightness={75}
          rgb="255, 255, 255"
          opacity={0.3}
        />
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            marginTop: 20,
            fontWeight: "bold",
          }}
        >
          <AnimatedText text="Syntinel Nyx" />
        </Typography>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            padding: 1,
            fontStyle: "italic",
          }}
        >
          <AnimatedText text="The problem to all of your solutions" />
        </Typography>
      </Box>
    </>
  );
};

export default AboutSection;
