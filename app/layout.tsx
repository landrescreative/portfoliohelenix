import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Font
import { Poppins } from "next/font/google";
import Template from "./template";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Helenix Art Portfolio",
  description: "A portfolio of Helenix's art",
  siteUrl: "https://helenix.art",
  image: "/images/og.png",
  type: "website",
  keywords: ["art", "portfolio", "helenix"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <Template>{children}</Template>
        <Footer />
      </body>
    </html>
  );
}
