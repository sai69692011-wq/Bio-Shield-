import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BIO-SHIELD — Can a removable barrier film reduce BPA/BPS transfer from thermal-paper receipts?",
    template: "%s · BIO-SHIELD",
  },
  description:
    "BIO-SHIELD is a student research hypothesis exploring whether a removable barrier film could reduce transfer of BPA/BPS from thermal-paper receipts. No protective product is validated or recommended. Read the proposed experiment, limitations, and evidence library.",
  keywords: [
    "BIO-SHIELD",
    "BPA",
    "BPS",
    "thermal paper",
    "receipts",
    "bisphenol",
    "student science project",
    "barrier film hypothesis",
    "dermal exposure",
  ],
  authors: [{ name: "BIO-SHIELD Student Research Project" }],
  creator: "BIO-SHIELD",
  publisher: "BIO-SHIELD",
  applicationName: "BIO-SHIELD",
  metadataBase: new URL("https://bio-shield.example.edu"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "BIO-SHIELD — Research hypothesis on thermal-paper receipts",
    description:
      "A student science project: can a removable barrier film reduce transfer of BPA/BPS from thermal-paper receipts? Hypothesis only — not validated.",
    type: "website",
    url: "/",
    siteName: "BIO-SHIELD",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "BIO-SHIELD — Research hypothesis",
    description:
      "Can a removable barrier film reduce BPA/BPS transfer from thermal-paper receipts? Hypothesis only.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#244c3a",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-forest focus:text-warm focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to main content
        </a>
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
