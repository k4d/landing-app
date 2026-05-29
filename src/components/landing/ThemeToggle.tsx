import { Button } from "@heroui/react"
import { Sun } from "lucide-react"

export const ThemeToggle = () => {
	return (
		<Button isIconOnly variant="ghost">
			<Sun strokeWidth={1.5} className="h-4 w-4" />
		</Button>
	)
}
