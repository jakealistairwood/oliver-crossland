// import { Inter } from 'next/font/google'
import { manrope, barlowCondenseed } from '@/utils/fonts'
import '../globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import ProgressBar from '@/components/globals/ProgressBar'
import Navbar from '@/components/globals/Navbar'

// const inter = Inter({subsets: ['latin']})
// const manrope = Manrope({ subsets: ['latin']})
// const barlowCondensed = Barlow_Condensed({ subsets: ['latin'], weight: ['500', '700'] })

export const metadata = {
  title: 'Oli Crossland Videography',
  description:
    'Welcome to the portfolio site of Oliver Crossland. A creative videographer specializing in video editing and photography with over 5 years of professional experience.',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${barlowCondenseed.variable}`}>
        <ProgressBar />
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
