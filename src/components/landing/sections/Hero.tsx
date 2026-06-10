import { Button } from "@heroui/react"
import { ArrowRight } from "lucide-react"

interface Props {
	title?: string
	description?: string
}

export const Hero = ({ title, description }: Props) => {
	return (
		<section id="hero" className="relative w-full overflow-hidden py-16">
			<div
				aria-hidden="true"
				className="pointer-events-none absolute top-1/2 left-1/2 h-350 w-350 -translate-x-1/2 -translate-y-1/2 rounded-full"
				style={{
					background:
						"radial-gradient(circle, rgba(99,102,241,0.1) 0%, rgba(99,102,241,0.03) 50%, transparent 75%)",
				}}
			/>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 bg-repeat"
				style={{
					backgroundImage: "radial-gradient(rgba(99,102,241,0.4) 1.2px, transparent 1.2px)",
					backgroundSize: "24px 24px",
					maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
				}}
			/>
			<div className="relative mx-auto flex max-w-3xl flex-col items-center justify-center text-center">
				<h1 className="bg-linear-to-r from-indigo-950 to-indigo-600 bg-clip-text font-bold text-6xl text-transparent tracking-tighter">
					{title ?? "Build. Ship. Scale."}
				</h1>

				<p className="mt-8 font-extralight text-base text-gray-600 leading-relaxed">
					{description ??
						"The modern foundation for crafting exceptional digital experiences — fast, fluid, and built to last."}
				</p>
			</div>

			<div className="mt-8 flex items-center justify-center gap-x-2">
				<Button
					size="md"
					className="group h-11 bg-linear-to-r from-indigo-900 to-indigo-600 hover:brightness-110"
				>
					<span className="font-light text-base text-white">Try build for free</span>
					<ArrowRight
						strokeWidth={1.5}
						className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
					/>
				</Button>
				<Button
					size="md"
					variant="outline"
					className="border-indigo-200 bg-indigo-50 transition-transform duration-300 hover:scale-[1.02] hover:border-indigo-300"
				>
					<span className="font-normal text-sm">Learn More</span>
				</Button>
			</div>
		</section>
	)
}
