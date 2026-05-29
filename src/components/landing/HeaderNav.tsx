const links = [
	{ href: "#products", label: "Products" },
	{ href: "#features", label: "Features" },
	{ href: "#about", label: "About Us" },
	{ href: "#contact", label: "Contact Us" },
	{ href: "#docs", label: "Docs" },
]

export const HeaderNav = () => {
	return (
		<nav className="mt-0.5 flex gap-x-8 font-normal text-gray-600 text-sm">
			{links.map((link) => (
				<a
					key={link.href}
					href={link.href}
					className="relative inline-block transition-all duration-300 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-full after:origin-center after:-translate-x-1/2 after:scale-x-0 after:rounded-full after:bg-indigo-800 after:transition-transform after:duration-300 hover:-translate-y-0.5 hover:text-indigo-800 hover:after:scale-x-100"
				>
					{link.label}
				</a>
			))}
		</nav>
	)
}
