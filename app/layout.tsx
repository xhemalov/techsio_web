import "./globals.css"

import type { Metadata } from "next"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import ChunkErrorReload from "@/components/chunk-error-reload"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Techsio",
  description:
    "Techsio vytváří robustní e-commerce řešení a systémové integrace na míru.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
        <body
          className="antialiased"
        >
          <ChunkErrorReload />
          <Navigation />
          <main>
            {children}
          </main>
          <Footer />
        </body>
    </html>
  )
}





