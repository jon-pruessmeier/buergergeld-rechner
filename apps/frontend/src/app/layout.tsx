import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../ui/header";
import { Footer } from "../ui/footer";
import { RoundedBox } from "../ui/rounded-box";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

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
        <div className="grid grid-cols-1 gap-6 items-center justify-center w-full m-4 md:m-48 max-w-[550px]">
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
