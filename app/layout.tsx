import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google"
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: "Edgar Machado",
  description: "Welcome to my Portfolio",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jetbrains.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
