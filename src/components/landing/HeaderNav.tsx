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
					className="transition-colors duration-300 hover:text-indigo-800"
				>
					{link.label}
				</a>
			))}
		</nav>
	)
}
