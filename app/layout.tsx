import type { Metadata } from "next";
import { openSans } from "./ui/fonts/fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased m-16 bg-zinc-950`}>
        {children}
      </body>
    </html>
  );
}
