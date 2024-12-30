import "./globals.css";
import type { Metadata } from "next";

import { Header } from "../components/ui/header";
import { RoundedBox } from "../components/ui/rounded-box";
import { Footer } from "../components/ui/footer";

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
      <body className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-6 items-center justify-center w-full m-4 md:m-48 max-w-[650px]">
          <Header />
          <main>
            <RoundedBox>{children}</RoundedBox>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
