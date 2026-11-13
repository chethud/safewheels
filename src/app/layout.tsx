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
    default:
      "Safe Wheels | Cab Rentals & Car Hire in Mysuru Since 1999",
    template: "%s | Safe Wheels Cab Rentals",
  },
  description:
    "Book chauffeured cab rentals in Mysuru — city cabs, airport transfers, outstation trips and vehicle hire with trained drivers since 1999.",
  keywords: [
    "Safe Wheels",
    "Mysuru cab rental",
    "Mysore car hire",
    "Mysore taxi",
    "airport transfers Mysore",
    "Innova Crysta rental",
    "Tempo Traveller Mysore",
    "outstation cab Mysuru",
  ],
  openGraph: {
    title: "Safe Wheels Cab Rentals | Mysuru",
    description:
      "Chauffeured cabs, airport transfers and outstation rentals from Mysuru since 1999.",
    type: "website",
    locale: "en_IN",
    url: "https://safewheelsindia.com",
    siteName: "Safe Wheels Cab Rentals",
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
