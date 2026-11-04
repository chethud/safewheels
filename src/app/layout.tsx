import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Safe Wheels Tours & Travels | Premium Travel from Mysuru Since 1999",
    template: "%s | Safe Wheels Tours & Travels",
  },
  description:
    "Safe Wheels Tours & Travels offers vehicle rentals, airport transfers, domestic and international tours from Mysuru since 1999. Book safe, reliable journeys with 25+ years of trust.",
  keywords: [
    "Safe Wheels",
    "Mysuru taxi",
    "Mysore car rental",
    "airport transfers",
    "Innova Crysta rental",
    "Tempo Traveller Mysore",
    "domestic tours Karnataka",
  ],
  openGraph: {
    title: "Safe Wheels Tours & Travels",
    description:
      "Every journey deserves a safer way. Premium vehicle rentals and tours from Mysuru since 1999.",
    type: "website",
    locale: "en_IN",
    url: "https://safewheelsindia.com",
    siteName: "Safe Wheels Tours & Travels",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-brand-cream text-brand-black">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
