import Link from 'next/link'
import styles from '../styles/experiences.module.css'
import Experience from './experience'
import SectionTitle from './sectionTitle'
import Image from 'next/image'

export default function Experiences({ width }: { width: number }) {
	const imgDimensions = 80

	return (
		<div id="experience" className={styles.container}>
			<SectionTitle title="My Experience" />
			<p className={`mx-auto text-sm text-gray-600`}>
				A quick summary of my recent experiences:
			</p>

			<div className={`flex flex-col gap-12 w-10/12 md:w-4/5 mx-auto`}>
				<Experience
					width={width}
					imgDimensions={imgDimensions}
					imgSrc={'/northwestern_logo.png'}
					imgAlt={'northwestern alt'}
					date={'Sep 2023 - present'}
					company={'Northwestern University'}
					role={'CS Peer Mentor'}
				>
					<div className="flex flex-col gap-[1px]">
						<span>
							• COMP_SCI_211: Fundamentals of Programming in C/C++
						</span>
						<span>
							• COMP_SCI_310: Scalable Software Architectures
						</span>
					</div>
				</Experience>

				<Experience
					width={width}
					imgDimensions={imgDimensions}
					imgSrc={'/robinhood_logo.png'}
					imgAlt={'robinhood logo'}
					date={'Jun 2025 - Sep 2025'}
					company={'Robinhood'}
					role={'Software Engineering Intern'}
				>
					Developed a data analysis AI agent for the Experimentation
					Platform.
				</Experience>

				<Experience
					width={width}
					imgDimensions={imgDimensions}
					imgSrc={'/polo_logo.png'}
					imgAlt={'polo logo'}
					date={'Jun 2024 - Sep 2025'}
					company={'Polo'}
					role={'Cofounder, CTO'}
				>
					<>
						Led the development of a campus-only marketplace for
						goods and services.
						<a
							target="_blank"
							className="ml-1 text-blue-400 font-medium"
							href="https://www.polo-app.com"
						>
							Check us out!
						</a>
					</>
				</Experience>

				<Experience
					width={width}
					imgDimensions={imgDimensions}
					imgSrc={'/mayfest_logo.png'}
					imgAlt={'mayfest logo'}
					date={'Jan 2024 - Jun 2024'}
					company={'Mayfest Productions'}
					role={'Mobile App developer'}
				>
					Collaborated with the tech team to create the Dillo Day App
					using React Native.
				</Experience>

				<Experience
					width={width}
					imgDimensions={imgDimensions}
					imgSrc={'/infosys_logo.png'}
					imgAlt={'infosys logo'}
					date={'June 2023 - Aug 2023'}
					company={'Infosys'}
					role={'Software Engineer Intern'}
				>
					Developed a backend system for a visitor management system
					using Java Spring Boot and PostgreSQL.
				</Experience>
			</div>
		</div>
	)
}
