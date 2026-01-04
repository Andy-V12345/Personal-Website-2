'use client'

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Mesh } from 'three'

type Vec3 = [number, number, number]

const STAR_COUNT = 15
const RANGE = 11
const STAR_RADIUS = 0.13
const INNER_RADIUS = 5
const STAR_COLORS = [0x43aa8b, 0xfb8500]
const ROTATION_SPEED = 1.0

type StarData = {
	pos: Vec3
	color: number
}

function Star({ pos, color }: StarData) {
	const meshRef = useRef<Mesh>(null)

	useFrame((_, delta) => {
		if (meshRef.current) {
			meshRef.current.rotation.x += delta * ROTATION_SPEED
			meshRef.current.rotation.y += delta * ROTATION_SPEED
			meshRef.current.rotation.z += delta * ROTATION_SPEED
		}
	})

	return (
		<mesh ref={meshRef} position={pos}>
			<icosahedronGeometry args={[STAR_RADIUS, 0]} />
			<meshPhongMaterial color={color} shininess={10} specular={color} />
		</mesh>
	)
}

export default function Stars() {
	const stars = useMemo(() => {
		const pts: StarData[] = []
		for (let i = 0; i < STAR_COUNT; i += 1) {
			let x = 0
			let y = 0
			let z = 0
			let dist = 0
			let attempts = 0
			do {
				x = (Math.random() * 2 - 1) * RANGE
				y = (Math.random() * 2 - 1) * RANGE
				z = (Math.random() * 2 - 1) * RANGE
				dist = Math.sqrt(x * x + y * y + z * z)
				attempts += 1
			} while (dist < INNER_RADIUS && attempts < 100)
			const color =
				STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)]
			pts.push({ pos: [x, y, z], color })
		}
		return pts
	}, [])

	return (
		<>
			{stars.map((star, idx) => (
				<Star key={`star-${idx}`} {...star} />
			))}
		</>
	)
}
