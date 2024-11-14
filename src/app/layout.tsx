import type { Metadata } from "next";
import localFont from "next/font/local";
import '../../styles/global.sass'
import {header} from '@../../../importsComponents'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Laís 1 aninho",
  description: "Landing page Laís 1 aninho",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}`}>
        {header}
        {children}
      </body>
    </html>
  );
}
