import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../ui/header";
import { Footer } from "../ui/footer";
import { RoundedBox } from "../ui/rounded-box";

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
        <div className="grid grid-cols-1 gap-4 items-center justify-center w-full p-4 md:p-24">
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
