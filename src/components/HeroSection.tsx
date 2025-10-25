import Icons from "./Icons";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
	return (
		<section id="home" className="scroll-mt-24">
			<div className="max-w-4xl py-16 mx-auto text-center">
				<h1 className="text-5xl font-bold tracking-tight text-gray-800">
					Landing App
				</h1>
				<p className="pt-8 font-extralight text-gray-600">
					A collection of components for your startup business or side project.
				</p>
				<Icons
					icons={["icon-astro", "icon-react", "icon-shadcn", "icon-tailwind"]}
					iconClassName="size-6"
					className="pt-4 flex justify-center gap-x-2"
				/>
				<div className="pt-8 flex items-center justify-center gap-x-2">
					<Button size="lg">Get Started</Button>
					<Button variant="outline" size="lg">
						Learn More
					</Button>
				</div>
			</div>
		</section>
	);
}
