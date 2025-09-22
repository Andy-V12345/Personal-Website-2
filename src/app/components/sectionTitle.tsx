export default function SectionTitle({ title }: { title: string }) {
	return (
		<div>
			<p
				className={`mx-auto glass w-max px-3 py-2 text-gray-600 text-xs font-semibold rounded-2xl`}
			>
				{title}
			</p>
		</div>
	)
}
