import { HeaderNav } from "./HeaderNav";

import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Menu } from "lucide-react";

export default function MobileMenuSheet() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline" size="icon" className="md:hidden">
					<Menu className="h-6 w-6" />
					<span className="sr-only">Toggle navigation menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="right">
				<div className="grid gap-2 text-lg font-medium mt-12 m-6">
					<Button variant="outline">Sign In</Button>
					<Button variant="outline">Sign Up</Button>

					<Separator className="mt-4 mb-2" />

					<HeaderNav className="flex flex-col gap-2" isMobile={true} />
				</div>
			</SheetContent>
		</Sheet>
	);
}
