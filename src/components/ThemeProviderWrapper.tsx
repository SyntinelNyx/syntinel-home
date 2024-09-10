"use client";
import React from "react";

import { ThemeProvider, CssBaseline } from "@mui/material";

import defaultTheme from "@/themes/default";

const ThemeProviderWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
};

export default ThemeProviderWrapper;
