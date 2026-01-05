import type { Metadata } from 'next'
import './globals.css'
import Background from './components/background'
import { LoadingScreenWrapper } from './components/loadingScreenWrapper'
import { LoadingProvider } from './contexts/LoadingContext'
import { LoadingContent } from './components/loadingContent'
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
				<LoadingProvider>
					<Background />
					<LoadingScreenWrapper />
					<LoadingContent>{children}</LoadingContent>
				</LoadingProvider>
			</body>
		</html>
	)
}
