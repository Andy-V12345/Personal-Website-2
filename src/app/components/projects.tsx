import styles from "../styles/projects.module.css"
import SectionTitle from "./sectionTitle"
import Image from "next/image"
import { FaLink } from 'react-icons/fa';
import Link from 'next/link'
import { useState } from "react";

export default function Projects() {
    return(
        <div className={`${styles.container}`}>
            <SectionTitle title="My Projects" />
            <p className={`mx-auto text-sm text-gray-600`}>Some of my favorite projects I've worked on:</p>
            <div className={`flex gap-11 flex-col w-11/12 sm:w-3/4 mx-auto`}>
                <ProjectBox url="https://apps.apple.com/us/app/accountive/id6468552927" 
                            color={`${styles.accountiveColor}`} shadow={`${styles.accountiveShadow}`} 
                            name="Accountive" 
                            image="/accountive_logo.png" 
                            description="An iOS app that functions as a social media todo list. Used Swift/SwiftUI and Firebase."
                            linkText="See on App Store"
                            showLink={true}
                />
                <ProjectBox url=""
                            color={`${styles.wrColor}`}
                            shadow={`${styles.wrShadow}`}
                            image="/world_relief_logo.jpg"
                            name="World Relief Data Entry System"
                            description="Revamped a job data entry and querying system using Next.js and Firebase."
                            showLink={false}
                            linkText=""
                />
                <ProjectBox url="https://apps.apple.com/us/app/quick-mental-math/id1520620798"
                            color={`${styles.qmmColor}`}
                            shadow={`${styles.qmmShadow}`}
                            image="/qmm_logo.png"
                            name="Quick Mental Math"
                            description="An iOS app that helps elementary students learn basic math operations. Used Swift/SwiftUI."
                            showLink={true}
                            linkText="See on App Store"
                />
                <ProjectBox url="https://github.com/Andy-V12345/Poker/tree/main"
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
    url: string,
    name: string,
    description: string,
    image: string,
    shadow: string,
    color: string,
    showLink: boolean,
    linkText: string
}

function ProjectBox({url, name, image, description, shadow, color, showLink, linkText}: ProjectBoxProps) {

    const [isHovered, setHovered] = useState(false)

    return(
        <Link className={`w-full ${isHovered ? `${styles.hovered}` : `${styles.unhovered}`}`} href={url} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <div className={`${styles.projectContainer} ${shadow}`}>
                <Image className={`${styles.image} my-auto rounded-xl`} src={image} width={100} height={100} alt="accountive logo" />
                <div className={styles.textContainer}>
                    <p className={`text-md sm:text-xl font-semibold my-auto`}>{name}</p>  
                    <p className={`text-gray-600 text-sm sm:text-md`}>
                        {description}
                    </p>
                    {showLink ? 
                        <div className={`mt-2 flex gap-3 ${isHovered ? `${color}` : `text-gray-500`}`}>
                            <FaLink className={`my-auto text-sm sm:text-md`} />
                            <p className={`my-auto text-sm sm:text-md`}>{linkText}</p>
                        </div>
                    :
                        null
                    }
                </div>
            </div>
        </Link>
    )
}
