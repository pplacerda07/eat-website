import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://eatcouver.ca"),
  title: "Eatcouver | Creator-Led Restaurant Content in Vancouver",
  description:
    "We help Vancouver restaurants fill tables by standing out on social media. Premium creator-led content, ongoing partnerships, and 650M+ impressions generated.",
  keywords: [
    "Vancouver restaurant marketing",
    "restaurant social media",
    "food content creator Vancouver",
    "restaurant content agency",
    "Eatcouver",
    "Vancouver food influencer",
    "restaurant reels",
    "hospitality marketing Vancouver",
  ],
  authors: [{ name: "Eatcouver" }],
  creator: "Eatcouver",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://eatcouver.ca",
    siteName: "Eatcouver",
    title: "Eatcouver | Creator-Led Restaurant Content in Vancouver",
    description:
      "We help Vancouver restaurants fill tables by standing out on social media. 650M+ impressions generated, 75k avg local views per video.",
    // images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Eatcouver – Creator-Led Restaurant Content" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eatcouver | Creator-Led Restaurant Content in Vancouver",
    description:
      "We help Vancouver restaurants fill tables by standing out on social media. 650M+ impressions generated.",
    // images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://eatcouver.ca",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
