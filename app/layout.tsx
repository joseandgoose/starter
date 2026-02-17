import type { Metadata } from "next";
import { Cormorant, Raleway } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";


const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Jose and Goose",
  description: "Celebrating the craft of things made with intention.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${raleway.variable}`}>
        {children}
        <GoogleAnalytics gaId="G-9GQ3BD74ZE" />
      </body>
    </html>
  );
}