import { AudioWaveform } from "lucide-react"

const footerLinks = {
	products: [
		{ label: "Landing Kit", href: "#products" },
		{ label: "Component Library", href: "#products" },
		{ label: "Analytics Hub", href: "#products" },
		{ label: "Asset Optimizer", href: "#products" },
	],
	company: [
		{ label: "About Us", href: "#about" },
		{ label: "Contact", href: "#contact" },
	],
}

export const Footer = () => {
	return (
		<footer className="border-gray-200 border-t bg-gray-50">
			<div className="mx-auto max-w-6xl py-8">
				<div className="grid grid-cols-[2fr_1fr_1fr] gap-x-16">
					<div>
						<a href="/" className="flex items-center gap-2">
							<AudioWaveform strokeWidth={1.5} className="h-6 w-6 text-indigo-700" />
							<span className="font-bold text-base text-gray-900 tracking-tighter">
								Landing App
							</span>
						</a>
						<p className="mt-4 max-w-xs font-extralight text-gray-500 text-sm leading-relaxed">
							A curated stack of Astro, React, Tailwind CSS, and HeroUI — designed for fast,
							accessible, and beautiful landing pages.
						</p>
					</div>

					<div>
						<h4 className="font-medium text-gray-800 text-sm tracking-tight">Products</h4>
						<ul className="mt-4 flex flex-col gap-y-1">
							{footerLinks.products.map((link) => (
								<li key={link.label}>
									<a
										href={link.href}
										className="font-normal text-gray-500 text-sm transition-colors hover:text-indigo-800"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="font-medium text-gray-800 text-sm tracking-tight">Company</h4>
						<ul className="mt-4 flex flex-col gap-y-1">
							{footerLinks.company.map((link) => (
								<li key={link.label}>
									<a
										href={link.href}
										className="font-light text-gray-500 text-sm transition-colors hover:text-indigo-800"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="mt-8 flex items-center justify-between border-gray-200 border-t pt-8">
					<p className="font-light text-gray-400 text-sm">
						&copy; {new Date().getFullYear()} Landing App. All rights reserved.
					</p>
					<div className="flex gap-x-6">
						<a
							href="/privacy"
							className="font-light text-gray-400 text-sm transition-colors hover:text-gray-600"
						>
							Privacy Policy
						</a>
						<a
							href="/terms"
							className="font-light text-gray-400 text-sm transition-colors hover:text-gray-600"
						>
							Terms of Service
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
