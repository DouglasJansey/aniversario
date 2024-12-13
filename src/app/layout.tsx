import type { Metadata } from "next";
import localFont from "next/font/local";
import '../../styles/global.sass'
import {header} from '@../../../importsComponents'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const sourGummy = localFont({
  src: "./fonts/SourGummy_Expanded-Regular.ttf",
  variable: "--font-sour-gummy",
  weight: "400",
});
const yustineSignature = localFont({
  src: "./fonts/Yustine_Signature.otf",
  variable: "--font-yustine",
  weight: "normal",
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
      <body className={`${yustineSignature.variable} ${sourGummy.variable}`}>
        {header}
        {children}
      </body>
    </html>
  );
}
