import type { Metadata, Viewport } from "next"
import "./globals.css"

const siteUrl = "https://marvi-alpha.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Marvi — Present, when it matters.", template: "%s — Marvi" },
  description: "Marvi is an open-source, local-first voice and vision assistant for Windows.",
  applicationName: "Marvi",
  manifest: "/manifest.webmanifest",
  icons: { icon: [{ url: "/favicon.ico", type: "image/x-icon", sizes: "32x32" }, { url: "/icon-192.png", type: "image/png", sizes: "192x192" }, { url: "/icon-512.png", type: "image/png", sizes: "512x512" }], shortcut: "/favicon.ico", apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }] },
  openGraph: { type: "website", url: siteUrl, title: "Marvi — Present, when it matters.", description: "An open-source, local-first voice and vision assistant for Windows.", siteName: "Marvi", images: [{ url: "/icon-512.png", width: 512, height: 512, alt: "Marvi app icon" }] },
  twitter: { card: "summary", title: "Marvi — Present, when it matters.", description: "An open-source, local-first voice and vision assistant for Windows.", images: ["/icon-512.png"] },
}

export const viewport: Viewport = { themeColor: "#050505", colorScheme: "dark", width: "device-width", initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className="bg-void"><body>{children}</body></html> }
