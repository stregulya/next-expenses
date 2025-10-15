import type { Metadata } from "next";
import "./globals.css";
import { raleway } from "@/ui/fonts";
import Header from "@/ui/Header/Header";
import Footer from "@/ui/Footer/Footer";

export const metadata: Metadata = {
  title: "Ex",
  description: "Расходы",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={raleway.className}>
      <body className="bg-main bg-[url(/background.webp)] bg-cover bg-repeat-y backdrop-blur-[7px] text-white min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
