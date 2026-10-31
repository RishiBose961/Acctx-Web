import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { faqs } from "@/components/faqData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://acctx.vercel.app";

export const viewport: Viewport = {
  themeColor: "#090a0f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Acctx — Private, Offline-First Personal Finance & Bill Manager",
    template: "%s | Acctx Desktop",
  },
  description:
    "Modern, 100% offline desktop personal finance application for Windows, macOS, and Linux. Master 6-digit PIN security, secure local encryption, smart recurring bill cycles, zero cloud sync, and proactive notifications.",
  keywords: [
    "offline personal finance",
    "private expense tracker",
    "desktop budget app",
    "offline bill reminder",
    "local private finance",
    "money manager without cloud",
    "open source personal finance",
    "acctx finance",
    "free YNAB alternative",
    "offline Mint alternative",
    "local personal finance without bank linking",
    "windows budgeting app",
    "macOS finance tracker",
    "linux personal finance software",
  ],
  authors: [
    {
      name: "Rishi Bose / Ayan Banerjee",
      url: "https://github.com/RishiBose961",
    },
  ],
  creator: "Acctx Team",
  publisher: "Acctx",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Acctx — Private, Offline-First Personal Finance & Bill Manager",
    description:
      "Take back control of your finances. 100% offline, secure local encryption, Master PIN lockout, smart recurring bill automation, and zero cloud tracking.",
    siteName: "Acctx",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Acctx Offline Finance Desktop Application Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acctx — Private, Offline-First Personal Finance & Bill Manager",
    description:
      "100% offline personal finance application for Windows, macOS, and Linux with secure local encryption.",
    images: ["/og-image.png"],
    creator: "@ayanbanerjee",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdSoftware = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Acctx",
    operatingSystem: "Windows 10, Windows 11 (64-bit)",
    applicationCategory: "FinanceApplication",
    applicationSubCategory: "Personal Finance & Recurring Bill Tracker",
    softwareVersion: "1.0.0",
    fileSize: "102MB",
    description:
      "Modern, 100% offline desktop personal finance & smart recurring bill manager with secure local encryption, Master PIN authentication, and zero cloud telemetry.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    downloadUrl: "https://github.com/RishiBose961/Acctx-Web/releases",
    screenshot:
      "https://res.cloudinary.com/nb1pqpkh/image/upload/v1793035677/Acctx_26-10-2026_19_51_24.png",
    featureList: [
      "100% Offline with Zero Network Telemetry",
      "Secure Local Encrypted Vault",
      "Master 6-Digit PIN Security Lockout with Cooldown Timers",
      "Automated Recurring Bill Cycles and Advancement",
      "Native Desktop OS Urgency Notifications",
      "Visual Analytics and Cash Flow Momentum Trends",
      "One-Click Portable Encrypted Backups",
    ],
    author: {
      "@type": "Person",
      name: "Rishi Bose / Ayan Banerjee",
      url: "https://github.com/RishiBose961",
    },
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Acctx",
    url: siteUrl,
    description:
      "Private, offline-first personal finance and smart bill management desktop app.",
    publisher: {
      "@type": "Organization",
      name: "Acctx",
      url: siteUrl,
    },
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#090a0f] text-zinc-100 bg-mesh">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
        {children}
      </body>
    </html>
  );
}
