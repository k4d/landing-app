import * as z from "zod";

export const rootNavData = [
	{
		title: "Products",
		href: "#products",
		subItems: [
			{
				title: "Marketing Page",
				href: "#marketing",
				description: "Marketing page description text.",
			},
			{
				title: "Dashboard",
				href: "#dashboard",
				description: "Dashboard description text.",
			},
			{
				title: "CMS",
				href: "#cms",
				description: "CMS description text",
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
		title: "Contact Us",
		href: "#contact",
	},
];

const RootNavDataSchema = z.array(
	z.object({
		title: z
			.string()
			.min(3, { message: "Title must be at least 3 characters long" })
			.max(18, { message: "Title must be at most 18 characters long" }),
		href: z
			.string()
			.min(1, { message: "Href must be at least 1 character long" })
			.max(12, { message: "Href must be at most 12 characters long" }),
		subItems: z
			.array(
				z.object({
					title: z
						.string()
						.min(3, { message: "Title must be at least 3 characters long" })
						.max(18, { message: "Title must be at most 18 characters long" }),
					href: z
						.string()
						.min(1, { message: "Href must be at least 1 character long" })
						.max(12, { message: "Href must be at most 12 characters long" }),
					description: z
						.string()
						.min(8, {
							message: "Description must be at least 8 characters long",
						})
						.max(32, {
							message: "Description must be at most 32 characters long",
						}),
				})
			)
			.optional(),
	})
);

export type RootNavData = z.infer<typeof RootNavDataSchema>;
export type RootNavItem = RootNavData[number];
export const parseRootNavData = RootNavDataSchema.parse(rootNavData);
