import "./globals.css";
import { Footer, Navbar } from "./components";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="model-icon.png" />
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
