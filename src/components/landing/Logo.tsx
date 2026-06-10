import { AudioWaveform } from "lucide-react"

export const Logo = () => {
	return (
		<a href="/" className="flex items-center gap-2">
			<AudioWaveform strokeWidth={1.5} className="h-6 w-6 text-indigo-700" />
			<span className="font-bold text-base text-gray-900 tracking-tighter">Landing App</span>
		</a>
	)
}
