import { AudioWaveform } from "lucide-react"

export const Logo = () => {
	return (
		<a href="/" className="flex items-center gap-2">
			<AudioWaveform strokeWidth={1.5} className="h-6 w-6 text-indigo-600" />
			<span className="font-semibold text-base text-gray-900 tracking-tight">Landing App</span>
		</a>
	)
}
