'use client'

import { Canvas } from '@react-three/fiber'
import Stars from './stars'
import ScrollCameraController from './scrollCameraController'
import { PeachModel } from './peachModel'

export default function Background() {
	return (
		<div className="fixed bg-black inset-0 pointer-events-none z-[-10] overflow-hidden">
			<Canvas>
				<ScrollCameraController />
				<Stars />
				<PeachModel scale={0.04} />
				<ambientLight color="white" intensity={0.75} />
				<directionalLight position={[0, 7, -7]} intensity={1} />
			</Canvas>
		</div>
	)
}
