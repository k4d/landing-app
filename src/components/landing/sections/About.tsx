import { Box, Braces, Globe, Sparkles } from "lucide-react"

export const About = () => {
	const principles = [
		{
			icon: Box,
			title: "Zero-config",
			text: "Start building instantly with a curated stack that just works.",
		},
		{
			icon: Braces,
			title: "Minimal JS",
			text: "Ship less JavaScript. Astro delivers near-zero runtime by default.",
		},
		{
			icon: Globe,
			title: "Edge-ready",
			text: "Deploy anywhere — fast by default, faster with edge compute.",
		},
		{
			icon: Sparkles,
			title: "Designed for scale",
			text: "Component islands, partial hydration, and lazy loading built in.",
		},
	]

	return (
		<section id="about" className="w-full bg-white py-16">
			<div className="mx-auto grid max-w-6xl grid-cols-2 items-center">
				<div>
					<p className="mb-2 font-normal text-gray-400 text-xs uppercase tracking-widest">
						<span className="text-indigo-600">03</span>
						<span className="mx-2 mb-0.5 inline-block h-px w-4 bg-gray-400/50 align-middle" />
						<span className="uppercase">About</span>
					</p>
					<h2 className="bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text font-bold text-5xl text-transparent tracking-tighter">
						Built for teams that ship with confidence
					</h2>
					<p className="mt-8 font-extralight text-base text-gray-600 leading-relaxed">
						We combine the best of static site generation with modern component frameworks. Astro
						delivers near-instant loads, React brings interactivity where it matters, and Tailwind
						CSS keeps every pixel on brand.
					</p>
					<p className="mt-4 font-extralight text-base text-gray-500 leading-relaxed">
						No bloated bundles. No unnecessary JavaScript. Just a focused stack that lets you move
						fast without breaking things.
					</p>
				</div>

				<div className="flex flex-col gap-y-4 justify-self-end">
					{principles.map((item) => (
						<div key={item.title} className="flex items-center gap-x-4">
							<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-indigo-100">
								<item.icon className="h-5 w-5 text-indigo-600" strokeWidth={1} />
							</div>
							<div>
								<p className="font-medium text-gray-800 text-sm tracking-tight">{item.title}</p>
								<p className="font-extralight text-gray-600 text-sm leading-relaxed">{item.text}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
