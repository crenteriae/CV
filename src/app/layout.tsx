import './globals.css'
import type { Metadata } from 'next'
import { Crimson_Pro, Cabin } from 'next/font/google'

const crimson_pro = Crimson_Pro({
    subsets: ['latin'],
    variable: '--font-crimsonpro'
})
const cabin = Cabin({
  subsets: ['latin'],
  variable: '--font-cabin'
})

export const metadata: Metadata = {
  title: 'Cesar Renteria',
  description: 'Cesar Renteria - Programador',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${crimson_pro.variable} font-serif ${cabin.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
