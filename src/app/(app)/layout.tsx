import '../../theme/sass/index.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/app/(app)/globals.css'
// import '@/app/(app)/theme.scss'
import Provider from '@/trpc/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Medical Horizon',
  description: 'Your Partner in Health and Wellness',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='dark'>
      <body className={`${inter.className}`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
