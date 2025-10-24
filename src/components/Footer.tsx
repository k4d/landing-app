import Logo from "./Logo";
import FooterNav from "./FooterNav";

import { Separator } from "@/components/ui/separator";

export default function Footer() {
	return (
		<footer className="px-6 pt-4 bg-background border-t">
			<div className="flex gap-x-16">
				<div className="">
					<Logo />
					<p className="mt-4 mb-1 ml-8 font-extralight text-sm text-gray-600">
						A collection of components for your startup business or side
						project.
					</p>
					<div className="flex gap-x-2 ml-7 mt-4">
						<img src="/icon-astro.svg" className="size-5" />
						<img src="/icon-react.svg" className="size-5" />
						<img src="/icon-shadcn.svg" className="size-4" />
						<img src="/icon-tailwind.svg" className="size-5" />
					</div>
				</div>
				<FooterNav />
			</div>
			<Separator className="mt-4 mb-2" />
			<div className="mt-4 ml-8 font-extralight text-sm text-gray-600">
				Copyright © {new Date().getFullYear()}. All rights reserved.
			</div>
		</footer>
	);
}
