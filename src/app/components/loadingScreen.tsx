'use client'

import { pixelifySans } from '../styles/fonts'

export default function LoadingScreen() {
	return (
		<div className="fixed inset-0 bg-black flex flex-row items-center gap-4 justify-center z-50">
			<p
				className={`text-white text-xl font-medium ${pixelifySans.className}`}
			>
				loading...
			</p>
			<div className="w-5 h-5 border-[3px] border-[#ff7847]/20 border-t-[#ff7847] rounded-full animate-spin"></div>
		</div>
	)
}
