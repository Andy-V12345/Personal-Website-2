import { useEffect, useRef, useState } from 'react'
import {
	motion,
	AnimatePresence,
	easeOut,
	easeInOut,
	easeIn,
} from 'framer-motion'
import { FaJava } from 'react-icons/fa'
import {
	SiAmazonaws,
	SiDocker,
	SiFirebase,
	SiJavascript,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiPython,
	SiReact,
	SiSpringboot,
	SiSwift,
	SiGo,
	SiKubernetes,
	SiTypescript,
	SiCplusplus,
	SiGit,
	SiDjango,
} from 'react-icons/si'
import SectionTitle from './sectionTitle'
import styles from '../styles/skills.module.css'

type SkillDef = {
	name: string
	iconName:
		| 'python'
		| 'swift'
		| 'javascript'
		| 'react'
		| 'nextjs'
		| 'postgres'
		| 'firebase'
		| 'docker'
		| 'java'
		| 'nodejs'
		| 'aws'
		| 'springboot'
		| 'go'
		| 'kubernetes'
		| 'typescript'
		| 'cplusplus'
		| 'git'
		| 'django'
	Icon: React.ComponentType<{ size?: string | number; className?: string }>
}

const skills: SkillDef[] = [
	{ iconName: 'python', name: 'Python', Icon: SiPython },
	{ iconName: 'swift', name: 'Swift', Icon: SiSwift },
	{ iconName: 'javascript', name: 'JavaScript', Icon: SiJavascript },
	{ iconName: 'react', name: 'React', Icon: SiReact },
	{ iconName: 'nextjs', name: 'Next.js', Icon: SiNextdotjs },
	{ iconName: 'postgres', name: 'PostgreSQL', Icon: SiPostgresql },
	{ iconName: 'firebase', name: 'Firebase', Icon: SiFirebase },
	{ iconName: 'docker', name: 'Docker', Icon: SiDocker },
	{ iconName: 'java', name: 'Java', Icon: FaJava },
	{ iconName: 'nodejs', name: 'Node.js', Icon: SiNodedotjs },
	{ iconName: 'aws', name: 'AWS', Icon: SiAmazonaws },
	{ iconName: 'springboot', name: 'Spring Boot', Icon: SiSpringboot },
	{ iconName: 'go', name: 'Golang', Icon: SiGo },
	{ iconName: 'kubernetes', name: 'Kubernetes', Icon: SiKubernetes },
	{ iconName: 'typescript', name: 'TypeScript', Icon: SiTypescript },
	{ iconName: 'cplusplus', name: 'C++', Icon: SiCplusplus },
	{ iconName: 'git', name: 'Git', Icon: SiGit },
	{ iconName: 'django', name: 'Django', Icon: SiDjango },
]

const BUBBLE_SIZE = 130
const MIN_BUBBLE_SIZE = 60

export default function Skills() {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const bubbleRefs = useRef<(HTMLDivElement | null)[]>([])
	const [pointer, setPointer] = useState<{ x: number; y: number } | null>(
		null
	)
	const [expanded, setExpanded] = useState<Set<number>>(new Set())
	const [isPointerInside, setIsPointerInside] = useState(false)
	const hasInitializedPointer = useRef(false)

	// Initialize bubble refs array
	useEffect(() => {
		bubbleRefs.current = bubbleRefs.current.slice(0, skills.length)
	}, [])

	// Initialize pointer to center of viewport on mount
	useEffect(() => {
		if (hasInitializedPointer.current || !containerRef.current) return

		const initPointer = () => {
			if (!containerRef.current) return
			const rect = containerRef.current.getBoundingClientRect()
			const centerX = rect.left + rect.width / 2
			const centerY = rect.top + rect.height / 2

			setPointer({ x: centerX, y: centerY })
			hasInitializedPointer.current = true
		}

		// Delay to ensure grid is rendered
		setTimeout(initPointer, 100)
	}, [])

	// Update expanded bubbles based on pointer position
	useEffect(() => {
		if (!pointer) return

		const distances = bubbleRefs.current
			.map((ref, index) => {
				if (!ref) return { index, distance: Infinity }
				const rect = ref.getBoundingClientRect()
				const centerX = rect.left + rect.width / 2
				const centerY = rect.top + rect.height / 2
				const dx = centerX - pointer.x
				const dy = centerY - pointer.y
				return { index, distance: Math.sqrt(dx * dx + dy * dy) }
			})
			.filter((item) => item.distance !== Infinity)

		distances.sort((a, b) => a.distance - b.distance)
		const next = new Set<number>()
		for (let i = 0; i < Math.min(4, distances.length); i += 1) {
			next.add(distances[i].index)
		}
		setExpanded(next)
	}, [pointer])

	// Track pointer position (relative to viewport for grid)
	const updatePointer = (clientX: number, clientY: number) => {
		setPointer({ x: clientX, y: clientY })
	}

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!isPointerInside) return
		updatePointer(e.clientX, e.clientY)
	}

	const handleMouseEnter = () => {
		setIsPointerInside(true)
	}

	const handleMouseLeave = () => {
		setIsPointerInside(false)
	}

	const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
		const touch = e.touches[0]
		if (!touch) return
		updatePointer(touch.clientX, touch.clientY)
	}

	const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
		const touch = e.touches[0]
		if (!touch) return
		updatePointer(touch.clientX, touch.clientY)
	}

	return (
		<div id="skills" className={`${styles.container} sm:max-w-6xl mx-auto`}>
			<SectionTitle title="My Skills" />
			<div className={styles.bubbleViewport} ref={containerRef}>
				<div
					className={styles.gridContainer}
					onMouseMove={handleMouseMove}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					onTouchMove={handleTouchMove}
					onTouchStart={handleTouchStart}
				>
					{skills.map((skill, idx) => {
						const isExpanded = expanded.has(idx)
						const scale = isExpanded
							? 1
							: MIN_BUBBLE_SIZE / BUBBLE_SIZE
						const Icon = skill.Icon
						let iconSize

						if (skill.iconName == 'go' || skill.iconName == 'aws') {
							iconSize = isExpanded ? 48 : 50
						} else {
							iconSize = isExpanded ? 42 : 55
						}

						return (
							<motion.div
								key={skill.iconName}
								ref={(el) => (bubbleRefs.current[idx] = el)}
								className={`${styles.bubble} ${
									styles[skill.iconName]
								} ${
									isExpanded
										? styles.expanded
										: styles.collapsed
								}`}
								animate={{
									scale: scale,
								}}
								transition={{
									type: 'spring',
									stiffness: 275,
									damping: 18,
								}}
								aria-label={skill.name}
							>
								<div className={styles.bubbleContent}>
									<Icon
										size={iconSize}
										className={`${styles[skill.iconName]} ${
											styles.skillIcon
										}`}
									/>

									{isExpanded && (
										<span className={`text-sm font-medium`}>
											{skill.name}
										</span>
									)}
								</div>
							</motion.div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
