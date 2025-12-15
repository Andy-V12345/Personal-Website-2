'use client'

import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'

const BASE_SPEED = 0.2 // radians/sec for slow default orbit
const SCROLL_BOOST = 0.0025 // added radians/sec per wheel delta
const BOOST_CLAMP = 3 // cap boost contribution
const DAMPING = 2.5 // decay rate per second for boost
const CAMERA_RADIUS = 10

export default function ScrollCameraController() {
	const angleRef = useRef(0)
	const boostRef = useRef(0)
	const { camera } = useThree()

	useEffect(() => {
		const handleWheel = (event: WheelEvent) => {
			boostRef.current += Math.abs(event.deltaY) * SCROLL_BOOST
			// clamp boost to avoid runaway speed
			if (boostRef.current > BOOST_CLAMP) boostRef.current = BOOST_CLAMP
		}

		window.addEventListener('wheel', handleWheel, { passive: true })
		return () => window.removeEventListener('wheel', handleWheel)
	}, [])

	useFrame((_, delta) => {
		// Apply exponential damping to the scroll boost
		boostRef.current *= Math.exp(-DAMPING * delta)

		// Update angle using base speed plus current boost
		angleRef.current += (BASE_SPEED + boostRef.current) * delta

		const angle = angleRef.current
		const x = Math.sin(angle) * CAMERA_RADIUS
		const z = Math.cos(angle) * CAMERA_RADIUS
		camera.position.set(x, camera.position.y, z)
		camera.lookAt(0, 0, 0)
	})

	return null
}
