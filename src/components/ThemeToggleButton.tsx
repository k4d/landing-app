import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleButtonProps {
  className?: string;
}

export default function ThemeToggleButton({ className }: ThemeToggleButtonProps) {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleTheme = () => {
		setIsDarkMode((prevMode) => !prevMode);
	};

	return (
		<Button
			variant="ghost"
			size="icon"
			className={cn("rounded-full", className)}
			onClick={toggleTheme}
		>
			{isDarkMode ? <Moon /> : <Sun />}
		</Button>
	);
}