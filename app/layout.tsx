import "./globals.css";
import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import Link from "next/link";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Floka ? Brand System",
  description: "Official brand system, logo, assets, and guidelines for Floka.",
  metadataBase: new URL("https://agentic-9527e701.vercel.app"),
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Floka ? Brand System",
    description: "Logo, assets, and guidelines for Floka.",
    url: "https://agentic-9527e701.vercel.app",
    siteName: "Floka",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Floka ? Brand System",
    description: "Logo, assets, and guidelines for Floka.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased">
        <header className="border-b border-slate-900/10 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
          <div className="container-lg flex items-center justify-between py-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-floka-teal text-white">
                <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
                  <path
                    d="M34.5 11.5c0 5.5-6.5 6-6.5 12 0 3 2.5 4.5 5 4.5 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-9.5 17.5-10.5 17.5-16.5Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="font-semibold tracking-tight">Floka Brand</span>
            </Link>
            <nav className="flex items-center gap-3">
              <Link href="/brand" className="btn btn-ghost">Guidelines</Link>
              <Link href="/assets" className="btn btn-ghost">Assets</Link>
              <Link href="/mockups" className="btn btn-primary">Mockups</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-20 border-t border-slate-900/10 py-10">
          <div className="container-lg text-sm text-slate-500">
            ? {new Date().getFullYear()} Floka. Brand system for tumblers and flasks.
          </div>
        </footer>
      </body>
    </html>
  );
}

