import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Curso de Fotografía con Flash Portátil",
  description: "Aprende a dominar el flash portátil en 10 clases intensivas",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

