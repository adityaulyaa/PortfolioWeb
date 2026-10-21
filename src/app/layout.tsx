import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProfileService } from "@/services/profile-service";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio website",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  let profile = null;

  try {
    profile = await ProfileService.getProfile();
  } catch {
    profile = null;
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        <Navbar ownerName={profile?.fullName ?? "Portfolio"} />
        {children}
        <Footer profile={profile} />
      </body>
    </html>
  );
}
