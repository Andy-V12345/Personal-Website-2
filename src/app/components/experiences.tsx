import styles from '../styles/experiences.module.css'
import SectionTitle from './sectionTitle'
import { Timeline, TimelineItemData } from './timeline'

export default function Experiences({ width }: { width: number }) {
	const experiences: TimelineItemData[] = [
		{
			date: 'Sep 2023 - present',
			company: 'Northwestern University',
			role: 'CS Undergraduate TA',
			imgSrc: '/northwestern_logo.png',
			imgAlt: 'northwestern logo',
			description:
				'As a TA, I helped 50+ students in classes such as Fundamentals of Programming in C/C++ and Scalable Software Architectures by hosting office hours, helping with debugging, and grading assignments.',
		},
		{
			date: 'Jun 2025 - Sep 2025',
			company: 'Robinhood',
			role: 'Software Engineering Intern',
			imgSrc: '/robinhood_logo.png',
			imgAlt: 'robinhood logo',
			description:
				'I built a full-stack AI agent with React and Python/FastAPI to help data scientists analyze experiments faster. Through efficient context management and tool calling, I reduced token usage by 90% and costs by 75%.',
		},
		{
			date: 'Jun 2024 - Sep 2025',
			company: 'Polo',
			role: 'Cofounder, CTO',
			imgSrc: '/polo_logo.png',
			imgAlt: 'polo logo',
			description:
				'I led the development of a Northwestern-only iOS marketplace using Swift and Firebase. Throughout the process, I was responsible for important decisions such as UI/UX design, backend architecture, and project management.',
		},
		{
			date: 'Jan 2024 - Jun 2024',
			company: 'Mayfest Productions',
			role: 'Mobile App Developer',
			imgSrc: '/mayfest_logo.png',
			imgAlt: 'mayfest logo',
			description:
				'As a developer on the Mayfest tech team, I helped build a React Native app for the Dillo Day music festival with schedules, live updates, and maps for 10,000+ attendees.',
		},
		{
			date: 'June 2023 - Aug 2023',
			company: 'Infosys',
			role: 'Software Engineering Intern',
			imgSrc: '/infosys_logo.png',
			imgAlt: 'infosys logo',
			description:
				'At Infosys, I built a REST API using Java Spring Boot, PostgreSQL, and Docker for a visitor management system used by 20,000+ employees and visitors.',
		},
	]
	return (
		<div
			id="experience"
			className={`${styles.container} sm:max-w-4xl mx-auto`}
		>
			<SectionTitle title="My Experience" />

			<Timeline items={experiences} />
		</div>
	)
}
