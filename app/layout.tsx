import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

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
