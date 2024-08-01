"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });
import {NextUIProvider} from '@nextui-org/react'

import ToasterContext from "../context/ToastContext";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black w-full ${inter.className}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <NextUIProvider>
            <Lines />
            <Header />
            <ToasterContext />
            <main className={"w-full"}>
              {children}
            </main>
            <Footer />
            <ScrollToTop />
          </NextUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
