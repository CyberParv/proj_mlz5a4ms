import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import NavbarSticky from "@/components/NavbarSticky";
import FooterMultiColumn from "@/components/FooterMultiColumn";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumen Collective | Fine Art & Commercial Photography Studio",
  description:
    "Brooklyn-based photography studio specializing in commercial campaigns, editorial work, fine art prints, and portrait sessions. Crafting visual stories since 2018.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-black text-white">
        <NavbarSticky
          logo="Lumen Collective"
          navItems={[
            { label: "Work", href: "/work" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/#services" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Start a Project"
          ctaHref="/contact"
        />
        {children}
        <FooterMultiColumn
          brand="Lumen Collective"
          description="Fine art and commercial photography studio crafting visual stories through light, texture, and emotion."
          columns={[
            {
              title: "Studio",
              links: [
                { label: "Work", href: "/work" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/#services" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Services",
              links: [
                { label: "Commercial Photography", href: "/#services" },
                { label: "Editorial & Fashion", href: "/#services" },
                { label: "Fine Art Prints", href: "/#services" },
                { label: "Portrait Sessions", href: "/#services" },
              ],
            },
            {
              title: "Connect",
              links: [
                { label: "Instagram", href: "https://instagram.com/lumencollective" },
                { label: "Behance", href: "https://behance.net/lumencollective" },
                { label: "LinkedIn", href: "https://linkedin.com/company/lumencollective" },
              ],
            },
          ]}
          copyright="© 2024 Lumen Collective. All rights reserved."
        />
      </body>
    </html>
  );
}
