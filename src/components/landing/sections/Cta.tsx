import { Button, FieldError, Form, Input, TextField } from "@heroui/react"
import { ArrowRight } from "lucide-react"

export const Cta = () => {
	return (
		<section id="cta" className="relative w-full overflow-hidden py-24">
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
					maskImage: "radial-gradient(ellipse at center, black 50%, transparent 80%)",
				}}
			/>
			<div className="relative mx-auto max-w-6xl px-16 text-center">
				<p className="mb-3 font-normal text-gray-400 text-xs uppercase tracking-widest">
					Get early access
				</p>
				<h2 className="bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text font-bold text-5xl text-transparent tracking-tighter">
					Ready to ship faster?
				</h2>
				<p className="mx-auto mt-4 max-w-lg font-extralight text-base text-gray-600 leading-relaxed">
					Join the waitlist and be the first to try the platform. No spam, just updates when we
					launch.
				</p>
				<Form
					className="mx-auto mt-8 flex max-w-md items-center gap-3"
					onSubmit={(e) => {
						e.preventDefault()
						const formData = new FormData(e.currentTarget)
						const data = Object.fromEntries(formData)
						console.log("Cta submitted:", data)
					}}
				>
					<div className="flex-1 text-left">
						<TextField
							aria-label="Email"
							className="relative"
							isRequired
							name="email"
							validate={(value) => {
								if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
									return "Please enter a valid email"
								}
								return null
							}}
						>
							<Input
								autoComplete="email"
								className="rounded-lg placeholder:text-gray-400"
								placeholder="you@example.com"
								type="email"
							/>
							<FieldError className="absolute -bottom-5 left-0 text-xs" />
						</TextField>
					</div>
					<Button
						type="submit"
						size="md"
						variant="outline"
						className="group h-11 border-indigo-200 bg-indigo-50 text-indigo-600 transition-colors duration-300 hover:border-indigo-600 hover:bg-indigo-100"
					>
						<span className="font-light text-base">Join Waitlist</span>
						<ArrowRight
							strokeWidth={1.5}
							className="h-4 w-4 text-indigo-600 transition-transform group-hover:translate-x-0.5"
						/>
					</Button>
				</Form>
			</div>
		</section>
	)
}
