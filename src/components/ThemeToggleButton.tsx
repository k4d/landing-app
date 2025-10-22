import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

export function ThemeToggleButton() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleTheme = () => {
		setIsDarkMode((prevMode) => !prevMode);
	};

	return (
		<Button
			variant="ghost"
			size="icon"
			className="rounded-full"
			onClick={toggleTheme}
		>
			{isDarkMode ? <Moon /> : <Sun />}
		</Button>
	);
}
