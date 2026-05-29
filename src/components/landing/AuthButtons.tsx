import { Button } from "@heroui/react"
import { ArrowRight } from "lucide-react"

export const AuthButtons = () => {
	return (
		<>
			<Button variant="outline">
				<span className="font-normal text-sm">Log in</span>
			</Button>
			<Button>
				<span className="font-normal text-sm">Start Free</span>
				<ArrowRight strokeWidth={1.5} className="h-4 w-4" />
			</Button>
		</>
	)
}
