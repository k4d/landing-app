import React from "react";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import { Megaphone, LayoutDashboard, FileText } from "lucide-react";

const iconMap = {
	Megaphone,
	LayoutDashboard,
	FileText,
};

const productsData = [
	{
		icon: "Megaphone",
		title: "Marketing Page",
		description:
			"Create stunning, high-converting landing pages with our intuitive drag-and-drop builder. Launch campaigns in minutes, not days.",
	},
	{
		icon: "LayoutDashboard",
		title: "Dashboard",
		description:
			"Get a comprehensive overview of your business performance with real-time analytics and customizable dashboards. Make data-driven decisions.",
	},
	{
		icon: "FileText",
		title: "CMS",
		description:
			"Manage your content effortlessly. Our powerful CMS allows you to create, edit, and publish content with ease, keeping your site fresh.",
	},
];

export default function Products() {
	return (
		<section id="products" className="scroll-mt-24 bg-gray-50">
			<div className="max-w-6xl mx-auto py-16">
				<div className="text-center mb-16">
					<h2 className="text-5xl font-extrabold tracking-tight text-gray-800">
						Our Core Products
					</h2>
					<p className="mt-4 font-extralight text-gray-600">
						Discover the powerful tools designed to elevate your business.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{productsData.map((product) => {
						const Icon = iconMap[product.icon as keyof typeof iconMap];
						return (
							<Card key={product.title} className="text-center gap-4">
								<CardHeader>
									<div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto">
										<Icon className="h-6 w-6" />
									</div>
									<CardTitle className="mt-8 ext-lg font-bold text-gray-800">
										{product.title}
									</CardTitle>
								</CardHeader>
								<CardContent className="px-8">
									<CardDescription className="text-base font-extralight text-gray-600">
										{product.description}
									</CardDescription>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
}
