import type { Metadata } from 'next'
import EcosystemNav from '@/components/ecosystem/EcosystemNav'
import EcosystemFooter from '@/components/ecosystem/EcosystemFooter'


export const metadata: Metadata = {
  title: 'JavariVerse - Immersive Virtual World',
  description: 'Part of CR AudioViz AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body><EcosystemNav appName="Javariverse" />{children}<EcosystemFooter /></body>
    </html>
  )
}
