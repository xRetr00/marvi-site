import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = { title: "Marvi — Present, when it matters.", description: "A thoughtful voice and vision assistant for the spaces you live and work in.", icons: { icon: "/marvi-icon.png", apple: "/marvi-icon.png" } }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-void"><body>{children}</body></html>
}
