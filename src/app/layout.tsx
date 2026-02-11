import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eatcouver | Content for Restaurants",
  description: "Premium social media and content agency for restaurants in Vancouver.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
