import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Injazat Capital | Strategic Investment Office",
  description: "A GCC-based strategic investment office partnering with visionary founders and breakthrough technology companies to build enduring value across the region and beyond.",
  keywords: "GCC investment, private equity, venture capital, MENA, strategic investment, family office",
  openGraph: {
    title: "Injazat Capital | Strategic Investment Office",
    description: "Investing in Vision. Building Value.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-navy-950 text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
