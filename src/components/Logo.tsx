import { AudioWaveform } from "lucide-react";

export default function Logo() {
	return (
		<a href="#home" className="flex items-center gap-2">
			<AudioWaveform className="h-6 w-6 text-blue-600" />
			<span className="font-extrabold text-gray-800 text-sm">Landing App</span>
		</a>
	);
}
