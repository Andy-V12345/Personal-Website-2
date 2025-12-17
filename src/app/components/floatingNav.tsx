import styles from '../styles/navbar.module.css'
import { motion } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'

export default function FloatingNav() {
	const variants = {
		visible: { opacity: 1, top: '30px' },
		hidden: { opacity: 0, top: '-60px' },
	}

	const [floating, setFloating] = useState(true)

	const [y, setY] = useState(0)

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId)
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		}

		setTimeout(() => {
			setFloating(false)
		}, 250)
	}

	const handleNavigation = useCallback(
		(e: { currentTarget: any }) => {
			const window = e.currentTarget
			if (y - window.scrollY >= 2 || y <= 0 || window.scrollY <= 0) {
				setFloating(true)
			} else if (y - window.scrollY < -2) {
				setFloating(false)
			}
			setY(window.scrollY)
		},
		[y]
	)

	useEffect(() => {
		setY(window.scrollY)
		window.addEventListener('scroll', handleNavigation)

		return () => {
			window.removeEventListener('scroll', handleNavigation)
		}
	}, [handleNavigation])

	return (
		<motion.div
			variants={variants}
			animate={floating ? 'visible' : 'hidden'}
			transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.4 }}
			className={`${styles.floatingContainer} glass-light`}
		>
			<button
				className={`${styles.navButton}`}
				onClick={() => scrollToSection('skills')}
			>
				<p>Skills</p>
			</button>
			<button
				className={`${styles.navButton}`}
				onClick={() => scrollToSection('experience')}
			>
				<p>Experience</p>
			</button>
			<button
				className={`${styles.navButton}`}
				onClick={() => scrollToSection('projects')}
			>
				<p>Projects</p>
			</button>
		</motion.div>
	)
}
