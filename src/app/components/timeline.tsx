import Image from 'next/image'

export interface TimelineItemData {
	date: string
	company: string
	role: string
	imgSrc: string
	imgAlt: string
	description: React.ReactNode
}

interface TimelineProps {
	items: TimelineItemData[]
}

export function Timeline({ items }: TimelineProps) {
	return (
		<section className="relative w-full max-w-[1000px] mx-auto">
			{/* Vertical spine */}
			<div
				className="pointer-events-none absolute left-[40px] top-0 bottom-0 w-[2px] bg-white"
				aria-hidden
			/>

			<ol className="flex flex-col gap-16 list-none p-0 m-0">
				{items.map((item, index) => (
					<li
						key={item.company + item.date}
						className="grid grid-cols-[80px_minmax(0,1fr)] gap-x-3 sm:gap-x-10 relative items-center"
					>
						{/* Logo node column */}
						<div className="relative flex justify-center">
							<div className="relative sm:w-[72px] sm:h-[72px] w-[60px] h-[60px] rounded-[12px] overflow-hidden border-2 border-white bg-[#07090f] grid">
								<Image
									src={item.imgSrc}
									alt={item.imgAlt}
									fill
									sizes="72px"
									className="object-contain"
								/>
							</div>
						</div>

						{/* Experience card column */}
						<div className="w-full">
							<div className="glass-light p-3 sm:p-4">
								<h3 className="sm:text-xl text-lg font-medium text-white">
									{item.role}
								</h3>

								<p className="sm:text-base text-sm text-[#5cffd1] font-semibold">
									{item.company}
								</p>

								<p className="text-[#ececec] sm:text-base text-sm">
									{item.date}
								</p>

								<p className="text-white sm:text-sm text-xs mt-5">
									{item.description}
								</p>
							</div>
						</div>
					</li>
				))}
			</ol>
		</section>
	)
}
