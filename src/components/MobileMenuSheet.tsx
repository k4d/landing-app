import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu, SearchIcon } from "lucide-react";
import { HeaderNav } from "./HeaderNav";

export function MobileMenuSheet() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline" size="icon" className="md:hidden">
					<Menu className="h-6 w-6" />
					<span className="sr-only">Toggle navigation menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="right">
				<div className="grid gap-2 text-lg font-medium mt-8">
					<ButtonGroup className="w-full">
						<Input placeholder="Search..." />
						<Button variant="outline" aria-label="Search">
							<SearchIcon />
						</Button>
					</ButtonGroup>
					<Button variant="outline">Sign In</Button>
					<Button variant="outline">Sign Up</Button>

					<hr />

					<HeaderNav className="flex flex-col gap-2" isMobile={true} />
				</div>
			</SheetContent>
		</Sheet>
	);
}
