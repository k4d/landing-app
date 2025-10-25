import Logo from "./Logo";
import FooterNav from "./FooterNav";
import Icons from "./Icons";

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
					<Icons
						icons={["icon-astro", "icon-react", "icon-shadcn", "icon-tailwind"]}
						iconClassName="size-5"
						className="flex gap-x-2 ml-7 mt-4"
					/>
				</div>
				<FooterNav />
			</div>
			<Separator className="mt-4 mb-2" />
			<div className="mt-4 mb-8 ml-8 font-extralight text-sm text-gray-600">
				Copyright © {new Date().getFullYear()}. All rights reserved.
			</div>
		</footer>
	);
}
