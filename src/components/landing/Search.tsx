import { Command, SearchIcon } from "lucide-react"

export const Search = () => {
	return (
		<search className="relative flex items-center">
			<SearchIcon
				strokeWidth={1}
				className="pointer-events-none absolute left-3 h-4 w-4 text-gray-400"
			/>
			<input
				type="search"
				aria-label="Search"
				placeholder="Search..."
				className="h-9 w-36 rounded-lg border border-gray-200 bg-gray-50 pr-4 pl-8 font-normal text-gray-800 text-sm outline-none transition-all placeholder:text-gray-400 focus:w-48 focus:border-gray-300 focus:bg-white"
			/>
			<kbd className="pointer-events-none absolute right-3 hidden items-center gap-1 rounded-md border border-gray-200 bg-white px-1.5 py-0.5 font-medium text-[10px] text-gray-400 md:flex">
				<Command strokeWidth={1.5} className="h-3 w-3" />K
			</kbd>
		</search>
	)
}
