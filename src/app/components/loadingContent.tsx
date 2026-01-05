'use client'

import { useLoading } from '../contexts/LoadingContext'

export function LoadingContent({ children }: { children: React.ReactNode }) {
	const { isLoading } = useLoading()

	if (isLoading) {
		return null
	}

	return <>{children}</>
}

