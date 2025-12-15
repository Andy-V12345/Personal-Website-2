'use client'

import { useMemo } from 'react'

type Vec3 = [number, number, number]

const STAR_COUNT = 100
const RANGE = 10
const STAR_RADIUS = 0.05

export default function Stars() {
	const positions = useMemo(() => {
		const pts: Vec3[] = []
		for (let i = 0; i < STAR_COUNT; i += 1) {
			const x = (Math.random() * 2 - 1) * RANGE
			const y = (Math.random() * 2 - 1) * RANGE
			const z = (Math.random() * 2 - 1) * RANGE
			pts.push([x, y, z])
		}
		return pts
	}, [])

	return (
		<>
			{positions.map((pos, idx) => (
				<mesh key={`star-${idx}`} position={pos}>
					<sphereGeometry args={[STAR_RADIUS, 8, 8]} />
					<meshPhongMaterial
						color="white"
						shininess={10}
						specular="white"
					/>
				</mesh>
			))}
		</>
	)
}
