import React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { Box } from "@mui/material";

import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";

const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syntinel Nyx",
  description: "The problem to all of your solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProviderWrapper>
          <Box component="main">
            <Navbar />
            {children}
          </Box>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
