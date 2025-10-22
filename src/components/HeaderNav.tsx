import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const HeaderNav = ({
	className,
	isMobile,
}: {
	className?: string;
	isMobile?: boolean;
}) => {
	return (
		<NavigationMenu className={className}>
			<NavigationMenuList
				className={isMobile ? "flex-col items-start justify-start gap-2" : ""}
			>
				{isMobile ? (
					<NavigationMenuItem>
						<NavigationMenuLink href="#products" className="w-full">
							Products
						</NavigationMenuLink>
					</NavigationMenuItem>
				) : (
					<NavigationMenuItem>
						<NavigationMenuTrigger>Products</NavigationMenuTrigger>
						<NavigationMenuContent>
							<div className="grid w-[300px] gap-4">
								<NavigationMenuLink href="#products">
									Product 1
									<div className="text-muted-foreground">
										Product 1 description text
									</div>
								</NavigationMenuLink>
								<NavigationMenuLink href="#products">
									Product 2
									<div className="text-muted-foreground">
										Product 2 description text
									</div>
								</NavigationMenuLink>
								<NavigationMenuLink href="#products">
									Product 3
									<div className="text-muted-foreground">
										Product 3 description text
									</div>
								</NavigationMenuLink>
							</div>
						</NavigationMenuContent>
					</NavigationMenuItem>
				)}
				<NavigationMenuItem>
					<NavigationMenuLink href="#features">Features</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink href="#pricing">Pricing</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink href="#about">About Us</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink href="#contact">Contact</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};
