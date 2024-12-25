import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bürgergeldrecher",
  description: "Rechner by Jón Prüßmeier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
