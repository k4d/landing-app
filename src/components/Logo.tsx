import { Mountain } from "lucide-react";

export default function Logo() {
	return (
		<a href="/" className="flex items-center gap-2 font-semibold">
			<Mountain className="h-6 w-6" />
			<span>Landing App</span>
		</a>
	);
}
