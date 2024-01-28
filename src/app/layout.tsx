import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { UIContextProvider } from './store/UI-context'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Klaudia Schmidt',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="pl">
      <UIContextProvider>
      <body className={inter.className}>{children}</body>
      </UIContextProvider>
    </html>
  )
}
