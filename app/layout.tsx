import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const fixelDisplaySemibold = localFont({
  src: "../public/fonts/FixelDisplay-SemiBold.woff2",
  variable: "--font-fixel-display-semibold",
});

export const metadata: Metadata = {
  title: "Location-Based Forecasting",
  description:
    "Robust Rate of Sale forecasting with location-aware calculations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${fixelDisplaySemibold.variable} bg-page antialiased`}
      >
        <div className="flex min-h-screen">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
