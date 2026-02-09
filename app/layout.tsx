export const metadata = {
  title: 'Javariverse',
  description: 'Immersive virtual world powered by AI',
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
