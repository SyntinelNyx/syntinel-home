import { Box } from "@mui/material";

import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import ProductSection from "@/components/sections/ProductSection";
import TeamSection from "@/components/sections/TeamSection";

export default function Home() {
  return (
    <>
      <Box sx={{ padding: 5 }}>
        <AboutSection />
        <ProductSection />
        <TeamSection />
        <ContactSection />
      </Box>
      <FooterSection />
    </>
  );
}
