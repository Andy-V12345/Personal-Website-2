import styles from '../styles/skills.module.css'
import SectionTitle from './sectionTitle'
import {
	SiSwift,
	SiPython,
	SiJavascript,
	SiReact,
	SiNextdotjs,
	SiPostgresql,
	SiFirebase,
	SiDocker,
	SiNodedotjs,
	SiAmazonaws,
	SiSpringboot,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import Skill from './skill'

export default function Skills() {
	return (
		<div id="skills" className={styles.container}>
			<SectionTitle title="My Skills" />
			<div
				className={`${styles.gridDisplay} glass grid-cols-2 sm:grid-cols-4`}
			>
				<Skill iconName="python" name="Python" Icon={SiPython} />
				<Skill iconName="swift" name="Swift/SwiftUI" Icon={SiSwift} />
				<Skill
					iconName="javascript"
					name="JavaScript"
					Icon={SiJavascript}
				/>
				<Skill iconName="react" name="React" Icon={SiReact} />
				<Skill iconName="nextjs" name="Next.js" Icon={SiNextdotjs} />
				<Skill
					iconName="postgres"
					name="PostgreSQL"
					Icon={SiPostgresql}
				/>
				<Skill iconName="firebase" name="Firebase" Icon={SiFirebase} />
				<Skill iconName="docker" name="Docker" Icon={SiDocker} />
				<Skill iconName="java" name="Java" Icon={FaJava} />
				<Skill iconName="nodejs" name="Node.js" Icon={SiNodedotjs} />
				<Skill iconName="aws" name="AWS" Icon={SiAmazonaws} />
				<Skill
					iconName="springboot"
					name="Spring Boot"
					Icon={SiSpringboot}
				/>
			</div>
		</div>
	)
}
