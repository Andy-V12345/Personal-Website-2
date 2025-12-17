import SectionTitle from './sectionTitle'
import Image from 'next/image'
import { FaGithub, FaLink } from 'react-icons/fa'
import Link from 'next/link'
import { useWindowWidth } from '../hooks/useWindowWidth'

export default function Projects() {
	return (
		<div
			id="projects"
			className={`flex flex-col gap-[50px] sm:max-w-4xl mx-auto`}
		>
			<SectionTitle title="My Projects" />
			<div className={`grid grid-cols-2 gap-4 mx-auto`}>
				<ProjectBox
					url="https://leetpatternsai.com"
					githubUrl="https://github.com/Andy-V12345/LeetPatterns"
					iconColor="text-[#fd8913]"
					name="LeetPatterns.ai"
					image="/leetpatterns_logo.png"
					description="A web app where users can practice identifying common LeetCode patterns with AI generated questions and explanations."
					linkText="Visit website"
				/>
				<ProjectBox
					url="https://apps.apple.com/us/app/quick-mental-math/id1520620798"
					iconColor="text-[#2B2C6C]"
					image="/qmm_logo.png"
					name="Quick Mental Math"
					description="An iOS app that helps elementary students learn basic math operations. Users can practice by themselves, or they can play games against their friends."
					linkText="See on App Store"
					githubUrl="https://github.com/Andy-V12345/QMM"
				/>
				<ProjectBox
					url="https://apps.apple.com/us/app/nomify/id6529250827"
					iconColor="text-[#7bc482]"
					name="Nomify"
					image="/nomify_logo.png"
					description="Nomify is a personalized food allergen assistant powered by Gemini AI. Users can upload a photo of their food and get information about the ingredients and potential allergens."
					linkText="See on App Store"
					githubUrl="https://github.com/Andy-V12345/Nomify"
				/>
				<ProjectBox
					url="https://apps.apple.com/us/app/accountive/id6468552927"
					iconColor="text-[#9dbcec]"
					name="Accountive"
					image="/accountive_logo.png"
					description="A social media todo list where friends hold each other accountable. When you complete a task, you can mark it as done and your friends will see it."
					linkText="See on App Store"
					githubUrl="https://github.com/Andy-V12345/Accountive"
				/>
			</div>
		</div>
	)
}

interface ProjectBoxProps {
	url: string
	githubUrl?: string | undefined
	name: string
	description: string
	image: string
	iconColor: string
	linkText: string
}

function ProjectBox({
	url,
	githubUrl,
	name,
	image,
	description,
	iconColor,
	linkText,
}: ProjectBoxProps) {
	const width = useWindowWidth()

	return (
		<div
			className={`w-full h-full z-0 glass-light flex flex-col p-4 gap-4 items-center`}
		>
			<Image
				className={`object-contain rounded-2xl mr-auto`}
				src={image}
				width={100}
				height={100}
				alt="project logo"
			/>
			<div
				className={`text-white text-start flex flex-col gap-14 h-full w-full`}
			>
				<div>
					<p className={`text-md sm:text-xl font-semibold`}>{name}</p>
					<p className={`text-gray-100 text-sm sm:text-md`}>
						{description}
					</p>
				</div>

				<div
					className={`flex ${
						width && width < 800 ? 'flex-col' : 'flex-row'
					} mt-auto gap-3`}
				>
					{url && (
						<Link
							target="_blank"
							href={url}
							className={`flex items-center gap-2 ${
								width && width < 800 ? 'w-full' : 'w-fit'
							} glass-light px-2 py-1 text-sm hover:opacity-50 transition-all`}
							style={{
								boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
							}}
						>
							<FaLink className={`${iconColor}`} />
							<p>{linkText}</p>
						</Link>
					)}

					{githubUrl && (
						<Link
							target="_blank"
							href={githubUrl}
							className={`flex items-center gap-2 ${
								width && width < 800 ? 'w-full' : 'w-fit'
							} glass-light px-2 py-1 text-sm hover:opacity-50 transition-all`}
							style={{
								boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
							}}
						>
							<FaGithub className={`text-black`} />
							<p>GitHub Repo</p>
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}
