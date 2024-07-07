import styles from "../styles/experiences.module.css"
import SectionTitle from "./sectionTitle"
import Image from "next/image"

export default function Experiences({width}: {width: number}) {

    const imgDimensions = 80

    return (
        <div id="experience" className={styles.container}>
            <SectionTitle title="My Experience" />
            <p className={`mx-auto text-sm text-gray-600`}>A quick summary of my recent experiences:</p>
            
            <div className={`flex flex-col gap-12 w-10/12 md:w-4/5 mx-auto`}>
                <div className={`${styles.experienceContainer} w-full`}>
                    <Image className={`${styles.image}`} src="/somethingsold_logo.png" width={imgDimensions} height={imgDimensions} alt="somethingsold logo" />
                    <div className={styles.textContainer}>
                        {width <= 768 && width > 0 ?
                            <>
                                <p className={`text-sm font-semibold`}>Jun 2024 - present</p>
                                <p className={`text-lg sm:text-xl font-semibold`}>SomethingSold</p>
                            </>
                        :
                            <div className={`flex`}>
                                <p className={`text-lg sm:text-xl font-semibold my-auto`}>SomethingSold</p>
                                <p className={`text-sm font-semibold text-right my-auto grow`}>Jun 2024 - present</p>
                            </div>
                        }
                        <p className={`text-md sm:text-lg`}>Software Engineer</p>
                        <p className={`text-gray-500 text-sm sm:text-md`}>Led the backend development of a furniture, e-commerce platform for college students, leveraging AWS and Node.js</p>
                    </div>
                </div>
                <div className={`${styles.experienceContainer} w-full`}>
                    <Image className={`${styles.image}`} src="/mayfest_logo.png" width={imgDimensions} height={imgDimensions} alt="mayfest logo" />
                    <div className={styles.textContainer}>
                        {width <= 768 && width > 0 ?
                            <>
                                <p className={`text-sm font-semibold`}>Jan 2024 - Jun 2024</p>
                                <p className={`text-lg sm:text-xl font-semibold`}>Mayfest Productions</p>
                            </>
                        :
                            <div className={`flex`}>
                                <p className={`text-lg sm:text-xl font-semibold my-auto`}>Mayfest Productions</p>
                                <p className={`text-sm font-semibold text-right my-auto grow`}>Jan 2024 - Jun 2024</p>
                            </div>
                        }
                        <p className={`text-md sm:text-lg`}>Mobile App Developer</p>
                        <p className={`text-gray-500 text-sm sm:text-md`}>Collaborated with the tech team to create the Dillo Day App using React Native.</p>
                    </div>
                </div>
                <div className={`${styles.experienceContainer} w-full`}>
                    <Image className={`${styles.image}`} src="/northwestern_logo.png" width={imgDimensions} height={imgDimensions} alt="northwestern logo" />
                    <div className={styles.textContainer}>
                        {width <= 768 && width > 0 ?
                            <>
                                <p className={`text-sm font-semibold`}>Sep 2023 - Jun 2024</p>
                                <p className={`text-lg sm:text-xl font-semibold`}>Northwestern University</p>
                            </>
                        :
                            <div className={`flex`}>
                                <p className={`text-lg sm:text-xl font-semibold my-auto`}>Northwestern University</p>
                                <p className={`text-sm font-semibold text-right my-auto grow`}>Sep 2023 - Jun 2024</p>
                            </div>
                        }
                        <p className={`text-md sm:text-lg`}>CS Peer Mentor</p>
                        <p className={`text-gray-500 text-sm sm:text-md`}>Hosted office hours for COMP_SCI_211: Fundamentals of Programming in C/C++.</p>
                    </div>
                </div>
                <div className={`${styles.experienceContainer} w-full`}>
                    <Image className={`${styles.image}`} src="/infosys_logo.png" width={imgDimensions} height={imgDimensions} alt="infosys logo" />
                    <div className={styles.textContainer}>
                        {width <= 768 && width > 0 ?
                            <>
                                <p className={`text-sm font-semibold`}>Jun 2023 - Aug 2023</p>
                                <p className={`text-lg sm:text-xl font-semibold`}>Infosys Limited</p>
                            </>
                        :
                            <div className={`flex`}>
                                <p className={`text-lg sm:text-xl font-semibold my-auto`}>Infosys Limited</p>
                                <p className={`text-sm font-semibold text-right my-auto grow`}>Jun 2023 - Aug 2023</p>
                            </div>
                        }
                        <p className={`text-md sm:text-lg`}>Software Engineer Intern</p>
                        <p className={`text-gray-500 text-sm sm:text-md`}>Developed a backend system for a visitor management system using Java Spring Boot and PostgreSQL.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}