import { ShieldCheck, Rocket, BarChart, Users, Zap, Cloud } from "lucide-react";

const iconMap = {
	ShieldCheck,
	Rocket,
	BarChart,
	Users,
	Zap,
	Cloud,
};

const featuresData = [
	{
		icon: "ShieldCheck",
		title: "Secure & Reliable",
		description:
			"Your data is protected with industry-standard encryption and security protocols.",
	},
	{
		icon: "Rocket",
		title: "Blazing Fast Performance",
		description:
			"Our platform is optimized for speed, ensuring a smooth and responsive user experience.",
	},
	{
		icon: "BarChart",
		title: "Advanced Analytics",
		description:
			"Gain valuable insights into your performance with our powerful analytics dashboard.",
	},
	{
		icon: "Users",
		title: "Team Collaboration",
		description:
			"Easily collaborate with your team members and manage permissions with granular control.",
	},
	{
		icon: "Zap",
		title: "Powerful Integrations",
		description:
			"Connect with your favorite tools and services to streamline your workflow.",
	},
	{
		icon: "Cloud",
		title: "Cloud-Based Platform",
		description:
			"Access your work from anywhere, at any time, on any device. No installation required.",
	},
];

export default function Features() {
	return (
		<section id="features" className="scroll-mt-24">
			<div className="max-w-6xl py-16 mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-5xl font-extrabold tracking-tight text-gray-800">
						Everything You Need to Succeed
					</h2>
					<p className="mt-4 font-extralight text-gray-600">
						A powerful platform with all the right features to help you grow.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
					{featuresData.map((feature) => {
						const Icon = iconMap[feature.icon as keyof typeof iconMap];
						return (
							<div key={feature.title} className="text-center">
								<div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600 text-white mx-auto">
									<Icon className="h-6 w-6" />
								</div>
								<h3 className="mt-8 ext-lg font-bold text-gray-800">
									{feature.title}
								</h3>
								<p className="mt-2 text-base font-extralight text-gray-600">
									{feature.description}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
