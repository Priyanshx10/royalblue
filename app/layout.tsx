import { Inter } from 'next/font/google'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: ' Royal Blue Restaurant',
  description: 'Experience culinary excellence with our 3D interactive menu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}