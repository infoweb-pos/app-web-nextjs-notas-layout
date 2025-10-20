import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tutorial Next.js - Layout e Páginas",
  description: "Tutorial sobre layouts no Next.js com TypeScript, Tailwind CSS e shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
