import SearchInput from "./SearchInput";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { SearchIcon } from "lucide-react";

export default function Search() {
	return (
		<>
			<div className="hidden items-center md:flex">
				<SearchInput isMobile={false} />
			</div>
			<Dialog>
				<DialogTrigger asChild>
					<Button variant="outline" size="icon" className="md:hidden">
						<SearchIcon className="h-4 w-4" />
					</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Search</DialogTitle>
					</DialogHeader>
					<SearchInput isMobile={true} />
				</DialogContent>
			</Dialog>
		</>
	);
}
