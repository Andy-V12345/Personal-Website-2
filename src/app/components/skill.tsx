import styles from '../styles/skills.module.css'

interface Props {
	iconName: string
	name: string
	Icon: React.ElementType
}

export default function Skill({ iconName, name, Icon }: Props) {
	return (
		<div className={`${styles.skillContainer}`}>
			<Icon className={`text-5xl mx-auto ${styles[iconName]}`} />
			<p className={`text-center text-sm font-semibold`}>{name}</p>
		</div>
	)
}
