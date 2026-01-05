import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { El_Messiri } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { siteDetails } from "@/data/siteDetails";
import Script from "next/script";

import "./globals.css";

const el_messiri = El_Messiri({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  metadataBase: new URL(siteDetails.siteUrl),
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 675,
        alt: siteDetails.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: ["/images/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${el_messiri.className} antialiased`}>
        {siteDetails.googleAnalyticsId && (
          <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />
        )}
        {/* <Header /> */}
        <main>{children}</main>
        <SpeedInsights />
        <Script
          src="https://cdn.userway.org/widget.js"
          data-account="upvZaVgZnC"
          strategy="lazyOnload"
        />
        {/* <Footer /> */}
      </body>
    </html>
  );
}
