import styles from "../styles/skills.module.css"
import SectionTitle from "./sectionTitle"
import { SiSwift, SiPython, SiJavascript, SiReact, SiNextdotjs, SiPostgresql, SiFirebase, SiDocker, SiNodedotjs, SiAmazonaws, SiSpringboot } from "react-icons/si"
import { FaJava } from "react-icons/fa"

export default function Skills() {
    return (
        <div id="skills" className={styles.container}>
            <SectionTitle title="My Skills"/>
            <p className={`mx-auto text-sm text-gray-600 px-4 text-center`}>Some of the skills, tools, and technologies I love using:</p>
            <div className={`${styles.gridDisplay} grid-cols-2 sm:grid-cols-4`}>
                <div className={styles.skillContainer}>
                    <SiPython className={`text-5xl mx-auto ${styles.python}`} />
                    <p className={`text-center text-sm  font-semibold`}>Python</p>
                </div>
                <div className={styles.skillContainer}>
                    <SiSwift className={`text-5xl mx-auto ${styles.swift}`} />
                    <p className={`text-center text-sm  font-semibold`}>Swift/SwiftUI</p>
                </div>
                <div className={styles.skillContainer}>
                    <SiJavascript className={`text-5xl mx-auto ${styles.javascript}`} />
                    <p className={`text-center text-sm  font-semibold`}>JavaScript</p>
                </div>
                <div className={styles.skillContainer}>
                    <SiReact className={`text-5xl mx-auto ${styles.react}`} />
                    <p className={`text-center text-sm  font-semibold`}>React</p>
                </div>
                <div className={styles.skillContainer}>
                    <SiNextdotjs className={`text-5xl mx-auto ${styles.nextjs}`} />
                    <p className={`text-center text-sm  font-semibold`}>Next.js</p>
                </div>
                <div className={styles.skillContainer}>
                    <SiPostgresql className={`text-5xl mx-auto ${styles.postgres}`} />
                    <p className={`text-center text-sm  font-semibold`}>PostgreSQL</p>
                </div>
                <div className={styles.skillContainer}>
                    <SiFirebase className={`text-5xl mx-auto ${styles.firebase}`} />
                    <p className={`text-center text-sm  font-semibold`}>Firebase</p>
                </div>
                <div className={styles.skillContainer}>
                    <SiDocker className={`text-5xl mx-auto ${styles.docker}`} />
                    <p className={`text-center text-sm  font-semibold`}>Docker</p>
                </div>
                <div className={styles.skillContainer}>
                    <FaJava className={`text-5xl mx-auto ${styles.java}`} />
                    <p className={`text-center text-sm  font-semibold`}>Java</p>
                </div>
                <div className={styles.skillContainer}>
                    <SiNodedotjs className={`text-5xl mx-auto ${styles.nodejs}`} />
                    <p className={`text-center text-sm  font-semibold`}>Node.js</p>
                </div>
                <div className={styles.skillContainer}>
                    <SiAmazonaws className={`text-5xl mx-auto ${styles.aws}`} />
                    <p className={`text-center text-sm  font-semibold`}>AWS</p>
                </div>
                <div className={styles.skillContainer}>
                    <SiSpringboot className={`text-5xl mx-auto ${styles.springboot}`} />
                    <p className={`text-center text-sm  font-semibold`}>Spring Boot</p>
                </div>
            </div>
        </div>
    )
}