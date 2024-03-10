import { Inter, Barlow_Condensed, Manrope } from "next/font/google"


export const inter = Inter({subsets: ['latin']})
export const manrope = Manrope({ subsets: ['latin'] })
export const barlowCondenseed = Barlow_Condensed({ subsets: ['latin'], weight: ['500', '600', '700'], variable: "--font-barlow-condensed" })