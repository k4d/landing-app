import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactUs() {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const data = Object.fromEntries(formData.entries());

		console.log("Contact form submitted:", data);

		alert(
			`Thank you for your message, ${data.name}! We will get back to you soon.`
		);

		event.currentTarget.reset();
	};

	return (
		<section id="contact" className="scroll-mt-24 bg-gray-50">
			<div className="max-w-lg mx-auto py-16">
				<div className="text-center">
					<h2 className="text-5xl font-extrabold tracking-tight text-gray-800">
						Contact Us
					</h2>
					<p className="pt-8 font-extralight text-gray-600">
						Have a question or want to work together? We’d love to hear from
						you.
					</p>
				</div>
				<form onSubmit={handleSubmit} className="space-y-8">
					<div className="pt-8">
						<label
							htmlFor="name"
							className="block text-sm font-normal text-gray-800 mb-2"
						>
							Name
						</label>
						<Input
							id="name"
							name="name"
							type="text"
							placeholder="Your Name"
							required
							className="bg-white"
						/>
					</div>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-normal text-gray-800 mb-2"
						>
							Email
						</label>
						<Input
							id="email"
							name="email"
							type="email"
							placeholder="your.email@example.com"
							required
							className="bg-white"
						/>
					</div>
					<div>
						<label
							htmlFor="message"
							className="block text-sm font-normal text-gray-800 mb-2"
						>
							Message
						</label>
						<Textarea
							id="message"
							name="message"
							placeholder="How can we help you?"
							required
							rows={5}
							className="bg-white"
						/>
					</div>
					<div className="text-center">
						<Button type="submit" size="lg">
							Send Message
						</Button>
					</div>
				</form>
			</div>
		</section>
	);
}
