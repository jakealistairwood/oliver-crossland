import React from 'react'
// import { Inter } from 'next/font/google'
import { manrope, barlowCondensed, dmMono } from '@/utils/fonts'
import '../globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/globals/Navbar'
import Footer from '@/components/globals/Footer'

export const metadata = {
  title: 'Oli Crossland Videography',
  description:
    'Welcome to the portfolio site of Oliver Crossland. A creative videographer specializing in video editing and photography with over 5 years of professional experience.',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${barlowCondensed.variable} ${dmMono.variable}`}>
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
        <Footer />
      </body>
    </html>
  )
}
