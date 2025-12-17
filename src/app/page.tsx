'use client'

import Hero from './components/hero'
import Skills from './components/skills'
import Experiences from './components/experiences'
import Projects from './components/projects'
import Footer from './components/footer'
import FloatingNav from './components/floatingNav'
import { useWindowWidth } from './hooks/useWindowWidth'

export default function Home() {
	const width = useWindowWidth()

	return (
		<div className={`w-full`}>
			<FloatingNav />
			<Hero />

			<div className={`space-y-20`}>
				<Skills />
				<Experiences width={width ?? 0} />
				<Projects />
				<Footer />
			</div>
		</div>
	)
}
