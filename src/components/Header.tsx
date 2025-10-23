import HeaderNav from "./HeaderNav";
import Search from "./Search";
import ThemeToggleButton from "./ThemeToggleButton";
import MobileMenuSheet from "./MobileMenuSheet";

import { Button } from "@/components/ui/button";
import { Mountain } from "lucide-react";

export default function Header() {
	return (
		<header className="flex h-16 w-full items-center justify-between px-4 md:px-6 bg-background border-b">
			<a href="/" className="flex items-center gap-2 font-semibold">
				<Mountain className="h-6 w-6" />
				<span>Landing App</span>
			</a>

			<HeaderNav className="hidden md:flex" />

			<div className="flex items-center gap-2">
				<Search />
				<Button variant="ghost" className="hidden md:flex">
					Sign In
				</Button>
				<Button variant="outline" className="hidden md:flex">
					Sign Up
				</Button>

				<ThemeToggleButton />

				<MobileMenuSheet />
			</div>
		</header>
	);
}
