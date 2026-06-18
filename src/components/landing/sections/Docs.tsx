import { Button } from "@heroui/react"
import { BookOpen, Code } from "lucide-react"

const docs = [
	{
		icon: BookOpen,
		title: "Quick Start",
		description:
			"Get up and running in minutes. Installation guides, basic setup, and your first deploy.",
	},
	{
		icon: Code,
		title: "Full API Docs",
		description: "Complete reference for every component, prop, and hook. Examples included.",
	},
]

export const Docs = () => {
	return (
		<section id="docs" className="w-full bg-white py-16">
			<div className="mx-auto grid max-w-6xl grid-cols-2 items-start gap-x-16">
				<div>
					<p className="mb-2 font-normal text-gray-400 text-xs tracking-widest">
						<span className="text-indigo-600">05</span>
						<span className="mx-2 mb-0.5 inline-block h-px w-4 bg-gray-400/50 align-middle" />
						<span className="uppercase">Documentation</span>
					</p>
					<h2 className="bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text font-bold text-5xl text-transparent tracking-tighter">
						Everything you need
					</h2>
					<p className="mt-8 font-extralight text-base text-gray-600 leading-relaxed">
						Explore our guides and documentation to start building with confidence.
					</p>
				</div>

				<div className="grid grid-cols-2 gap-4 justify-self-end">
					{docs.map((doc) => (
						<div
							key={doc.title}
							className="group relative rounded-xl border border-gray-200 bg-linear-to-br from-gray-50 to-transparent p-4"
						>
							<div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-linear-to-br from-white to-transparent">
								<doc.icon className="h-5 w-5 text-indigo-800" strokeWidth={1} />
							</div>
							<h3 className="mt-4 font-semibold text-gray-800 text-sm tracking-tight">
								{doc.title}
							</h3>
							<p className="mt-2 font-extralight text-gray-600 text-sm leading-relaxed">
								{doc.description}
							</p>
							<Button
								variant="outline"
								size="sm"
								className="mt-4 border-indigo-100 transition-colors duration-300 hover:border-indigo-400 hover:bg-transparent"
							>
								<span className="font-normal text-xs">Read more</span>
							</Button>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
