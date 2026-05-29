export function Footer() {
	return (
		<footer className="border-gray-200 border-t bg-gray-50">
			<div className="mx-auto flex h-20 max-w-6xl flex-col items-center justify-center">
				<p className="font-light text-gray-400 text-sm">
					&copy; {new Date().getFullYear()} Landing App. All rights reserved.
				</p>
			</div>
		</footer>
	)
}
