import styles from '../styles/home.module.css'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa'

export default function Hero() {
	return (
		<div
			className={`flex flex-col gap-5 justify-center h-svh pb-24 sm:pb-40`}
		>
			<h1
				className={`text-[#ff8c61] w-full sm:text-6xl md:text-7xl xl:text-8xl text-5xl font-medium text-center`}
			>
				Hi, I'm Andy!
			</h1>

			<p
				className={`text-white lg:text-xl text-xs sm:text-base font-light text-center`}
			>
				I'm a computer science student at Northwestern University
				aspiring to become a software engineer. I have experience in
				both front-end and back-end development and I'm continually
				seeking opportunities to create user-centric solutions.
			</p>

			<div
				className={`flex justify-center items-center mt-2 gap-5 text-[22px] text-[#e5e7eb] mx-auto`}
			>
				<Link
					className={`hover:opacity-50`}
					href="https://www.linkedin.com/in/andyvu04/"
				>
					<FaLinkedin />
				</Link>
				<Link
					className={`hover:opacity-50`}
					href="https://github.com/Andy-V12345"
				>
					<FaGithub />
				</Link>
				<Link
					className={`hover:opacity-50`}
					href="mailto:andyvu04@gmail.com"
				>
					<FaEnvelope />
				</Link>
				<Link
					target="_blank"
					className={`bg-[#1f2937] hover:opacity-50 py-2 px-3 rounded-lg text-xs font-medium text-white`}
					href={'/Andy_Vu_Resume.pdf'}
				>
					<div className={`flex justify-center my-auto gap-2`}>
						<FaDownload className={`my-auto`} />
						<p className={`my-auto`}>Download My Resume</p>
					</div>
				</Link>
			</div>
		</div>
	)
}
