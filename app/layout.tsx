import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Providers } from "./providers"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "React2Tech - React Certification Trainer",
  description: "Train for your React certification with interactive quizzes",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            {/* Header is conditionally rendered in quiz pages */}
            <Header />
            <main className="flex-1 container py-8 px-4 sm:px-6 mx-auto">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}