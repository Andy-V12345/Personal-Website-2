import styles from "../styles/footer.module.css"
import Link from "next/link"
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return(
        <footer className={`${styles.container} justify-center gap-5 sm:gap-0 sm:justify-start flex-col sm:flex-row`}>
            <div className={`${styles.contactContainer} justify-center sm:justify-start`}>
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
            <p className={`text-gray-400 text-sm my-auto sm:grow text-center sm:text-right`}>&copy; 2024 | Designed and coded by Andy Vu</p>
        </footer>
    )
}