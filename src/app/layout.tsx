import { SessionProvider } from 'next-auth/react'
import { NextAuthProvider } from './providers'

export const metadata = {
  title: 'NoName',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  )
}