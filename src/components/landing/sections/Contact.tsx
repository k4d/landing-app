import {
	Button,
	Description,
	FieldError,
	FieldGroup,
	Form,
	Input,
	Label,
	TextArea,
	TextField,
} from "@heroui/react"
import { Mail, MapPin, MessageSquare, Send } from "lucide-react"

const contactInfo = [
	{
		icon: Mail,
		title: "Email",
		text: "hello@landingapp.dev",
	},
	{
		icon: MapPin,
		title: "Location",
		text: "San Francisco, CA",
	},
	{
		icon: MessageSquare,
		title: "Live Chat",
		text: "Available 9am — 5pm PST",
	},
]

export const Contact = () => {
	return (
		<section id="contact" className="w-full py-16">
			<div className="mx-auto grid max-w-6xl grid-cols-2 items-start gap-x-16">
				<div>
					<p className="mb-2 font-normal text-gray-400 text-xs tracking-widest">
						<span className="text-indigo-600">04</span>
						<span className="mx-2 mb-0.5 inline-block h-px w-4 bg-gray-400/50 align-middle" />
						<span className="uppercase">Contact</span>
					</p>
					<h2 className="bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text font-bold text-5xl text-transparent tracking-tighter">
						Let's build something together
					</h2>
					<p className="mt-8 font-extralight text-base text-gray-600 leading-relaxed">
						Have a project in mind? Reach out and we'll help you turn it into reality.
					</p>

					<div className="mt-10 flex flex-col gap-y-4">
						{contactInfo.map((item) => (
							<a
								key={item.title}
								href={
									item.title === "Email"
										? "mailto:hello@landingapp.dev"
										: item.title === "Live Chat"
											? "#contact-form"
											: undefined
								}
								className="group flex items-center gap-x-4 transition-opacity hover:opacity-80"
							>
								<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-indigo-100 bg-linear-to-br from-white to-transparent">
									<item.icon className="h-5 w-5 text-indigo-800" strokeWidth={1} />
								</div>
								<div>
									<p className="font-medium text-gray-800 text-sm tracking-tight">{item.title}</p>
									<p className="font-extralight text-gray-600 text-sm leading-relaxed">
										{item.text}
									</p>
								</div>
							</a>
						))}
					</div>
				</div>

				<Form
					id="contact-form"
					className="flex flex-col gap-6 rounded-xl border border-gray-200 bg-linear-to-br from-gray-50 to-transparent p-6"
					onSubmit={(e) => {
						e.preventDefault()
						const formData = new FormData(e.currentTarget)
						const data = Object.fromEntries(formData)
						console.log("Form submitted:", data)
					}}
				>
					<FieldGroup className="grid grid-cols-2 gap-4">
						<TextField isRequired name="firstName">
							<Label>First name</Label>
							<Input className="rounded-lg placeholder:text-gray-400" placeholder="John" />
							<FieldError />
						</TextField>
						<TextField isRequired name="lastName">
							<Label>Last name</Label>
							<Input className="rounded-lg placeholder:text-gray-400" placeholder="Doe" />
							<FieldError />
						</TextField>
					</FieldGroup>

					<TextField isRequired name="email" type="email">
						<Label>Email</Label>
						<Input
							className="rounded-lg placeholder:text-gray-400"
							placeholder="john@example.com"
						/>
						<Description>We'll never share your email.</Description>
						<FieldError />
					</TextField>

					<TextField isRequired name="message">
						<Label>Message</Label>
						<TextArea
							className="rounded-lg placeholder:text-gray-400"
							placeholder="Tell us about your project..."
							rows={4}
						/>
						<FieldError />
					</TextField>

					<div className="flex justify-center">
						<Button
							type="submit"
							size="md"
							className="group h-11 bg-linear-to-r from-indigo-900 to-indigo-600 hover:brightness-110"
						>
							<span className="font-light text-base text-white">Send Message</span>
							<Send
								strokeWidth={1.5}
								className="h-4 w-4 text-white transition-transform group-hover:translate-x-0.5"
							/>
						</Button>
					</div>
				</Form>
			</div>
		</section>
	)
}
