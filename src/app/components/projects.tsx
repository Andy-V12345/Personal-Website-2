import styles from '../styles/projects.module.css'
import SectionTitle from './sectionTitle'
import Image from 'next/image'
import { FaLink } from 'react-icons/fa'
import Link from 'next/link'
import { useState } from 'react'

export default function Projects() {
	return (
		<div id="projects" className={`${styles.container}`}>
			<SectionTitle title="My Projects" />
			<div className={`flex gap-11 flex-col mx-auto`}>
				<ProjectBox
					url="https://leetpatternsai.com"
					color={`${styles.leetpatternsColor}`}
					shadow={`${styles.leetpatternsShadow}`}
					name="LeetPatterns.ai"
					image="/leetpatterns_logo.png"
					description="A web app where users can practice identifying common LeetCode patterns with AI generated questions and explanations"
					linkText="Visit website"
					showLink={true}
				/>
				<ProjectBox
					url="https://apps.apple.com/us/app/quick-mental-math/id1520620798"
					color={`${styles.qmmColor}`}
					shadow={`${styles.qmmShadow}`}
					image="/qmm_logo.png"
					name="Quick Mental Math"
					description="An iOS app that helps elementary students learn basic math operations."
					showLink={true}
					linkText="See on App Store"
				/>
				<ProjectBox
					url="https://apps.apple.com/us/app/nomify/id6529250827"
					color={`${styles.nomifyColor}`}
					shadow={`${styles.nomifyShadow}`}
					name="Nomify"
					image="/nomify_logo.png"
					description="A personalized food allergen assistant powered by Gemini AI"
					linkText="See on app store"
					showLink={true}
				/>
				<ProjectBox
					url="https://apps.apple.com/us/app/accountive/id6468552927"
					color={`${styles.accountiveColor}`}
					shadow={`${styles.accountiveShadow}`}
					name="Accountive"
					image="/accountive_logo.png"
					description="A social media todo list where friends hold each other accountable."
					linkText="See on App Store"
					showLink={true}
				/>
				<ProjectBox
					url="https://github.com/Andy-V12345/Poker/tree/main"
					color={`${styles.pokerColor}`}
					shadow={`${styles.pokerShadow}`}
					image="/poker_logo.png"
					name="Interactive Poker Simulator"
					description="A Python program where users can play Texas Holdem Poker with the computer through the terminal."
					showLink={true}
					linkText="Github Repo"
				/>
			</div>
		</div>
	)
}

interface ProjectBoxProps {
	url: string
	name: string
	description: string
	image: string
	shadow: string
	color: string
	showLink: boolean
	linkText: string
}

function ProjectBox({
	url,
	name,
	image,
	description,
	shadow,
	color,
	showLink,
	linkText,
}: ProjectBoxProps) {
	const [isHovered, setHovered] = useState(false)

	return (
		<Link
			target="_blank"
			className={`w-full z-0 glass-frosty ${
				isHovered ? `${styles.hovered}` : `${styles.unhovered}`
			}`}
			href={url}
			onClick={() => setHovered(false)}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div
				className={`${styles.projectContainer} ${shadow} ${styles.customShadowRadius}`}
			>
				<Image
					className={`${styles.image} my-auto rounded-xl`}
					src={image}
					width={100}
					height={100}
					alt="project logo"
				/>
				<div className={styles.textContainer}>
					<p
						className={`text-md sm:text-xl font-semibold my-auto text-white`}
					>
						{name}
					</p>
					<p className={`text-gray-300 text-sm sm:text-md`}>
						{description}
					</p>
					{showLink ? (
						<div
							className={`mt-2 flex gap-3 ${
								isHovered ? `${color}` : `text-gray-400`
							}`}
						>
							<FaLink className={`my-auto text-sm sm:text-md`} />
							<p className={`my-auto text-sm sm:text-md`}>
								{linkText}
							</p>
						</div>
					) : null}
				</div>
			</div>
		</Link>
	)
}
