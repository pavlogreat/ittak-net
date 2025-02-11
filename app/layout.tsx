import "./globals.css"
import type React from "react" // Import React

export const metadata = {
  title: "ITтак - Інтернет провайдер",
  description: "ITтак - Ваш надійний інтернет провайдер",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Tektur:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

