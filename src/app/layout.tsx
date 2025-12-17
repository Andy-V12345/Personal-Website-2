import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'
import Background from './components/background'

const nunitoSans = Nunito_Sans({
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Andy Vu | Portfolio',
	description: 'About Andy Vu',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={nunitoSans.className}>
				<Background />
				{children}
			</body>
		</html>
	)
}
