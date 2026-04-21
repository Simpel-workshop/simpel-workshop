import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simpel Shop",
  description: "Webshop bygget med Next.js og DummyJSON",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body className="bg-[#f5f5f5] text-black antialiased">{children}</body>
    </html>
  );
}
