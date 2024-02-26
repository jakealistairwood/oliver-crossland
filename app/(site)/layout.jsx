import {Inter} from 'next/font/google'
import '../globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/globals/Navbar'

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Oli Crossland Videography',
  description:
    'Welcome to the portfolio site of Oliver Crossland. A creative videographer specializing in video editing and photography with over 5 years of professional experience.',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
