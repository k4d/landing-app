import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingPlans = [
	{
		name: "Basic",
		price: "$10",
		description: "For individuals and small side projects.",
		features: ["1 Project", "Basic Analytics", "Limited Support"],
		featured: false,
	},
	{
		name: "Pro",
		price: "$25",
		description: "For growing businesses and startups.",
		features: [
			"10 Projects",
			"Advanced Analytics",
			"Priority Email Support",
			"Team Collaboration",
		],
		featured: true,
	},
	{
		name: "Enterprise",
		price: "Contact Us",
		description: "For large-scale organizations with custom needs.",
		features: [
			"Unlimited Projects",
			"Dedicated Account Manager",
			"24/7 Phone Support",
			"Custom Integrations",
		],
		featured: false,
	},
];

export default function Pricing() {
	return (
		<section id="pricing" className="scroll-mt-24 bg-gray-50">
			<div className="max-w-6xl py-16 mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-5xl font-extrabold tracking-tight text-gray-800">
						Flexible Pricing for Teams of All Sizes
					</h2>
					<p className="pt-8 font-extralight text-gray-600">
						Choose the plan that's right for you. No hidden fees.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{pricingPlans.map((plan) => (
						<Card
							key={plan.name}
							className={`flex flex-col ${plan.featured ? "border-2 border-blue-600 shadow-xl" : "border hover:border-blue-600 transition-colors duration-300 ease-in-out"}`}
						>
							<CardHeader>
								<CardTitle className="text-lg font-bold">{plan.name}</CardTitle>
								<CardDescription className="text-gray-600 font-extralight">
									{plan.description}
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-8 flex-1">
								<div className="text-4xl font-medium text-gray-800">
									{plan.price}
									{plan.price !== "Contact Us" && (
										<span className="text-base font-extralight text-gray-600">
											/ month
										</span>
									)}
								</div>
								<ul className="space-y-3">
									{plan.features.map((feature) => (
										<li key={feature} className="flex items-center">
											<Check className="h-4 w-4 text-blue-600 mr-2" />
											<span className="font-extralight text-base text-gray-600">
												{feature}
											</span>
										</li>
									))}
								</ul>
							</CardContent>
							<CardFooter>
								<Button
									size="lg"
									className="w-full"
									variant={plan.featured ? "default" : "outline"}
								>
									Get Started
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
