import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya Ulya - Full-Stack Developer Portfolio",
  description: "Personal portfolio of Aditya Ulya, Informatics Student and Full-Stack Developer. Showcasing projects, skills, and experience.",
  keywords: ["portfolio", "developer", "full-stack", "react", "next.js"],
  authors: [{ name: "Aditya Ulya" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  );
}
