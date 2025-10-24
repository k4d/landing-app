import * as React from "react";
import { cn } from "@/lib/utils";

import { parseRootNavData, type RootNavItem } from "./RootNavData";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface HeaderNavProps {
	className?: string;
	isMobile?: boolean;
}

const ListItem = React.forwardRef<
	React.ComponentRef<"a">,
	React.ComponentPropsWithoutRef<"a"> & {
		title: string;
	}
>(({ className, title, children, ...props }, forwardedRef) => {
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
				{parseRootNavData.map((item: RootNavItem) => (
					<NavigationMenuItem key={item.title} className="mx-2">
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
