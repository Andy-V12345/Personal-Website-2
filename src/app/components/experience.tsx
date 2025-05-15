import styles from '../styles/experiences.module.css'
import Image from 'next/image'

interface ExperienceProps {
	width: number
	imgDimensions: number
	imgSrc: string
	imgAlt: string
	date: string
	company: string
	role: string
	children?: React.ReactNode
}

export default function Experience({
	width,
	imgDimensions,
	imgSrc,
	imgAlt,
	date,
	company,
	role,
	children,
}: ExperienceProps) {
	return (
		<div className={`${styles.experienceContainer} w-full`}>
			<Image
				className={`${styles.image}`}
				src={imgSrc}
				width={imgDimensions}
				height={imgDimensions}
				alt={imgAlt}
			/>
			<div className={styles.textContainer}>
				{width <= 768 && width > 0 ? (
					<>
						<p className={`text-sm font-semibold`}>{date}</p>
						<p className={`text-lg sm:text-xl font-semibold`}>
							{company}
						</p>
					</>
				) : (
					<div className={`flex`}>
						<p
							className={`text-lg sm:text-xl font-semibold my-auto`}
						>
							{company}
						</p>
						<p
							className={`text-sm font-semibold text-right my-auto grow`}
						>
							{date}
						</p>
					</div>
				)}
				<p className={`text-md sm:text-lg`}>{role}</p>
				<div className={`text-gray-500 text-sm sm:text-md`}>
					{children}
				</div>
			</div>
		</div>
	)
}
