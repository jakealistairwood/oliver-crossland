import { Barlow_Condensed, Manrope, DM_Mono } from "next/font/google"


// export const inter = Inter({subsets: ['latin']})
export const dmMono = DM_Mono({ subsets: ['latin'], weight: ['300', '400'], variable: "--font-mono" })
export const manrope = Manrope({ subsets: ['latin'], variable: "--font-base" })
export const barlowCondensed = Barlow_Condensed({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: "--font-barlow-condensed" })