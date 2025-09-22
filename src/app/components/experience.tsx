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
		<div className={`${styles.experienceContainer} glass w-full`}>
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
						<p className={`text-sm text-gray-300 font-medium`}>
							{date}
						</p>
						<p
							className={`text-lg sm:text-xl font-semibold text-white`}
						>
							{company}
						</p>
					</>
				) : (
					<div className={`flex`}>
						<p
							className={`text-lg sm:text-xl font-semibold my-auto text-white`}
						>
							{company}
						</p>
						<p
							className={`text-sm text-right my-auto grow font-medium text-gray-300`}
						>
							{date}
						</p>
					</div>
				)}
				<p className={`text-base text-gray-100`}>{role}</p>
				<div className={`text-gray-400 text-sm sm:text-md`}>
					{children}
				</div>
			</div>
		</div>
	)
}
