import styles from '../styles/home.module.css'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa'

export default function Hero() {
	return (
		<div className={`glass p-8 sm:p-14 flex`}>
			<div className={styles.heroTextContainer}>
				<h1 className={`${styles.heroTitle} text-3xl sm:text-4xl`}>
					Hi, I'm Andy! &#128075;
				</h1>
				<h3 className={`text-gray-300 text-sm sm:text-md`}>
					Currently, I'm a Computer Science student at Northwestern
					University aspiring to become a software engineer. I have
					experience in both front-end and back-end development and am
					continually seeking opportunities to create user-centric
					solutions.
				</h3>
				<div className={`${styles.contactContainer}`}>
					<Link
						className={styles.link}
						href="https://www.linkedin.com/in/andyvu04/"
					>
						<FaLinkedin />
					</Link>
					<Link
						className={styles.link}
						href="https://github.com/Andy-V12345"
					>
						<FaGithub />
					</Link>
					<Link
						className={styles.link}
						href="mailto:andyvu04@gmail.com"
					>
						<FaEnvelope />
					</Link>
					<Link
						target="_blank"
						className={`${styles.downloadButton} py-2 px-3 rounded-lg text-xs font-medium text-white ${styles.link}`}
						href={'/Andy_Vu_Resume.pdf'}
					>
						<div className={`flex justify-center my-auto gap-2`}>
							<FaDownload className={`my-auto`} />
							<p className={`my-auto`}>Download My Resume</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}
