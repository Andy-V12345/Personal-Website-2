import type { Metadata } from 'next'
import './globals.css'
import Background from './components/background'
import { montserrat } from './styles/fonts'

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
			<body className={montserrat.className}>
				<Background />
				{children}
			</body>
		</html>
	)
}
