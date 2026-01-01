import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Sanja Savić | Data & ML Portfolio",
  description:
    "Portfolio Sanje Savić – projekti iz data analize, machine learninga i vizualizacije podataka.",

  openGraph: {
    title: "Sanja Savić | Data & ML Portfolio",
    description:
      "Pogledaj moje projekte iz data analize, machine learninga i rada sa podacima.",
    url: "https://data-ml-portfolio-19dp3joeg-sanja-savics-projects.vercel.app",
    siteName: "Sanja Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sanja Savić – Data & ML Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <main className="max-w-6xl mx-auto px-6 mt-16">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
