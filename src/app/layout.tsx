import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Background from './components/background'

const inter = Inter({ subsets: ['latin'] })

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
			<body className={inter.className}>
				<Background />
				{children}
			</body>
		</html>
	)
}
