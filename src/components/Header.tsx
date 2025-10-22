import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import { SearchIcon, Mountain } from "lucide-react";
export function Header() {
	return (
		<header className="flex h-16 w-full items-center justify-between px-4 md:px-6 bg-background border-b">
			<a href="#" className="flex items-center gap-2 font-semibold">
				<Mountain className="h-6 w-6" />
				<span>Landing App</span>
			</a>

			<div className="flex items-center gap-4">
				<ButtonGroup className="hidden md:flex">
					<Input placeholder="Search..." />
					<Button variant="outline" aria-label="Search">
						<SearchIcon />
					</Button>
				</ButtonGroup>
				<Button variant="ghost" className="hidden md:flex">
					Sign In
				</Button>
				<Button variant="outline" className="hidden md:flex">
					Sign Up
				</Button>
			</div>
		</header>
	);
}
