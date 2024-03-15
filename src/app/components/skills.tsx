import styles from "../styles/skills.module.css"
import SectionTitle from "./sectionTitle"
import { SiSwift, SiPython, SiJavascript, SiReact, SiNextdotjs, SiPostgresql, SiFirebase, SiDocker } from "react-icons/si"

export default function Skills() {
    return (
        <div className={styles.container}>
            <SectionTitle title="My Skills"/>
            <p className={`mx-auto text-sm text-gray-600`}>Some of the skills, tools, and technologies I love using:</p>
            <div className={styles.gridDisplay}>
                <div className={styles.skillContainer}>
                    <SiPython className={`text-5xl mx-auto ${styles.python}`} />
                    <p className={`text-center text-sm text-gray-600 font-semibold`}>Python</p>
                </div>
                <div className={styles.skillContainer}>
                    <SiSwift className={`text-5xl mx-auto ${styles.swift}`} />
                    <p className={`text-center text-sm text-gray-600 font-semibold`}>Swift/SwiftUI</p>
                </div>
                <div className={styles.skillContainer}>
                    <SiJavascript className={`text-5xl mx-auto ${styles.javascript}`} />
                    <p className={`text-center text-sm text-gray-600 font-semibold`}>JavaScript</p>
                </div>
                <div className={styles.skillContainer}>
                    <SiReact className={`text-5xl mx-auto ${styles.react}`} />
                    <p className={`text-center text-sm text-gray-600 font-semibold`}>React</p>
                </div>
                <div className={styles.skillContainer}>
                    <SiNextdotjs className={`text-5xl mx-auto ${styles.nextjs}`} />
                    <p className={`text-center text-sm text-gray-600 font-semibold`}>Next.js</p>
                </div>
                <div className={styles.skillContainer}>
                    <SiPostgresql className={`text-5xl mx-auto ${styles.postgres}`} />
                    <p className={`text-center text-sm text-gray-600 font-semibold`}>PostgreSQL</p>
                </div>
                <div className={styles.skillContainer}>
                    <SiFirebase className={`text-5xl mx-auto ${styles.firebase}`} />
                    <p className={`text-center text-sm text-gray-600 font-semibold`}>Firebase</p>
                </div>
                <div className={styles.skillContainer}>
                    <SiDocker className={`text-5xl mx-auto ${styles.docker}`} />
                    <p className={`text-center text-sm text-gray-600 font-semibold`}>Docker</p>
                </div>
            </div>
        </div>
    )
}