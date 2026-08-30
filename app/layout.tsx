import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Marvi — Open-source intelligence for Windows",
  description: "An open-source, local-first voice and vision assistant for Windows.",
  icons: {
    icon: "/marvi-icon.png",
    apple: "/marvi-icon.png",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-void"><body>{children}</body></html>
}
