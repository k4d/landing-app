import { Code2, Gauge, Palette, Shield } from "lucide-react"

const features = [
	{
		icon: Code2,
		title: "Modern stack",
		description:
			"React 19, TypeScript strict mode, and HeroUI v3 components. Built with Bun for speed and Biome for clean code.",
	},
	{
		icon: Palette,
		title: "Beautiful by default",
		description:
			"Tailwind CSS v4 with a carefully crafted design system. Consistent spacing, typography, and color out of the box.",
	},
	{
		icon: Gauge,
		title: "Lightning fast",
		description:
			"Astro delivers near-instant page loads by shipping zero JavaScript by default. Add interactivity only where you need it.",
	},
	{
		icon: Shield,
		title: "Battle tested",
		description:
			"Type-safe from top to bottom. Strict TypeScript, accessibility-first components, and a proven architecture.",
	},
]

export const Features = () => {
	return (
		<section id="features" className="w-full py-16">
			<div className="mx-auto grid max-w-6xl grid-cols-2 items-start gap-x-16">
				<div>
					<p className="mb-2 font-normal text-gray-400 text-xs tracking-widest">
						<span className="text-indigo-600">02</span>
						<span className="mx-2 mb-0.5 inline-block h-px w-4 bg-gray-400/50 align-middle" />
						<span className="uppercase">Features</span>
					</p>
					<h2 className="bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text font-bold text-5xl text-transparent tracking-tighter">
						Everything you need to
						<br />
						ship fast
					</h2>
					<p className="mt-8 font-extralight text-base text-gray-600 leading-relaxed">
						A curated set of tools and conventions that eliminate decision fatigue and let you focus
						on what matters — building your product.
					</p>
				</div>

				<div className="grid grid-cols-2 gap-4 justify-self-end">
					{features.map((feature) => (
						<div
							key={feature.title}
							className="group relative rounded-xl border border-gray-200 bg-linear-to-br from-white to-gray-50 p-4"
						>
							<div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-linear-to-br from-white to-transparent">
								<feature.icon className="h-5 w-5 text-indigo-800" strokeWidth={1} />
							</div>
							<h3 className="mt-4 font-semibold text-gray-800 text-sm tracking-tight">
								{feature.title}
							</h3>
							<p className="mt-2 font-extralight text-gray-600 text-sm leading-relaxed">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
