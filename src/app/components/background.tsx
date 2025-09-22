'use client'

import Image from 'next/image'

export default function Background() {
	return (
		<div className="fixed inset-0 pointer-events-none z-[-10] overflow-hidden">
			<Image
				src="/mojave_background.jpg"
				alt="Mojave background"
				fill
				className="object-cover"
				priority
			/>
		</div>
	)
}
