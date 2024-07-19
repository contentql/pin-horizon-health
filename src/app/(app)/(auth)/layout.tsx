import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Medical Horizon',
  description: 'Your Partner in Health and Wellness',
}

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div>{children}</div>
}
