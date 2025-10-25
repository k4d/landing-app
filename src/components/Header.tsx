import Logo from "./Logo";
import HeaderNav from "./HeaderNav";
import Search from "./Search";
import ThemeToggleButton from "./ThemeToggleButton";
import MobileMenuSheet from "./MobileMenuSheet";

import { Button } from "@/components/ui/button";

export default function Header() {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 flex w-full h-24 items-center px-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b">
			<Logo />

			<HeaderNav className="ml-8 hidden lg:flex" />

			<div className="flex items-center gap-2 ml-auto">
				<Search />
				<Button variant="ghost" className="hidden md:flex">
					Sign In
				</Button>
				<Button variant="outline" className="hidden md:flex">
					Sign Up
				</Button>

				<ThemeToggleButton className="hidden md:flex" />

				<MobileMenuSheet />
			</div>
		</header>
	);
}
