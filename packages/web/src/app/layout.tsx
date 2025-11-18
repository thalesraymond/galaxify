import type { Metadata } from "next";
import { Orbitron, Roboto } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-orbitron",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Galaxify - Turn Your Habits into Galactic Discoveries",
  description:
    "Stop the grind. Start the expedition. Galaxify turns your daily goals into an epic journey of space exploration, ship customization, and charting the unknown.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable} ${orbitron.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
