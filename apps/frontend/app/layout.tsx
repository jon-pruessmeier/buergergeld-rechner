import "./globals.css";
import type { Metadata } from "next";

import { Header } from "../ui/header";
import { RoundedBox } from "../ui/rounded-box";
import { Footer } from "../ui/footer";

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
        <div className="w-full h-full p-8 md:px-48 md:pt-36 overflow-y-auto">
          <div className="grid grid-cols-1 gap-4 items-center justify-center w-full max-w-[650px] ">
            <Header />
            <main>
              <RoundedBox>{children}</RoundedBox>
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
