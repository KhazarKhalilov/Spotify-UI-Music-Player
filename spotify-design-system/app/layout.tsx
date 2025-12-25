import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spotify Design System (Minimal)",
  description: "Tailwind + CSS Modules + Tokens + Theme",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
