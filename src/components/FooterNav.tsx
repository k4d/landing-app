import { parseRootNavData } from "./RootNavData";
import type { RootNavItem } from "./RootNavData";
import type { ReactNode } from "react";

type NavItemProps = {
	title: RootNavItem["title"];
	href: RootNavItem["href"];
	children?: ReactNode;
};

function NavItem({ title, href, children }: NavItemProps) {
	return (
		<>
			<div>
				<a
					href={href}
					title={title}
					className="text-base font-semibold text-gray-800 hover:text-blue-800"
				>
					{title}
				</a>
				<div className="mt-4 flex flex-col gap-y-2">{children}</div>
			</div>
		</>
	);
}

type NavSubItemProps = {
	title: NonNullable<RootNavItem["subItems"]>[number]["title"];
	href: NonNullable<RootNavItem["subItems"]>[number]["href"];
};

function NavSubItem({ title, href }: NavSubItemProps) {
	return (
		<a
			href={href}
			title={title}
			className="font-normal text-gray-500 text-sm hover:text-gray-800"
		>
			{title}
		</a>
	);
}

export default function FooterNav() {
	return (
		<nav className="flex gap-x-8">
			{parseRootNavData.map((item: RootNavItem) => (
				<NavItem key={item.title} href={item.href} title={item.title}>
					{item.subItems?.map((child) => (
						<NavSubItem
							key={child.title}
							title={child.title}
							href={child.href}
						/>
					))}
				</NavItem>
			))}
		</nav>
	);
}
