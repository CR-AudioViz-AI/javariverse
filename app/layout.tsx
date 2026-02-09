import type { Metadata } from 'next'

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
      <body>{children}</body>
    </html>
  )
}
