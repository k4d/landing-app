import { Button, Chip } from "@heroui/react"
import { Cloud, Cpu, HardDrive, Monitor } from "lucide-react"

const products = [
	{
		icon: Cpu,
		title: "Landing Kit",
		description:
			"Pre-built, fully responsive landing page templates. Drop in your content and deploy in minutes.",
		badge: "Popular",
	},
	{
		icon: Monitor,
		title: "Component Library",
		description:
			"Accessible, themeable UI components built on HeroUI v3. Designed for speed and consistency.",
		badge: "Beta",
	},
	{
		icon: Cloud,
		title: "Analytics Hub",
		description:
			"Real-time dashboard for page performance, user behavior, and conversion tracking.",
		badge: "New",
	},
	{
		icon: HardDrive,
		title: "Asset Optimizer",
		description:
			"Automated image compression, code splitting, and bundle analysis. Keep your builds lean.",
		badge: "Stable",
	},
]

export const Products = () => {
	return (
		<section id="products" className="w-full bg-white py-16">
			<div className="mx-auto grid max-w-6xl grid-cols-2 items-start gap-x-16">
				<div>
					<p className="mb-2 font-normal text-gray-400 text-xs tracking-widest">
						<span className="text-indigo-600">01</span>
						<span className="mx-2 mb-0.5 inline-block h-px w-4 bg-gray-400/50 align-middle" />
						<span className="uppercase">Products</span>
					</p>
					<h2 className="bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text font-bold text-5xl text-transparent tracking-tighter">
						Tools that scale with your workflow
					</h2>
					<p className="mt-8 font-extralight text-base text-gray-600 leading-relaxed">
						From landing pages to full product suites — each tool is built to integrate seamlessly
						with your existing stack.
					</p>
				</div>

				<div className="grid grid-cols-2 gap-4 justify-self-end">
					{products.map((product) => (
						<div
							key={product.title}
							className="group relative rounded-xl border border-gray-200 bg-linear-to-br from-gray-50 to-transparent p-4"
						>
							{product.badge && (
								<Chip
									size="sm"
									variant="soft"
									className="absolute top-4 right-4 px-2 font-normal text-xs"
								>
									{product.badge}
								</Chip>
							)}
							<div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-linear-to-br from-white to-transparent">
								<product.icon className="h-5 w-5 text-indigo-800" strokeWidth={1} />
							</div>
							<h3 className="mt-4 font-semibold text-gray-800 text-sm tracking-tight">
								{product.title}
							</h3>
							<p className="mt-2 font-extralight text-gray-600 text-sm leading-relaxed">
								{product.description}
							</p>
							<Button
								variant="outline"
								size="sm"
								className="mt-4 border-indigo-100 transition-colors duration-300 hover:border-indigo-200 hover:bg-transparent"
							>
								<span className="font-normal text-xs">Learn more</span>
							</Button>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
