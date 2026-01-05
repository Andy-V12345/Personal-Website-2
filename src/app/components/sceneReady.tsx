'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useLoading } from '../contexts/LoadingContext'

export default function SceneReady() {
	const { setIsLoading } = useLoading()
	const frameCountRef = useRef(0)
	const hasSetReadyRef = useRef(false)

	useFrame(() => {
		// Wait a few frames to ensure GLTF model and geometry are fully loaded and rendered
		if (!hasSetReadyRef.current) {
			frameCountRef.current += 1
			if (frameCountRef.current >= 3) {
				setIsLoading(false)
				hasSetReadyRef.current = true
			}
		}
	})

	return null
}

