import type { Metadata } from "next";
import "./globals.css";
import "./profile.css";
import "./studio-theme.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AmbientEffects } from "@/components/AmbientEffects";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: profile.tagline,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AmbientEffects />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
