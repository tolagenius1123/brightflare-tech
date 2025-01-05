import React from "react";
import Image from "next/image";
import { EmailIcon, LocationIcon, PhoneIcon } from "@/assets/icons";
import Link from "next/link";

export default function ContactUs() {
	return (
		<div
			id="contact"
			className="w-full bg-customDarkRed px-8 md:px-10 py-20 text-white text-center"
		>
			<div className="w-[90%] mx-auto flex flex-col items-center gap-5">
				<p className="font-semibold">Connect</p>
				<h1 className="text-3xl md:text-4xl font-semibold">
					Get in Touch
				</h1>
				<p>We&apos;re here to assist you with your inquiries</p>
				<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
					<div className="flex flex-col gap-3 items-center">
						<Image src={EmailIcon} alt="email-icon" />
						<h1 className="text-xl md:text-2xl font-semibold">
							Email
						</h1>
						<p className="font-normal">
							Reach us at your convenience for any questions.
						</p>
						<Link href="mailto:brightflaretechnologies@gmail.com">
							brightflaretechnologies@gmail.com
						</Link>
					</div>
					<div className="flex flex-col gap-3 items-center">
						<Image src={PhoneIcon} alt="phone-icon" />
						<h1 className="text-xl md:text-2xl font-semibold">
							Phone
						</h1>
						<p className="font-normal">
							Call us for immediate assistance and support
						</p>
						<div className="flex flex-col items-center">
							<div className="flex items-center gap-2">
								<span className="font-semibold">Mobile:</span>
								+234 703 831 9232
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-3 items-center">
						<Image src={LocationIcon} alt="email-icon" />
						<h1 className="text-xl md:text-2xl font-semibold">
							Office
						</h1>
						<p className="font-normal">
							Visit us for a personal consultation and support
						</p>
						<p>Yaba, Lagos, Nigeria.</p>
					</div>
				</div>
			</div>
		</div>
	);
}
