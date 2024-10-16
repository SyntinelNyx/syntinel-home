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
      <head>
        <script
          defer
          src="https://umami.miguelmuniz.com/script.js"
          data-website-id="644801db-2cf2-4f97-a607-784b39440b26"
        ></script>
      </head>
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
