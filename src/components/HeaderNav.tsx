import * as React from "react";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface HeaderNavProps {
	className?: string;
	isMobile?: boolean;
}

interface NavItem {
	title: string;
	href: string;
	description?: string;
	subItems?: NavItem[];
}

const navigationItems: NavItem[] = [
	{
		title: "Products",
		href: "#products",
		subItems: [
			{
				title: "Product 1",
				href: "#product-1",
				description: "Product 1 description text",
			},
			{
				title: "Product 2",
				href: "#product-2",
				description: "Product 2 description text",
			},
			{
				title: "Product 3",
				href: "#product-3",
				description: "Product 3 description text",
			},
		],
	},
	{
		title: "Features",
		href: "#features",
	},
	{
		title: "Pricing",
		href: "#pricing",
	},
	{
		title: "About Us",
		href: "#about",
	},
	{
		title: "Contact",
		href: "#contact",
	},
];

const ListItem = React.forwardRef<React.ComponentRef<"a">, React.ComponentPropsWithoutRef<"a"> & {

	title: string;

}>(

	({ className, title, children, ...props }, forwardedRef) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={forwardedRef}
					className={cn(
						"focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="text-muted-foreground leading-snug text-sm">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";

export const HeaderNav = ({ className, isMobile }: HeaderNavProps) => {
	return (
		<NavigationMenu className={className}>
			<NavigationMenuList
				className={cn(
					isMobile ? "flex-col items-start justify-start gap-2" : "",
					"flex-wrap"
				)}
			>
				{navigationItems.map((item) => (
					<NavigationMenuItem key={item.title}>
						{item.subItems && !isMobile ? (
							<>
								<NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[300px] gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
										{item.subItems.map((subItem) => (
											<ListItem
												key={subItem.title}
												href={subItem.href}
												title={subItem.title}
											>
												{subItem.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</>
						) : (
							<NavigationMenuLink href={item.href} className="w-full">
								{item.title}
							</NavigationMenuLink>
						)}
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default HeaderNav;
