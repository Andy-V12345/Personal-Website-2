import styles from "../styles/home.module.css"
import Link from "next/link"
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
    return(
        <div className={styles.hero}>
          <div className={styles.heroTextContainer}>
            <h1 className={`${styles.heroTitle}`}>Hi, I'm Andy! &#128075;</h1>
            <h3 className={`text-gray-600`}>
            Currently, I'm a Computer Science student at Northwestern University aspiring to become a software engineer. I have experience in both front-end and back-end development and am continually seeking opportunities to create user-centric solutions.
            </h3>
            <div className={`${styles.contactContainer}`}>
              <Link className={styles.link} href="https://www.linkedin.com/in/andyvu04/">
                <FaLinkedin />
              </Link>
              <Link className={styles.link} href="https://github.com/Andy-V12345">
                <FaGithub />
              </Link>
              <Link className={styles.link} href="mailto:andyvu04@gmail.com">
                <FaEnvelope />
              </Link>
            </div>
          </div>
        </div>
    )
}