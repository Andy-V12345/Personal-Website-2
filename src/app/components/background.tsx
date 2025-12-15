'use client'

import { Canvas } from '@react-three/fiber'
import Stars from './stars'
import ScrollCameraController from './scrollCameraController'
import { PeachModel } from './peachModel'
import { useWindowWidth } from '../hooks/useWindowWidth'

export default function Background() {
	const width = useWindowWidth()

	const peachScale = (() => {
		if (width === null) return 0.04 // fallback on first render
		if (width < 640) return 0.02 // small screens
		if (width < 1024) return 0.03 // medium screens
		return 0.04 // large screens
	})()

	return (
		<div className="fixed bg-black inset-0 pointer-events-none z-[-10] overflow-hidden">
			<Canvas>
				<ScrollCameraController />
				<Stars />
				<PeachModel scale={peachScale} />
				<ambientLight color="white" intensity={0.5} />
				<directionalLight position={[0, 7, -7]} intensity={1} />
				<directionalLight position={[0, -5, 5]} intensity={0.7} />
			</Canvas>
		</div>
	)
}
