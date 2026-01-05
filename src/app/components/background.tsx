'use client'

import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Stars from './stars'
import ScrollCameraController from './scrollCameraController'
import { PeachModel } from './peachModel'
import SceneReady from './sceneReady'
import { useWindowWidth } from '../hooks/useWindowWidth'

export default function Background() {
	const width = useWindowWidth()
	const [scrollProgress, setScrollProgress] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			const scrollY =
				window.scrollY || document.documentElement.scrollTop || 0
			const viewportHeight = window.innerHeight * 0.75 || 0

			if (viewportHeight === 0) {
				setScrollProgress(0)
				return
			}

			const rawProgress = scrollY / viewportHeight
			const clampedProgress = Math.min(Math.max(rawProgress, 0), 1)
			setScrollProgress(clampedProgress)
		}

		// Initialize on mount in case the user reloads mid-page
		handleScroll()

		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const peachScale = (() => {
		if (width === null) return 0.04 // fallback on first render
		if (width < 640) return 0.02 // small screens
		if (width < 1024) return 0.03 // medium screens
		return 0.04 // large screens
	})()

	const peachPosition: [number, number, number] = (() => {
		const isNarrow = width !== null && width <= 430
		const startY = isNarrow ? -6 : -8
		const y = startY + (0 - startY) * scrollProgress

		return [0, y, 0]
	})()

	return (
		<div className="fixed bg-black inset-0 pointer-events-none z-[-10] overflow-hidden">
			<Canvas>
				<ScrollCameraController />
				<Stars />
				<PeachModel scale={peachScale} position={peachPosition} />
				<SceneReady />
				<ambientLight color="white" intensity={0.5} />
				<directionalLight position={[0, 7, -7]} intensity={1} />
				<directionalLight position={[0, -5, 5]} intensity={0.7} />
			</Canvas>
		</div>
	)
}
