import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import TanStackProvider from "../components/TanStackProvider/TanStackProvider"
import AuthProvider from "../components/AuthProvider/AuthProvider"

export const metadata: Metadata = {
  title: "Notehub",
  description: "Edit, delete, view notes",
  openGraph: {
    title: "Notehub",
    description: "Edit, delete, view notes",
    url: "https://notehub-public.goit.study/api",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Notehub preview image",
      },
    ],
  },
}

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
})

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} flex flex-col min-h-screen`}>
        <TanStackProvider>
          <AuthProvider>
          <Header />
          <main className="main">
            {children}
            {modal}
          </main>
          <Footer />
          </AuthProvider>
        </TanStackProvider>
      </body>
    </html>
  )
}
