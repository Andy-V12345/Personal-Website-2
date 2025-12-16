'use client'

import { useMemo } from 'react'

type Vec3 = [number, number, number]

const STAR_COUNT = 50
const RANGE = 12
const STAR_RADIUS = 0.06
const INNER_RADIUS = 5
const STAR_COLORS = [0x43aa8b, 0xfb8500]

export default function Stars() {
	const stars = useMemo(() => {
		const pts: { pos: Vec3; color: number }[] = []
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
			{stars.map(({ pos, color }, idx) => (
				<mesh key={`star-${idx}`} position={pos}>
					<sphereGeometry args={[STAR_RADIUS, 8, 8]} />
					<meshPhongMaterial
						color={color}
						shininess={10}
						specular={color}
					/>
				</mesh>
			))}
		</>
	)
}
