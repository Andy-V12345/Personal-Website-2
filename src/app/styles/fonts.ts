import { Montserrat, Pixelify_Sans } from 'next/font/google'

export const pixelifySans = Pixelify_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	display: 'swap',
})

export const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
	display: 'swap',
})
