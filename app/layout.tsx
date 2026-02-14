import "./globals.css"
import Header from "@/components/Header"
import {Footer} from "@/components/Footer"
import WhatsAppFloating from "@/components/WhatsAppFloating"

export const metadata = {
  title: "Medallón QR - Kora Memories"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-800">
        <Header />
        {children}
        <WhatsAppFloating />
        <Footer />
      </body>
    </html>
  )
}
