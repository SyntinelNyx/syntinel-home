import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import ProductSection from "@/components/sections/ProductSection";
import TeamSection from "@/components/sections/TeamSection";

export default function Home() {
  return (
    <>
      <AboutSection />
      <ProductSection />
      <TeamSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
