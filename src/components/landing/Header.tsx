import { AuthButtons, HeaderNav, Logo, Search, ThemeToggle } from "@/components/landing"

export const Header = () => {
	return (
		<header className="sticky top-0 z-50 w-full border-gray-200/80 border-b bg-white/80 backdrop-blur-md">
			<div className="mx-auto flex h-24 max-w-6xl items-center gap-x-8">
				<Logo />
				<HeaderNav />

				<div className="ml-auto flex items-center gap-x-2">
					<Search />
					<AuthButtons />
					<ThemeToggle />
				</div>
			</div>
		</header>
	)
}
