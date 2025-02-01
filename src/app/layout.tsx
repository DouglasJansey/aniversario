import type { Metadata } from "next";
import localFont from "next/font/local";
import '../../styles/global.sass'
import {header} from '@../../../importsComponents'

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
const bebas = localFont({
  src: "./fonts/BebasNeue-Regular.ttf",
  variable: "--font-bebas",
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
      <body className={`${yustineSignature.variable} ${sourGummy.variable} ${bebas.variable}`}>
        {header}
        {children}
      </body>
    </html>
  );
}
